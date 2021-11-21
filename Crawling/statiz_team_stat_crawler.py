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
url = 'http://www.statiz.co.kr/league.php?opt=2021'

# Dataframe list
df_list = []

driver.get(url)


# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
tables = soup.find_all("table")

lb = tables[2]
waa = tables[4]

# Parsing
p1 = parser_functions.make2d(tables[2])
p2 = parser_functions.make2d(tables[4])
# Set DataFrame
df1 = pd.DataFrame(p1[1:], columns=p1[0])
df2 = pd.DataFrame(p2[1:], columns=p2[0])
# Print DataFrame
#print(df1)
#print(df2)

# merge dfs
res = pd.merge(df1,df2)
res = res.drop(columns=['순'], axis=1)
print(res)
print("done!")

res.to_csv("team_stat.csv", mode='w', encoding='utf-8')

driver.close()

quit()
