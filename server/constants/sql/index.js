const searchLeaderboard = () => `
  SELECT
    T.SHORT_NAME
    , TS.TEAM_GAMES
    , TS.WINS
    , TS.LOSES
    , TS.DRAWS
    , TS.WIN_RATE
    , TS.GAME_BEHIND
  FROM
    TEAMS T
  JOIN
    TEAM_STAT TS
  ON
    T.TID = TS.TEAM_ID
  ORDER BY WIN_RATE DESC
`;

const searchWAA = () => `
  SELECT
    TS.WAA_BATTING
    , TS.WAA_RUNNING
    , TS.WAA_DEFENSE
    , TS.WAA_STARTING
    , TS.WAA_BULLPEN
  FROM
    TEAM_STAT TS
  JOIN
    TEAMS T
  ON
    TS.TEAM_ID = T.TID
  ORDER BY WIN_RATE DESC
`;

const searchTopThree = ({roleType, title}) => `
  select
    ps.pname 
    , sss.${title} 
  from 
    ${roleType === "hitter"?`
    hitter_stat sss
  join
    players ps 
  on
    ps.pid = sss.player_id
  where
    sss.pa >= 446
  order by sss.${title} desc
    `:`
    pitcher_stat sss
  join
    players ps 
  on
    ps.pid = sss.player_id 
  ${title === "era"?`
  where
    sss.ip >= 144
  order by sss.${title} asc
  `:`
  order by 
    sss.${title} desc
  `}
`}
  limit 3 offset 0
`;

module.exports = { searchLeaderboard, searchWAA, searchTopThree };