import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./pitcher_stat.csv','r',encoding='utf-8')

team_list = ['두','삼','N','키','S','한','L','롯','기','K']

# insert pitcher_stat
csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:
        team = row[2]
        stat = {'pid':row[33], 'team':row[2], 'tid':team_list.index(team[2]), 'games':row[3],'cg':row[4],'sho':row[5],'gs':row[6],'wins':row[7],'loses':row[8],'sv':row[9],
        'hld':row[10],'ip':row[11],'r':row[12],'er':row[13],'hits':row[15],'doubles':row[16],'triples':row[17],'hr':row[18],'bb':row[19],'hbp':row[21],'ibb':row[20], 'so':row[22],
        'bk':row[23],'wp':row[24],'era':row[25],'fip':row[26],'whip':row[27],'era_plus':row[28],'fip_plus':row[29],'war':row[30]}
        
        for key, value in stat.items():
            if value == '':
                stat[key] = 0
        
        print(stat['pid'])
        
        sql = """insert into pitcher_stat (player_id, team_id, player_games, cg, sho, gs, wins, loses, sv, hld, ip, r, er, hits, doubles, triples, hr, bb, hbp, ibb, so, bk, wp, era, fip, whip, era_plus, fip_plus, war) 
        values (%s, %s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s,%s, %s, %s, %s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        curs.execute(sql, (stat['pid'],stat['tid'],stat['games'],stat['cg'],stat['sho'],stat['gs'],stat['wins'],stat['loses'],stat['sv'],stat['hld'],stat['ip'],
        stat['r'],stat['er'],stat['hits'],stat['doubles'],stat['triples'],stat['hr'],stat['bb'],stat['hbp'],stat['ibb'],stat['so'],stat['bk'],stat['wp'],stat['era']
        ,stat['fip'],stat['whip'],stat['era_plus'],stat['fip_plus'],stat['war']))
    flag += 1

conn.commit()
f.close()
print('done!')
conn.close()