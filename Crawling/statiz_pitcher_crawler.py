# statiz_batter_crawler.py
# for chrome ver.97
# coded by Chan Ho Song
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from html_table_parser import parser_functions
import pandas as pd
import sys
import io

# KOR crack prevent
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# Load
driver = webdriver.Chrome("C:\chromedriver.exe")
driver.implicitly_wait(5)
url = 'http://www.statiz.co.kr/stat.php?re=1&lr='

# Dataframe list
df_list = []

# lists for birth
ds_pit_names_list=[]
ds_pit_birth_list=[]

driver.get(url)

while True:
    
    # Get table
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find_all("table")
    ds_pit_names=soup.select('#fixcol > table > tbody > tr > td > a')
    
    for ds_pit_name in ds_pit_names:
        ds_pit_names_list.append(ds_pit_name.get_text())
        ds_pit_birth_list.append(ds_pit_name['href'][-10:])

    # Parsing
    p = parser_functions.make2d(table[1])

    # Set DataFrame
    df_temp = pd.DataFrame(p[2:], columns=p[0])
    df_list.append(df_temp)

    # Go to next page
    try:
        driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)
    except:
        break

# Combine Dataframes
df_res = pd.concat(df_list)

# Drop unnecessary info
df_res = df_res.drop(columns=['순','정렬'], axis=1)
idx_trash = df_res[df_res['이름'] == '이름'].index
df_res = df_res.drop(idx_trash)
df_res.reset_index(inplace=True, drop=True)

# rename columns
df_res.columns = ["이름", "팀", "출장","완투","완봉","선발","승","패","세이브","홀드","이닝","실점","자책","타자","피안타","피2루","피3루","피홈런","볼넷","고의사구","사구","탈삼진","보크","폭투","ERA","FIP","WHIP","ERA+", "FIP+", "WAR", "WPA"]

# add birth
df_res["birth"] = ds_pit_birth_list

# pre-process pid
df_res.reset_index(inplace=True, drop=True)
df_res_1 = df_res.sort_values(by=df_res.columns[0], ascending= True)

pitcher_id = 20000
pid_list = []

for i in range(len(df_res_1)):
    pid_list.append(pitcher_id)
    pitcher_id += 1

df_res_1["pid"] = pid_list

# save as csv
df_res_1.to_csv("pitcher_stat.csv", mode='w', encoding='utf-8')

# Print DataFrame
print(df_res_1)
print("done!")

driver.close()

quit()