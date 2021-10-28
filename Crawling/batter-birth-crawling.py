{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "b00299cf",
   "metadata": {},
   "outputs": [],
   "source": [
    "from selenium import webdriver\n",
    "from bs4 import BeautifulSoup \n",
    "from html_table_parser import parser_functions as parser\n",
    "from selenium.webdriver.common.keys import Keys\n",
    "import pandas as pd\n",
    "\n",
    "driver = webdriver.Chrome()\n",
    "driver.implicitly_wait(5)\n",
    "driver.get(url='http://www.statiz.co.kr/stat.php')\n",
    "\n",
    "html=driver.page_source\n",
    "soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')\n",
    "\n",
    "ds_bat_names=soup.select('#fixcol > table > tbody > tr > td > a')\n",
    "ds_bat_names_list=[]\n",
    "ds_bat_birth_list=[]\n",
    "for ds_bat_name in ds_bat_names:\n",
    "    ds_bat_names_list.append(ds_bat_name.get_text())\n",
    "    ds_bat_birth_list.append(ds_bat_name['href'][-10:])\n",
    "ds_bat_birth_list"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.8"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
