import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f1 = open('./Data/hitter_stat.csv','r',encoding='utf-8')

team_list = ['두','삼','N','키','S','한','L','롯','기','K']

# insert hitter
csvReader = csv.reader(f1)
flag = 0

for row in csvReader:
    if flag != 0:
        pid = (row[31])
        team = (row[2])
        tid = (team_list.index(team[2]))
        name = (row[1])
        birth = (row[30])

        sql = """insert into players (pid, team_id, pname, birth) values (%s, %s, %s, %s)"""
        curs.execute(sql, (pid,tid,name,birth))
    flag += 1

conn.commit()
f1.close()

# insert pitcher
f2 = open('./Data/pitcher_stat.csv','r',encoding='utf-8')

csvReader = csv.reader(f2)
flag = 0

for row in csvReader:
    if flag != 0:
        pid = (row[33])
        team = (row[2])
        tid = (team_list.index(team[2]))
        name = (row[1])
        birth = (row[32])

        sql = """insert into players (pid, team_id, pname, birth) values (%s, %s, %s, %s)"""
        curs.execute(sql, (pid,tid,name,birth))
    flag += 1

conn.commit()
f2.close()
print('done!')
conn.close()