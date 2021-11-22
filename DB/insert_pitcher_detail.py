import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./Data/pitcher_detail.csv','r',encoding='utf-8')

# insert pitcher_detail
csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:

        sql = """select pid from players where pname = %s and birth = %s"""
        curs.execute(sql, (row[1], row[3]))
        pid = curs.fetchone()
    
        stat = {'pid':pid,'pip':row[2], 'lso':row[4], 'gofo':row[5], 'qs_rate':row[6], 'sup_score':row[7], 'bera':row[8], 'rel':row[9], 'bwpa':row[10]}

        for key, value in stat.items():
            if value == '':
                stat[key] = 0
        
        print(pid)
        
        sql = """insert into pitcher_detail (player_id, pip, lso, gofo, qs_rate, sup_score, bera, rel_rate, bwpa) 
        values (%s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        curs.execute(sql, (stat['pid'],stat['pip'],stat['lso'],stat['gofo'],stat['qs_rate'],stat['sup_score'],stat['bera'],stat['rel'],stat['bwpa']))
    flag += 1

f.close()
print('done!')
conn.commit()
conn.close()