const searchPitcherInfo = ({ pid }) => `
  SELECT
    P.pname
    , P.birth
    , T.short_name
  FROM
    players AS P
  JOIN
    teams AS T
  ON
    P.team_id = T.tid
  WHERE
    P.pid = "${pid}"
`;
const searchHitterInfo = ({ pid }) => `
  SELECT
    P.pname
    , P.birth
    , HS.player_pos
    , T.short_name
  FROM
    players AS P
  JOIN
    teams AS T
  ON
    P.team_id = T.tid
  JOIN
    hitter_stat AS HS
  ON
    P.pid = HS.player_id
  WHERE
    P.pid = "${pid}"
`;

const searchAllPitStat = ({ pid }) => `
  SELECT
    PS.war
    , PS.player_games
    , PS.cg
    , PS.sho
    , PS.gs
    , PS.wins
    , PS.loses
    , PS.sv
    , PS.hld
    , PS.ip
    , PS.r
    , PS.er
    , PS.hits
    , PS.doubles
    , PS.triples
    , PS.hr
    , PS.bb
    , PS.hbp
    , PS.ibb
    , PS.so
    , PS.bk
    , PS.wp
    , PS.era
    , PS.fip
    , PS.whip
    , PS.era_plus
    , PS.fip_plus
  FROM
    pitcher_stat AS PS
  WHERE
    PS.PLAYER_ID = "${pid}"
`;

const searchAvgPitStat = () => `
  SELECT
    AVG(PS.war) AS WAR
    , AVG(PS.player_games) AS PLAYER_GAMES
    , AVG(PS.cg) AS CG
    , AVG(PS.sho) AS SHO
    , AVG(PS.gs) AS GS
    , AVG(PS.wins) AS WINS
    , AVG(PS.loses) AS LOSES
    , AVG(PS.sv) AS SV
    , AVG(PS.hld) AS HLD
    , AVG(PS.ip) AS IP
    , AVG(PS.r) AS R
    , AVG(PS.er) AS ER
    , AVG(PS.hits) AS HITS
    , AVG(PS.doubles) AS DOUBLES
    , AVG(PS.triples) AS TRIPLES
    , AVG(PS.hr) AS HR
    , AVG(PS.bb) AS BB
    , AVG(PS.hbp) AS HBP
    , AVG(PS.ibb) AS IBB
    , AVG(PS.so) AS SO
    , AVG(PS.bk) AS BK
    , AVG(PS.wp) AS WP
    , AVG(PS.era) AS ERA
    , AVG(PS.fip) AS FIP
    , AVG(PS.whip) AS WHIP
    , AVG(PS.era_plus) AS ERA_PLUS
    , AVG(PS.fip_plus) AS FIP_PLUS
  FROM
    pitcher_stat AS PS
`;

const searchAllHitStat = ({ pid }) => `
  SELECT
    HS.war
    , HS.player_games
    , HS.pa
    , HS.ab
    , HS.r
    , HS.rbi
    , HS.hits
    , HS.doubles
    , HS.triples
    , HS.hr
    , HS.sb
    , HS.cs
    , HS.bb
    , HS.hbp
    , HS.so
    , HS.gidp
    , HS.sh
    , HS.hit_avg
    , HS.obp
    , HS.slg
    , HS.ops
    , HS.woba
    , HS.wrc_plus
  FROM
    hitter_stat AS HS
  WHERE
    HS.PLAYER_ID = "${pid}"
`;

const searchAvgHitStat = () => `
  SELECT
    AVG(HS.war) AS WAR
    , AVG(HS.player_games) AS PLAYER_GAMES
    , AVG(HS.pa) AS PA
    , AVG(HS.ab) AS AB
    , AVG(HS.r) AS R
    , AVG(HS.rbi) AS RBI
    , AVG(HS.hits) AS HITS
    , AVG(HS.doubles) AS DOUBLES
    , AVG(HS.triples) AS TRIPLES
    , AVG(HS.hr) AS HR
    , AVG(HS.sb) AS SB
    , AVG(HS.cs) AS CS
    , AVG(HS.bb) AS BB
    , AVG(HS.hbp) AS HBP
    , AVG(HS.so) AS SO
    , AVG(HS.gidp) AS GIDP
    , AVG(HS.sh) AS SH
    , AVG(HS.hit_avg) AS HIT_AVG
    , AVG(HS.obp) AS OBP
    , AVG(HS.slg) AS SLG
    , AVG(HS.ops) AS OPS
    , AVG(HS.woba) AS WOBA
    , AVG(HS.wrc_plus) AS WRC_PLUS
  FROM
    hitter_stat AS HS
`;

const searchPitcherStyle = ({ pid }) => `
  SELECT
    PSL.sname
  FROM
    pitcher_style AS PS
  JOIN
    player_style_list AS PSL
  ON
    PS.style_id = PSL.id
  WHERE
    PS.player_id = "${pid}"
`;

const searchHitterStyle = ({ pid }) => `
  SELECT
    PSL.sname
  FROM
    hitter_style AS HS
  JOIN
    player_style_list AS PSL
  ON
    HS.style_id = PSL.id
  WHERE
    HS.player_id = "${pid}"
`;

const searchBestCount = ({ pid }) => `
  SELECT
    COUNT(*)
  FROM
    game_list AS gl
  WHERE
    gl.best = "${pid}"
`;

const searchWorstCount = ({ pid }) => `
  SELECT
    COUNT(*)
  FROM
    game_list AS gl
  WHERE
    gl.worst = "${pid}"
`;

module.exports = {
  searchPitcherInfo,
  searchHitterInfo,
  searchAllPitStat,
  searchAllHitStat,
  searchAvgPitStat,
  searchAvgHitStat,
  searchPitcherStyle,
  searchHitterStyle,
  searchBestCount,
  searchWorstCount,
};
