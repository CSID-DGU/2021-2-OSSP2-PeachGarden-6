import pymysql
import csv

conn = pymysql.connect(host='127.0.0.1', user='root',
                       password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()
conn.commit()

f = open('./Data/best_worst_recrawling.csv', 'r', encoding='utf-8')

# best / worst player
csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:

        sql_best = """select pid from players where pname = %s and birth = %s"""
        curs.execute(sql_best, (row[2],row[3]))
        best_pid = curs.fetchone()

        sql_worst = """select pid from players where pname = %s and birth = %s"""
        curs.execute(sql_worst,(row[4],row[5]))
        worst_pid = curs.fetchone()

        gid = row[6]
        print(gid)
        sql_insert = """insert into game_list values (%s, %s, %s)"""
        curs.execute(sql_insert, (gid,best_pid, worst_pid))
    flag += 1


  
print('done!')
conn.commit()
f.close()
conn.close()
