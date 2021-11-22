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
# 확장
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=2&o1=FIP&o2=WAR&de=0&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')

df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

    table1 = soup.find_all('table')
    p = parser.make2d(table1[1])

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
df = df1_res.iloc[:, [1, 27]]
df.columns = ['이름', 'PIP']
df.reset_index(inplace=True, drop=True)
df["birth"] = ds_bat_birth_list
print(df)
res_list.append(df)

# 타석
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=6&o1=PPA&o2=WAR&de=0&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')
df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

    table1 = soup.find_all('table')
    p = parser.make2d(table1[1])

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

df2_res = pd.concat(df_list)
non_index = df2_res[df2_res['이름'] == '이름'].index
df2_res=df2_res.drop(non_index)
df_2 = df2_res.iloc[:, [1, 23]]
df_2.columns = ['이름', 'LSO']
df_2.reset_index(inplace=True, drop=True)
df_2["birth"] = ds_bat_birth_list
print(df_2)
res_list.append(df_2)

# 타구
driver.get(url='http://www.statiz.co.kr/stat.php?opt=0&sopt=0&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=7&o1=GRF&o2=WAR&de=1&lr=0&tr=&cv=&ml=1&sn=30&si=&cn=')
df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

    table1 = soup.find_all('table')
    p = parser.make2d(table1[1])

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
df_3 = df3_res.iloc[:, [1, 3]]
df_3.columns = ['이름', 'Go/Fo']
df_3.reset_index(inplace=True, drop=True)
df_3["birth"] = ds_bat_birth_list
print(df_3)
res_list.append(df_3)

# 선발
driver.get(url='http://www.statiz.co.kr/stat.php?mid=stat&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=9&o1=RunS&o2=WAR&de=1&lr=0&tr=&cv=&ml=1&sn=100&si=&cn=')
df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

    table1 = soup.find_all('table')
    p = parser.make2d(table1[1])

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
df_4 = df4_res.iloc[:, [1, 10, 16]]
df_4.columns = ['이름', 'Qs%', '득점지원']
df_4.reset_index(inplace=True, drop=True)
df_4["birth"] = ds_bat_birth_list
print(df_4)
res_list.append(df_4)

# 구원
driver.get(url='http://www.statiz.co.kr/stat.php?mid=stat&re=1&ys=2021&ye=2021&se=0&te=&tm=&ty=0&qu=p50&po=0&as=&ae=&hi=&un=&pl=&da=10&o1=RelERA&o2=WAR&de=0&lr=0&tr=&cv=&ml=1&sn=100&pa=0&si=&cn=')

df_list = []

# lists for birth
ds_bat_names_list=[]
ds_bat_birth_list=[]

while True:
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

    table1 = soup.find_all('table')
    p = parser.make2d(table1[1])

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
df_5 = df5_res.iloc[:, [1, 6, 22, 26]]
df_5.columns = ['이름', '구원방어율', 'Rel%', 'WPA']
df_5.reset_index(inplace=True, drop=True)
df_5["birth"] = ds_bat_birth_list
print(df_5)


start_df = pd.merge(res_list[0], res_list[1],how='outer',on=['이름','birth'], sort=False)
start_df = pd.merge(start_df, res_list[2],how='outer',on=['이름','birth'], sort=False)
start_df = pd.merge(start_df, res_list[3],how='outer',on=['이름','birth'], sort=False)
start_df = pd.merge(start_df, df_5,how='outer',on=['이름','birth'], sort=False)
# start_df = pd.concat([start_df, df_5],ignore_index=True)


print(start_df)
driver.close()
start_df.to_csv("./Data/pitcher_detail.csv", mode="w", encoding='utf-8')


