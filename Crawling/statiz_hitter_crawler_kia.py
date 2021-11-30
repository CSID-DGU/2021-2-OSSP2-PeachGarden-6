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
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

# Load
driver = webdriver.Chrome("C:\chromedriver.exe")
driver.implicitly_wait(5)

### crawl hitter
url = 'http://www.statiz.co.kr/stat.php?mid=stat&re=0&ys=2021&ye=2021&se=0&te=KIA&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=1&o1=WAR_ALL_ADJ&o2=TPA&de=1&lr=0&tr=&cv=&ml=1&pa=0&si=&cn=&sn=50'

# Dataframe list
df_list = []

# lists for birth
ds_bat_names_list = []
ds_bat_birth_list = []

driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")
ds_bat_names = soup.select('#fixcol > table > tbody > tr > td > a')

for ds_bat_name in ds_bat_names:
    ds_bat_names_list.append(ds_bat_name.get_text())
    ds_bat_birth_list.append(ds_bat_name['href'][-10:])

# Parsing
p = parser_functions.make2d(table[1])

# Set DataFrame
df_hitter = pd.DataFrame(p[2:], columns=p[0])

# Drop unnecessary info
df_hitter = df_hitter.drop(columns=['순', '정렬'], axis=1)
idx_trash = df_hitter[df_hitter['이름'] == '이름'].index
df_hitter = df_hitter.drop(idx_trash)

# add birth
df_hitter["birth"] = ds_bat_birth_list

# delete pitcher
idx_pitcher = df_hitter[df_hitter['팀'].str.contains('P')].index
df_res_1 = df_hitter.drop(idx_pitcher)

# get only name and birth
df_res_1 = df_res_1[['이름', 'birth']]

# append df
df_list.append(df_res_1)


### crawl pitcher
url = 'http://www.statiz.co.kr/stat.php?mid=stat&re=1&ys=2021&ye=2021&se=0&te=KIA&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=1&o1=WAR&o2=OutCount&de=1&lr=0&tr=&cv=&ml=1&pa=0&si=&cn=&sn=50'

# lists for birth
ds_pit_names_list = []
ds_pit_birth_list = []

driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")
ds_pit_names = soup.select('#fixcol > table > tbody > tr > td > a')

for ds_pit_name in ds_pit_names:
    ds_pit_names_list.append(ds_pit_name.get_text())
    ds_pit_birth_list.append(ds_pit_name['href'][-10:])

# Parsing
p = parser_functions.make2d(table[1])

# Set DataFrame
df_pitcher = pd.DataFrame(p[2:], columns=p[0])

# Drop unnecessary info
df_pitcher = df_pitcher.drop(columns=['순', '정렬'], axis=1)
idx_trash = df_pitcher[df_pitcher['이름'] == '이름'].index
df_pitcher = df_pitcher.drop(idx_trash)

# add birth
df_pitcher["birth"] = ds_pit_birth_list

# get only name and birth
df_res_2 = df_pitcher[['이름', 'birth']]

# append df
df_list.append(df_res_2)

# combine dfs
df_kia = pd.concat(df_list)
df_kia.reset_index(inplace=True, drop=True)

# print dataframe
print(df_kia)

# save as csv
df_kia.to_csv("./Data/kia_player_list.csv", mode='w', encoding='utf-8')
print("done!")

driver.close()

quit()
