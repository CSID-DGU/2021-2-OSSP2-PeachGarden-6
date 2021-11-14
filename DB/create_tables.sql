#CREATE DATABASE player_battle DEFAULT CHARACTER SET utf8 COLLATE UTF8_UNICODE_CI;

CREATE TABLE teams (
	tid INT NOT NULL,
	full_name VARCHAR(10),
	short_name VARCHAR(5),
	city VARCHAR(5),
	PRIMARY KEY (tid)
);

CREATE TABLE team_stat (
	team_id INT NOT NULL,
	team_games INT,
	wins INT,
	loses INT,
	draws INT,
	game_behind DECIMAL(3,1),
	win_rate DECIMAL(4,3),
	waa_batting DECIMAL(3,2),
	waa_running DECIMAL(3,2),
	waa_defense DECIMAL(3,2),
	waa_starting DECIMAL(3,2),
	waa_bullpen DECIMAL(3,2),
	PRIMARY KEY (team_id),
	CONSTRAINT FK_teams_team_stat FOREIGN KEY(team_id) REFERENCES teams(tid)
);

CREATE TABLE team_color_list (
	id INT NOT NULL,
	cname VARCHAR(20),
	script VARCHAR(100),
	PRIMARY KEY (id)
); 

CREATE TABLE team_color (
	team_id INT NOT NULL,
	color_id INT NOT NULL,
	CONSTRAINT FK_team_color_list_team_color FOREIGN KEY(color_id) REFERENCES team_color_list(id),
	CONSTRAINT FK_teams_team_color FOREIGN KEY(team_id) REFERENCES teams(tid)
);

CREATE TABLE team_op_rate (
	team_id INT NOT NULL,
	doosan DECIMAL(4,3),
	samsung DECIMAL(4,3),
	nc DECIMAL(4,3),
	kiwoom DECIMAL(4,3),
	ssg DECIMAL(4,3),
	hanhwa DECIMAL(4,3),
	lg DECIMAL(4,3),
	lotte DECIMAL(4,3),
	kia DECIMAL(4,3),
	kt DECIMAL(4,3),
	PRIMARY KEY(team_id),
	CONSTRAINT FK_teams_teams_op_rate FOREIGN KEY(team_id) REFERENCES teams(tid)
);

CREATE TABLE players (
	pid INT NOT NULL,
	team_id INT NOT NULL,
	pname VARCHAR(10),
	birth DATE NOT NULL,
	PRIMARY KEY (pid),
	CONSTRAINT FK_teams_players FOREIGN KEY(team_id) REFERENCES teams(tid)
);

CREATE TABLE player_style_list (
	id INT NOT NULL,
	sname VARCHAR(10),
	script VARCHAR(100),
	PRIMARY KEY(id)
);	

CREATE TABLE hitter_style (
	player_id INT NOT NULL,
	style_id INT NOT NULL,
	CONSTRAINT FK_players_hitter_style FOREIGN KEY(player_id) REFERENCES players(pid),
	CONSTRAINT FK_player_style_list_hitter_style FOREIGN KEY(style_id) REFERENCES player_style_list(id)
);

CREATE TABLE pitcher_style (
	player_id INT NOT NULL,
	style_id INT NOT NULL,
	CONSTRAINT FK_players_pitcher_style FOREIGN KEY(player_id) REFERENCES players(pid),
	CONSTRAINT FK_player_style_list_pitcher_style FOREIGN KEY(style_id) REFERENCES player_style_list(id)
);

CREATE TABLE game_list (
	id INT NOT NULL,
	best INT NOT NULL,
	worst INT NOT NULL,
	PRIMARY KEY (id),
	CONSTRAINT FK_players_game_list_best FOREIGN KEY(best) REFERENCES players(pid),
	CONSTRAINT FK_players_game_list_worst FOREIGN KEY(worst) REFERENCES players(pid)
);

CREATE TABLE hitter_stat (
	player_id INT NOT NULL,
	team_id INT NOT NULL,
	player_games INT,
	player_pos VARCHAR(10),
	pa INT,
	ab INT,
	r INT,
	rbi INT,
	hits INT,
	doubles INT,
	triples INT,
	hr INT,
	sb INT,
	cs INT,
	bb INT,
	hbp INT,
	so INT,
	gidp INT,
	sh INT,
	hit_avg DECIMAL(4,3),
	obp DECIMAL(4,3),
	slg DECIMAL(4,3),
	ops DECIMAL(4,3),
	woba DECIMAL(4,3),
	wrc_plus FLOAT,
	war DECIMAL(3,2),
	PRIMARY KEY(player_id),
	CONSTRAINT players_hitter_stat FOREIGN KEY(player_id) REFERENCES players(pid),
	CONSTRAINT teams_hitter_stat FOREIGN KEY(team_id) REFERENCES teams(tid)
);

CREATE TABLE pitcher_stat (
	player_id INT NOT NULL,
	team_id INT NOT NULL,
	player_games INT,
	cg INT,
	sho INT,
	gs INT,
	wins INT,
	loses INT,
	sv INT,
	hld INT,
	ip DECIMAL(4,1),
	r INT,
	er INT,
	hits INT,
	doubles INT,
	triples INT,
	hr INT,
	bb INT,
	hbp INT,
	ibb INT,
	so INT,
	bk INT,
	wp INT,
	era DECIMAL(4,2),
	fip DECIMAL(4,2),
	whip DECIMAL(4,2),
	era_plus DECIMAL(4,1),
	fip_plus DECIMAL(4,1),
	war DECIMAL(3,2),
	PRIMARY KEY (player_id),
	CONSTRAINT FK_players_pitcher_stat FOREIGN KEY(player_id) REFERENCES players(pid),
	CONSTRAINT FK_teams_pitcher_stat FOREIGN KEY(team_id) REFERENCES teams(tid)
);

CREATE TABLE hitter_detail (
	player_id INT NOT NULL,
	risp DECIMAL(4,3),
	ppa DECIMAL(3,2),
	fps DECIMAL(4,3),
	contact DECIMAL(4,3),
	twos_cut	DECIMAL(4,3),
	twos_gb DECIMAL(4,3),
	lso DECIMAL(4,3),
	in_hit DECIMAL(4,3),
	babip DECIMAL(4,3),
	pull_hit DECIMAL(4,3),
	push_hit DECIMAL(4,3),
	make_dp DECIMAL(4,3),
	team_lob INT,
	PRIMARY KEY (player_id),
	CONSTRAINT FK_players_hitter_detail FOREIGN KEY(player_id) REFERENCES players(pid)
);

CREATE TABLE pitcher_detail (
	player_id INT NOT NULL,
	babip DECIMAL(4,3),
	pip DECIMAL(3,2),
	lso DECIMAL(4,3),
	gofo DECIMAL(4,3),
	eob INT,
	qs_rate DECIMAL(4,3),
	sup_score DECIMAL(3,2),
	bl_plus INT,
	rel_rate DECIMAL(3,2),
	PRIMARY KEY(player_id),
	CONSTRAINT FK_players_pitcher_detail FOREIGN KEY(player_id) REFERENCES players(pid)
);