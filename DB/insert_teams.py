import pymysql

conn = pymysql.connect(host='127.0.0.1', user='root', password='0000', db='player_battle', charset='utf8')

curs = conn.cursor()

conn.commit()

f = open('./hitter_stat.csv','r',encoding='utf-8')

team_list = ['두','삼','N','키','S','한','L','롯','기','K']
team_full = ['두산 베어스', '삼성 라이온즈', 'NC 다이노스', '키움 히어로즈', 'SSG 랜더스', '한화 이글스','LG 트윈스','롯데 자이언츠', '기아 타이거즈', 'KT 위즈']
team_city = ['서울', '대구', '마산', '서울', '인천','대전','서울','부산','광주','수원']

flag = 0

for i in range(10):
    tid = i
    full_name = team_full[i]
    short_name = team_list[i]
    city = team_city[i]

    sql = """insert into teams (tid, full_name, short_name, city) values (%s, %s, %s, %s)"""
    curs.execute(sql, (tid,full_name,short_name,city))

print('done!')
conn.commit()
f.close()
conn.close()