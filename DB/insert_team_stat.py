import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./Data/team_stat.csv','r',encoding='utf-8')

team = ['두산', '삼성', 'NC', '키움', 'SSG', '한화','LG','롯데', 'KIA', 'KT']

csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:
        tname = row[1]

        if row[6] == '-':
            gb = 0

        stat = {'pid':team.index(tname), 'team_games':row[2], 'wins':row[3],'loses':row[4],'draws':row[5],'game_behind':gb,'win_rate':row[7],'waa_batting':row[8],'waa_running':row[9],
        'waa_defense':row[10],'waa_starting':row[11],'waa_bullpen':row[12]}
        
        sql = """insert into team_stat (team_id, team_games, wins, loses, draws, game_behind, win_rate, waa_batting, waa_running, waa_defense, waa_starting, waa_bullpen)
        values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        curs.execute(sql, (stat['pid'],stat['team_games'], stat['wins'],stat['loses'],stat['draws'],stat['game_behind'],stat['win_rate'],stat['waa_batting'],
        stat['waa_running'], stat['waa_defense'], stat['waa_starting'], stat['waa_bullpen']))
        print(tname)
    flag += 1

print('done!')
conn.commit()
f.close()
conn.close()