
from selenium import webdriver
from bs4 import BeautifulSoup
from html_table_parser import parser_functions as parser
from selenium.webdriver.common.keys import Keys
import pandas as pd
import sys
import io

# KOR crack prevent
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

driver = webdriver.Chrome("C:\chromedriver.exe")
driver.implicitly_wait(5)

res_list = []

# 클러치 -득점권타율
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=4&o1=RSAVG&o2=WAR_ALL&de=1&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')

df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html=driver.page_source
    soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

    table1=soup.find_all('table')
    p=parser.make2d(table1[1])

    ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')
    
    for ds_bat_name in ds_bat_names:
            ds_bat_names_list.append(ds_bat_name.get_text())
            ds_bat_birth_list.append(ds_bat_name['href'][-10:])
    
    df_temp=pd.DataFrame(p[2:],columns=p[0])
    df_list.append(df_temp)

    # Go to next page
    try:
        driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)
    except:
        break

df1_res = pd.concat(df_list)
non_index = df1_res[df1_res['이름'] == '이름'].index
df1_res=df1_res.drop(non_index)
df=df1_res.iloc[:,[1,7]]
df.columns=['이름','득점권타율']
df.reset_index(inplace=True, drop=True)
df["birth"] = ds_bat_birth_list
# print(df)
res_list.append(df)

## 타석
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=5&o1=PPA&de=1&o2=WAR_ALL&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')

df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:

    html=driver.page_source
    soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

    table1=soup.find_all('table')
    p=parser.make2d(table1[1])
    ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')
    
    for ds_bat_name in ds_bat_names:
            ds_bat_names_list.append(ds_bat_name.get_text())
            ds_bat_birth_list.append(ds_bat_name['href'][-10:])
    
    df_temp = pd.DataFrame(p[2:],columns=p[1])
    df_list.append(df_temp)

    # Go to next page
    try:
        driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)
    except:
        break

df2_res = pd.concat(df_list)
non_index = df2_res[df2_res['이름'] == '이름'].index
df2_res=df2_res.drop(non_index)
df2_res=df2_res.iloc[:,[1,6,14,15,16,17,20]]
df2_res.reset_index(inplace=True, drop=True)
df2_res["birth"] = ds_bat_birth_list
# print(df2_res)
res_list.append(df2_res)

## 타구1
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=6&o1=FG&de=1&o2=WAR_ALL&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')
df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html=driver.page_source
    soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

    table1=soup.find_all('table')
    p=parser.make2d(table1[1])
    ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')

    for ds_bat_name in ds_bat_names:
            ds_bat_names_list.append(ds_bat_name.get_text())
            ds_bat_birth_list.append(ds_bat_name['href'][-10:])

    df_temp=pd.DataFrame(p[2:],columns=p[0])
    df_list.append(df_temp)

    # Go to next page
    try:
        driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)
    except:
        break

df3_res = pd.concat(df_list)
non_index = df3_res[df3_res['이름'] == '이름'].index
df3_res=df3_res.drop(non_index)
df3_res=df3_res.iloc[:,[1,17]]
df3_res.columns=['이름','내야안타']
df3_res.reset_index(inplace=True, drop=True)
df3_res["birth"] = ds_bat_birth_list
# print(df3_res)
res_list.append(df3_res)

## 타구2
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=7&o1=BIPA&de=1&o2=WAR_ALL&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')

df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html=driver.page_source
    soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

    table1=soup.find_all('table')
    p=parser.make2d(table1[1])
    ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')

    for ds_bat_name in ds_bat_names:
            ds_bat_names_list.append(ds_bat_name.get_text())
            ds_bat_birth_list.append(ds_bat_name['href'][-10:])
    
    df_temp=pd.DataFrame(p[2:],columns=p[0])
    df_list.append(df_temp)

    # Go to next page
    try:
        driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)
    except:
        break

df4_res = pd.concat(df_list)
non_index = df4_res[df4_res['이름'] == '이름'].index
df4_res=df4_res.drop(non_index)
df4_res=df4_res.iloc[:,[1,3,8,9]]
df4_res.columns=['이름','BABIP','당겨치기','밀어치기']
df4_res.reset_index(inplace=True, drop=True)
df4_res["birth"] = ds_bat_birth_list
# print(df4_res)
res_list.append(df4_res)

## 팀배팅
driver.get(url='http://www.statiz.co.kr/stat.php?mid=stat&re=0&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=8&o1=GDPP&o2=WAR_ALL&de=1&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')

df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html=driver.page_source
    soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')

    table1=soup.find_all('table')
    p=parser.make2d(table1[1])
    ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')

    for ds_bat_name in ds_bat_names:
            ds_bat_names_list.append(ds_bat_name.get_text())
            ds_bat_birth_list.append(ds_bat_name['href'][-10:])

    df_temp=pd.DataFrame(p[2:],columns=p[0])
    df_list.append(df_temp)

    # Go to next page
    try:
        driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)
    except:
        break

df5_res = pd.concat(df_list)
non_index = df5_res[df5_res['이름'] == '이름'].index
df5_res=df5_res.drop(non_index)
df5_res=df5_res.iloc[:,[1,3,13]]
df5_res.columns=['이름','병살타율','잔루/타석']
df5_res.reset_index(inplace=True, drop=True)
df5_res["birth"] = ds_bat_birth_list
# print(df5_res)
res_list.append(df5_res)

all_df = pd.merge(res_list[0], res_list[1],how='left',on=['이름','birth'], sort=False)
all_df = pd.merge(all_df, res_list[2],how='left',on=['이름','birth'], sort=False)
all_df = pd.merge(all_df, res_list[3],how='left',on=['이름','birth'], sort=False)
all_df = pd.merge(all_df, res_list[4],how='left',on=['이름','birth'], sort=False)

print(all_df)
driver.close()
# to csv
all_df.to_csv("./Data/hitter_detail_data.csv",mode="w",encoding='utf-8')
