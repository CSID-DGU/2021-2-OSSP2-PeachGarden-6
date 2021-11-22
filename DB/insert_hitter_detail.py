import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./Data/hitter_detail_data.csv','r',encoding='utf-8')

# insert hitter_stat
csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:

        sql = """select pid from players where pname = %s and birth = %s"""
        curs.execute(sql, (row[1], row[3]))
        pid = curs.fetchone()
    
        stat = {'pid':pid,'risp':row[2], 'ppa':row[4], 'fps':row[5], 'contact':row[6], 'twos_cut':row[7], 'twos_gb':row[8], 'lso':row[9], 'in_hit':row[10],
        'babip':row[11], 'pull_hit':row[12], 'push_hit':row[13], 'make_dp':row[14],'lobpa':row[15]}

        for key, value in stat.items():
            if value == '':
                stat[key] = 0
        
        print(pid)
        
        sql = """insert into hitter_detail (player_id, risp, ppa, fps, contact, twos_cut, twos_gb, lso, in_hit, babip, pull_hit, push_hit, make_dp, lobpa) 
        values (%s, %s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s,%s, %s)"""
        curs.execute(sql, (stat['pid'],stat['risp'],stat['ppa'],stat['fps'],stat['contact'],stat['twos_cut'],stat['twos_gb'],stat['lso'],stat['in_hit'],stat['babip'],stat['pull_hit'],
        stat['push_hit'],stat['make_dp'],stat['lobpa']))
    flag += 1

conn.commit()
f.close()
print('done!')
conn.close()