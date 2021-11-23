import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()


style_con = [[100, 'risp >= 0.3'],
            [101, 'ppa >= 4.0'],
            [102, 'fps >= 30'],
            [103, 'contact >= 85'],
            [104, 'twos_cut >= 85'],
            [105, 'twos_gb >= 38'],
            [106, 'lso >= 0.3'],
            [107, 'in_hit >= 0.15'],
            [108, 'order by babip limit 10'],
            [109, 'pull_hit >= 50'],
            [110, 'push_hit >= pull_hit'],
            [111, 'make_dp >= 10'],
            [112, 'lobpa >= 0.45'],
            [200, 'pip <= 16 '],
            [201, 'lso >= 25'],
            [202, 'gofo >= 1'],
            [203, 'qs_rate >= 50'],
            [204, 'sup_score <= 5'],
            [205, 'bera >= 5 and rel_rate >= 33 and bwpa <= 0']]


# insert style

for x,y in style_con:
    if x == 108:
        sql = """select player_id from hitter_detail """ + y
        curs.execute(sql)
        pid = curs.fetchall()

        for p in pid:
            insert = """insert into hitter_style values (%s, %s)"""
            curs.execute(insert, (p,x))
    elif (x / 100) < 2:
        sql = """select player_id from hitter_detail where """ + y
        curs.execute(sql)
        pid = curs.fetchall()

        for p in pid:
            insert = """insert into hitter_style values (%s, %s)"""
            curs.execute(insert, (p,x))
    else:
        sql = """select player_id from pitcher_detail where """ + y
        curs.execute(sql)
        pid = curs.fetchall()

        for p in pid:
            insert = """insert into pitcher_style values (%s, %s)"""
            curs.execute(insert, (p,x))
print('done!')
conn.commit()