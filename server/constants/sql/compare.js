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
`
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
`

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
`
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
`
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
`

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
    PS.player_id = "${pid}"
`

const searchBestCount = ({ pid }) => `
  SELECT
    COUNT(*)
  FROM
    game_list AS gl
  WHERE
    gl.best = "${pid}"
`

const searchWorstCount = ({ pid }) => `
  SELECT
    COUNT(*)
  FROM
    game_list AS gl
  WHERE
    gl.worst = "${pid}"
`

module.exports = { searchPitcherInfo, searchHitterInfo, searchAllPitStat, searchAllHitStat, searchPitcherStyle, searchHitterStyle, searchBestCount, searchWorstCount };