const searchPitcherStat = ({ name, team }) => `
  SELECT
    PL.PNAME
    , PS.WAR
    , PS.PLAYER_GAMES
    , PS.WINS
    , PS.LOSES
    , PS.SV
    , PS.HLD
    , PS.ERA
    , PS.WHIP
  FROM
    PLAYERS PL
  JOIN
    PITCHER_STAT PS
  ON
    PS.PLAYER_ID = PL.PID
  JOIN
    TEAMS TS
  ON
    TS.TID = PL.TEAM_ID
  WHERE
    TRUE
  ${
    name
      ? `
    AND PL.PNAME = "${name}"`
      : ``
  }
  ${
    team
      ? `
    AND TS.SHORT_NAME = "${team}"`
      : ``
  }
  ORDER BY PID DESC
`;

const searchHitterStat = ({ name, position, team }) => `
  SELECT
    PL.PNAME
    , HS.WAR
    , HS.HIT_AVG
    , HS.HR
    , HS.SB
    , HS.RBI
    , HS.OBP
    , HS.SLG
    , HS.OPS
  FROM
    PLAYERS PL
  JOIN
    HITTER_STAT HS
  ON
    HS.PLAYER_ID = PL.PID
  JOIN
    TEAMS TS
  ON
    TS.TID = PL.TEAM_ID
  WHERE
    TRUE
  ${
    name
      ? `
    AND PL.PNAME = "${name}"`
      : ``
  }
  ${
    team
      ? `
    AND TS.SHORT_NAME = "${team}"`
      : ``
  }
  ${
    position
      ? `
    AND HS.PLAYER_POS = "${position}"`
      : ``
  }
  ORDER BY PID DESC
`;

const testQuery = () => `
  SELECT
    *
  FROM
    PLAYERS PL
`;

module.exports = { searchPitcherStat, searchHitterStat, testQuery };
