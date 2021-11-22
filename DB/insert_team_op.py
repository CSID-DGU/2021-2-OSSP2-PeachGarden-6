import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./Data/team_op.csv', 'r', encoding='utf-8')

csvReader = csv.reader(f)

team_list = ['두산','삼성','NC','히어로즈','SK','한화','LG','롯데','KIA','kt']

flag = 0

win_rate = [[1 for col in range(10)] for row in range(10)]

for row in csvReader:
    if flag != 0:
        versus = row[1]
        teams = versus.split(' : ')
        
        my = teams[0]

        if my == '키움':
            my = '히어로즈'
        elif my == 'SSG':
            my = 'SK'
        elif my == 'KT':
            my = 'kt'

        op = teams[1]

        win_rate[team_list.index(my)][team_list.index(op)] = row[2]

    flag += 1

print(win_rate)

for i in range(10):
    
    sql = """insert into team_op_rate (team_id, doosan, samsung, nc, kiwoom, ssg, hanwha, lg, lotte, kia, kt) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
    curs.execute(sql,(i,win_rate[i][0],win_rate[i][1],win_rate[i][2],win_rate[i][3],win_rate[i][4],win_rate[i][5],win_rate[i][6],win_rate[i][7],win_rate[i][8],win_rate[i][9]))

print('done!')
conn.commit()
conn.close()