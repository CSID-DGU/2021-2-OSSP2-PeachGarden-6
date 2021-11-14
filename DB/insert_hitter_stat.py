import csv
import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./hitter_stat.csv','r',encoding='utf-8')

team_list = ['두','삼','N','키','S','한','L','롯','기','K']

# insert hitter_stat
csvReader = csv.reader(f)
flag = 0

for row in csvReader:
    if flag != 0:
        pid = (row[31])
        print(pid)
        team = (row[2])
        tid = (team_list.index(team[2]))
        game = (row[3])
        pos = "-"
        if len(team) != 3:
            len_temp = len(team)
            pos = team[3:len_temp]
        pa = (row[4])
        ab = (row[5])
        r = (row[6])
        rbi = (row[12])
        hits = (row[7])
        doubles = (row[8])
        triples = (row[9])
        hr = (row[10])
        sb = (row[13])
        cs = (row[14])
        bb = (row[15])
        hbp = (row[16])
        so = (row[18])
        gidp = (row[19])
        sh = (row[20])
        avg = (row[22])
        obp = (row[23])
        slg = (row[24])
        ops = (row[25])
        woba = (row[26])
        wrc_plus = (row[27])
        war = (row[28])

        sql = """insert into hitter_stat (player_id, team_id, player_games, player_pos, pa, ab, r, rbi, hits, doubles, triples, hr, sb, cs, bb, hbp, so, gidp, sh, hit_avg, obp, slg, ops, woba, wrc_plus, war) 
        values (%s, %s, %s, %s, %s, %s, %s, %s,%s, %s, %s, %s,%s, %s, %s, %s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        curs.execute(sql, (pid,tid,game,pos,pa,ab,r,rbi,hits,doubles,triples,hr,sb,cs,bb,hbp,so,gidp,sh,avg,obp,slg,ops,woba,wrc_plus,war))
    flag += 1

conn.commit()
f.close()
print('done!')
conn.close()