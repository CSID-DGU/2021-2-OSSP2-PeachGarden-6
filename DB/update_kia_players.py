import pymysql
import csv

conn = pymysql.connect(host='127.0.0.1', user='root',
                       password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()
conn.commit()

f = open('./Data/kia_player_list.csv', 'r', encoding='utf-8')

# best / worst player
csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:

        sql_pid = """select pid from players where pname = %s and birth = %s"""
        curs.execute(sql_pid, (row[1],row[2]))
        pid = curs.fetchone()

        sql_alter = """Update players set team_id = 8 where pid = %s"""
        curs.execute(sql_alter, pid)
    flag += 1


  
print('done!')
conn.commit()
f.close()
conn.close()
