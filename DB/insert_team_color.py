import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()


style_con = [[100, 'doosan'],
            [101, 'samsung'],
            [102, 'nc'],
            [103, 'kiwoom'],
            [104, 'ssg'],
            [105, 'hanwha'],
            [106, 'lg'],
            [107, 'lotte'],
            [108, 'kia'],
            [109, 'kt']]


# insert style

for x,y in style_con:
    
    sql = """select team_id from team_op_rate where """ + y + """ >= 0.6"""
    tid = x - 100
    curs.execute(sql)
    rate = curs.fetchall()

    for r in rate:
        insert = """insert into team_color values (%s, %s)"""
        curs.execute(insert,(r[0],x))

print('done!')
conn.commit()