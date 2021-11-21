import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

color = [[100, '곰 사냥꾼', '두산 베어스 상대승률 6할 이상'],
        [101, '사자 사냥꾼', '삼성 라이온즈 상대승률 6할 이상'],
        [102, '공룡 사냥꾼', 'NC 다이노즈 상대승률 6할 이상'],
        [103, '영웅 사냥꾼', '키움 히어로즈 상대승률 6할 이상'],
        [104, 'SSG 사냥꾼', 'SSG 랜더스 상대승률 6할 이상'],
        [105, '독수리 사냥꾼', '한화 이글스 상대승률 6할 이상'],
        [106, '쌍둥이 사냥꾼', 'LG 트윈스 상대승률 6할 이상'],
        [107, '거인 사냥꾼', '롯데 자이언츠 상대승률 6할 이상'],
        [108, '호랑이 사냥꾼', '기아 타이거즈 상대승률 6할 이상'],
        [109, '마법사 사냥꾼', 'KT 위즈 상대승률 6할 이상']]

for x,y,z in color:
    sql = """insert into team_color_list (id, cname, script) values (%s, %s, %s)"""
    curs.execute(sql, (x,y,z))

conn.commit()
print('done!')
conn.close()
