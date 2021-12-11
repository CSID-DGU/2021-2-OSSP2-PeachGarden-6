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
    Avg(PS.war) AS WAR
    , Avg(PS.player_games) AS PLAYER_GAMES
    , Avg(PS.cg) AS CG
    , Avg(PS.sho) AS SHO
    , Avg(PS.gs) AS GS
    , Avg(PS.wins) AS WINS
    , Avg(PS.loses) AS LOSES
    , Avg(PS.sv) AS SV
    , Avg(PS.hld) AS HLD
    , Avg(PS.ip) AS IP
    , Avg(PS.r) AS R
    , Avg(PS.er) AS ER
    , Avg(PS.hits) AS HITS
    , Avg(PS.doubles) AS DOUBLES
    , Avg(PS.triples) AS TRIPLES
    , Avg(PS.hr) AS HR
    , Avg(PS.bb) AS BB
    , Avg(PS.hbp) AS HBP
    , Avg(PS.ibb) AS IBB
    , Avg(PS.so) AS SO
    , Avg(PS.bk) AS BK
    , Avg(PS.wp) AS WP
    , Avg(PS.era) AS ERA
    , Avg(PS.fip) AS FIP
    , Avg(PS.whip) AS WHIP
    , Avg(PS.era_plus) AS ERA_PLUS
    , Avg(PS.fip_plus) AS FIP_PLUS
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
    , HS.hit_Avg
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
    Avg(HS.war) AS WAR
    , Avg(HS.player_games) AS PLAYER_GAMES
    , Avg(HS.pa) AS PA
    , Avg(HS.ab) AS AB
    , Avg(HS.r) AS R
    , Avg(HS.rbi) AS RBI
    , Avg(HS.hits) AS HITS
    , Avg(HS.doubles) AS DOUBLES
    , Avg(HS.triples) AS TRIPLES
    , Avg(HS.hr) AS HR
    , Avg(HS.sb) AS SB
    , Avg(HS.cs) AS CS
    , Avg(HS.bb) AS BB
    , Avg(HS.hbp) AS HBP
    , Avg(HS.so) AS SO
    , Avg(HS.gidp) AS GIDP
    , Avg(HS.sh) AS SH
    , Avg(HS.hit_Avg) AS HIT_Avg
    , Avg(HS.obp) AS OBP
    , Avg(HS.slg) AS SLG
    , Avg(HS.ops) AS OPS
    , Avg(HS.woba) AS WOBA
    , Avg(HS.wrc_plus) AS WRC_PLUS
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
