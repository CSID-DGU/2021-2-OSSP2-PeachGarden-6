from selenium import webdriver
from bs4 import BeautifulSoup
from html_table_parser import parser_functions as parser
from selenium.webdriver.common.keys import Keys
import pandas as pd

driver = webdriver.Chrome("C:\chromedriver.exe")
driver.implicitly_wait(5)

best_list = []
worst_list = []
date_list = []
url = "http://www.statiz.co.kr/boxscore.php?opt=1&date=2021-10-30"
driver.get(url)

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')

n = 0
# 21-04-02가 될때까지 반복문
while (n < 20):
    # 날짜 추출
    play_date = soup.select_one(
        'body > div.wrapper > div.content-wrapper > div > section.content > div > div:nth-child(2) > div > div > div.row > div > div > a.btn.btn-primary')
    date_list.append(play_date.get_text())

    # best 선수 추출
    best_player = soup.select(
        'body > div.wrapper > div.content-wrapper > div > section.content > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)')
    today_best = []
    for texts in best_player:
        today_best.append(texts.get_text())
    best_list.append(today_best)

    # worst 선수 추출
    worst_player = soup.select(
        'body > div.wrapper > div.content-wrapper > div > section.content > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child(2) > a:nth-child(6)')
    today_worst = []
    for texts in worst_player:
        today_worst.append(texts.get_text())
    worst_list.append(today_worst)

    # 이전 날짜로 이동
    date_click = driver.find_element_by_xpath(
        '/html/body/div[1]/div[1]/div/section[2]/div/div[2]/div/div/div[1]/div/div/a[1]')
    date_click.send_keys(Keys.ENTER)
    driver.implicitly_wait(1)

    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser', from_encoding='utf-8')
    n = n + 1

print(best_list)
print("----------------------------")
print(worst_list)
print("----------------------------")
print(date_list)