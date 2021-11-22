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

df_list = []
# tid 순서로 두산부터 진행
url = 'http://www.statiz.co.kr/team.php?team=%EB%91%90%EC%82%B0&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# 삼성 --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=%EC%82%BC%EC%84%B1&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# NC --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=NC&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# 키움 --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=%ED%82%A4%EC%9B%80&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# SSG --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=SSG&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# 한화 --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=%ED%95%9C%ED%99%94&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# LG --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=LG&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# 롯데 --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=%EB%A1%AF%EB%8D%B0&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# 기아 --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=KIA&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# KT --------------------------------------------
url = 'http://www.statiz.co.kr/team.php?team=KT&year=2021&opt=0&sopt=0'

# Dataframe list
driver.get(url)

# Get table
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
table = soup.find_all("table")

# Parsing
p = parser_functions.make2d(table[5])

# Set DataFrame
df_temp = pd.DataFrame(p[1:], columns=p[0])
df_temp = df_temp.drop(['승', '패', '무'], axis=1)
print(df_temp)
df_list.append(df_temp)

# Combine Dataframes
df_res = pd.concat(df_list)
# Print DataFrame
print(df_res)

df_res.to_csv("./Data/team_op.csv", mode='w',encoding='utf-8')
print("done!")

driver.close()

quit()
