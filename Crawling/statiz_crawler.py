# statiz_crawler.py
# coded by Chan Ho Song
from bs4 import BeautifulSoup
from selenium import webdriver
from html_table_parser import parser_functions
import pandas as pd
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

driver = webdriver.Chrome("./chromedriver")
url = 'http://www.statiz.co.kr/stat.php'
driver.get(url)

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
temp = soup.find_all("table")
p = parser_functions.make2d(temp[1])
df = pd.DataFrame(p[2:], columns=p[0])

print(df)
print("done")

driver.close()