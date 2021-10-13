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
driver = webdriver.Chrome("./chromedriver")
url = 'http://www.statiz.co.kr/stat.php'

# Dataframe list
df_list = []
driver.get(url)

while True:
    
    # Get table
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find_all("table")
    
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

# Print DataFrame
print(df_res)
print("done!")

driver.close()

quit()