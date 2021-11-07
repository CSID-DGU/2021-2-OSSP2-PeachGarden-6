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
url = 'http://www.statiz.co.kr/stat.php'

# Dataframe list
df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

driver.get(url)

while True:
    
    # Get table
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find_all("table")
    ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')

    for ds_bat_name in ds_bat_names:
        ds_bat_names_list.append(ds_bat_name.get_text())
        ds_bat_birth_list.append(ds_bat_name['href'][-10:])

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
df_res.columns = ["이름", "팀", "G","타석","타수","득점","안타","2루타","3루타","홈런","루타","타점","도루","도루실패","볼넷","사구","고의사구","삼진","병살","희생타","희플","타율","출루율","장타율","OPS","wOBA","wRC+","WAR*", "WPA"]

# add birth
df_res["birth"] = ds_bat_birth_list

# delete pitcher 
idx_pitcher = df_res[df_res['팀'].str.contains('P')].index
df_res_1 = df_res.drop(idx_pitcher)

# save as csv
df_res_1.to_csv("batter_stat.csv", mode='w', encoding='utf-8')
df_res_1.reset_index(inplace=True, drop=True)

# Print DataFrame
print(df_res_1)
print("done!")

driver.close()

quit()