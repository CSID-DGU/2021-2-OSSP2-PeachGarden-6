
from selenium import webdriver
from bs4 import BeautifulSoup
from html_table_parser import parser_functions as parser
from selenium.webdriver.common.keys import Keys
import pandas as pd

driver = webdriver.Chrome()
driver.implicitly_wait(5)
driver.get(url='http://www.statiz.co.kr/stat.php?mid=stat&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=4&o1=RSAVG&o2=WAR_ALL&de=1&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html=driver.page_source
soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

table1=soup.find_all('table')
p=parser.make2d(table1[1])
# 클러치 -득점권타율
df_1=pd.DataFrame(p[2:],columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1=df_1.drop(non_index)
df=df_1.iloc[:,[1,7]]
df.columns=['이름','득점권타율']

## 타석
driver.get(url='http://www.statiz.co.kr/stat.php?mid=stat&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=5&o1=PPA&o2=WAR_ALL&de=0&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html=driver.page_source
soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

table1=soup.find_all('table')
p=parser.make2d(table1[1])
df_1=pd.DataFrame(p[2:],columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1=df_1.drop(non_index)
df_1=df_1.iloc[:,[1,6,14,15,16,17,20]]
df_1.columns=['이름','P/PA','초구스윙율','컨택율','2s후커트율','2s후선구율','LSO%']
df=pd.concat([df,df_1],axis=1)

## 타구1
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=6&o1=FG&de=1&o2=WAR_ALL&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html=driver.page_source
soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

table1=soup.find_all('table')
p=parser.make2d(table1[1])
df_1=pd.DataFrame(p[2:],columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1=df_1.drop(non_index)
df_1=df_1.iloc[:,[1,17]]
df_1.columns=['이름','내야안타']
df=pd.concat([df,df_1],axis=1)

## 타구2
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=7&o1=BIPA&de=1&o2=WAR_ALL&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html=driver.page_source
soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

table1=soup.find_all('table')
p=parser.make2d(table1[1])
df_1=pd.DataFrame(p[2:],columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1=df_1.drop(non_index)
df_1=df_1.iloc[:,[1,3,8,9]]
df_1.columns=['이름','BABIP','당겨치기','밀어치기']
df=pd.concat([df,df_1],axis=1)

## 팀배팅
driver.get(url='http://www.statiz.co.kr/stat.php?mid=stat&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=auto&po=0&as=&ae=&hi=&un=&pl=&da=8&o1=GDPP&o2=WAR_ALL&de=1&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')

html=driver.page_source
soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

table1=soup.find_all('table')
p=parser.make2d(table1[1])
df_1=pd.DataFrame(p[2:],columns=p[0])
non_index = df_1[df_1['이름'] == '이름'].index
df_1=df_1.drop(non_index)
df_1=df_1.iloc[:,[1,3,13]]
df_1.columns=['이름','병살타율','잔루/타석']
df=pd.concat([df,df_1],axis=1)

df.to_csv("batter_detail_data.csv",mode="w",encoding='euc-kr')