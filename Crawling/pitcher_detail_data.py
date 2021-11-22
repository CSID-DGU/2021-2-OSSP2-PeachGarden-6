from selenium import webdriver
from bs4 import BeautifulSoup
from html_table_parser import parser_functions as parser
from selenium.webdriver.common.keys import Keys
import pandas as pd

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get(
    url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=2&o1=FIP&de=0&o2=WAR&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

table1 = soup.find_all('table')
p = parser.make2d(table1[1])

df_1 = pd.DataFrame(p[2:], columns=p[0])
df = df_1.iloc[:, [1, 27]].drop([10, 11])
df.columns = ['이름', 'PIP']

driver.get(
    url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=6&o1=PPA&de=0&o2=WAR&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')
table1 = soup.find_all('table')
p = parser.make2d(table1[1])

df_1 = pd.DataFrame(p[2:], columns=p[0])
df_1 = df_1.iloc[:, [1, 23]].drop([10, 11])
df_1.columns = ['이름', 'LSO']
df = pd.concat([df, df_1], axis=1)

driver.get(
    url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=7&o1=GRF&de=1&o2=WAR&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')
table1 = soup.find_all('table')
p = parser.make2d(table1[1])

df_1 = pd.DataFrame(p[2:], columns=p[0])
df_1 = df_1.iloc[:, [1, 3]].drop([10, 11])
df_1.columns = ['이름', 'Go/Fo']
df = pd.concat([df, df_1], axis=1)

driver.get(
    url='http://www.statiz.co.kr/stat.php?mid=stat&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=9&o1=QSP&o2=WAR&de=1&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')
table1 = soup.find_all('table')
p = parser.make2d(table1[1])

df_1 = pd.DataFrame(p[2:], columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1 = df_1.drop(non_index)
df_1 = df_1.iloc[:, [1, 10, 16]]
df_1.columns = ['이름', 'Qs%', '득점지원']
df = pd.concat([df, df_1], axis=1)

driver.get(
    url='http://www.statiz.co.kr/stat.php?mid=stat&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=10&o1=RelERA&o2=WAR&de=0&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')
table1 = soup.find_all('table')
p = parser.make2d(table1[1])

df_1 = pd.DataFrame(p[2:], columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1 = df_1.drop(non_index)
df_1 = df_1.iloc[:, [1, 6, 22, 26]]
df_1.columns = ['이름', '구원방어율', 'Rel%', 'WPA']
df = pd.concat([df, df_1], axis=1)

df.to_csv("pitcher_detail_data.csv", mode="w", encoding='euc-kr')
