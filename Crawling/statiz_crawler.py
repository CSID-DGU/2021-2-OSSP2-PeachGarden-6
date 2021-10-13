# statiz_crawler.py
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
html = driver.page_source

for i in range (3):
    
    # Get table
    soup = BeautifulSoup(html, 'html.parser')
    table = soup.find_all("table")
    # next_page = driver.find_element_by_xpath("/html/body/div[1]/div[1]/div/section[2]/div/div[2]/div[6]/div/div/div[4]/table/tbody/tr/td[2]/a[2]")
    
    # Parsing
    p = parser_functions.make2d(table[1])

    # Set DataFrame
    df_sample_1 = pd.DataFrame(p[2:], columns=p[0])
    df_list.append(df_sample_1)

    # Go to next page
    driver.find_element_by_link_text("다음").send_keys(Keys.ENTER)

'''
# Drop unnecessary info
df_sample_2 = df_sample_1.drop([df_sample_1.columns[0]], axis=1)
idx_trash = df_sample_2[df_sample_2['이름'] == '이름'].index
df_final = df_sample_2.drop(idx_trash)
df_final.reset_index(inplace=True, drop=True)
'''

# pd.concat()
# Print DataFrame
print(df_list[1])
print("done")

driver.close()

quit()