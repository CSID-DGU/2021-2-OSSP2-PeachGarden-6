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
    AVG(PS.war)
    , AVG(PS.player_games)
    , AVG(PS.cg)
    , AVG(PS.sho)
    , AVG(PS.gs)
    , AVG(PS.wins)
    , AVG(PS.loses)
    , AVG(PS.sv)
    , AVG(PS.hld)
    , AVG(PS.ip)
    , AVG(PS.r)
    , AVG(PS.er)
    , AVG(PS.hits)
    , AVG(PS.doubles)
    , AVG(PS.triples)
    , AVG(PS.hr)
    , AVG(PS.bb)
    , AVG(PS.hbp)
    , AVG(PS.ibb)
    , AVG(PS.so)
    , AVG(PS.bk)
    , AVG(PS.wp)
    , AVG(PS.era)
    , AVG(PS.fip)
    , AVG(PS.whip)
    , AVG(PS.era_plus)
    , AVG(PS.fip_plus)
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
    AVG(HS.war)
    , AVG(HS.player_games)
    , AVG(HS.pa)
    , AVG(HS.ab)
    , AVG(HS.r)
    , AVG(HS.rbi)
    , AVG(HS.hits)
    , AVG(HS.doubles)
    , AVG(HS.triples)
    , AVG(HS.hr)
    , AVG(HS.sb)
    , AVG(HS.cs)
    , AVG(HS.bb)
    , AVG(HS.hbp)
    , AVG(HS.so)
    , AVG(HS.gidp)
    , AVG(HS.sh)
    , AVG(HS.hit_avg)
    , AVG(HS.obp)
    , AVG(HS.slg)
    , AVG(HS.ops)
    , AVG(HS.woba)
    , AVG(HS.wrc_plus)
  FROM
    hitter_stat AS HS
  WHERE
    HS.PLAYER_ID = "${pid}"
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
