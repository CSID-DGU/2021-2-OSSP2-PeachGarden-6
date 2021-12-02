const searchOpRate = ({tid}) => `
  SELECT 
    *
  FROM 
    TEAM_OP_RATE AS OP
  JOIN
    TEAMS AS T
  ON
    OP.TEAM_ID = T.TID;
  WHERE OP.TEAM_ID = ${tid};
`

const searchTeamColor = ({tid}) => ` 
  SELECT
    TCL.CNAME
  FROM
    TEAM_COLOR AS TC
  JOIN
    TEAMS AS T
  ON 
    TC.TEAM_ID = T.TID
  JOIN
    TEAM_COLOR_LIST AS TCL
  ON
    TC.COLOR_ID = TCL.ID
  WHERE
    TC.TEAM_ID = ${tid};
`

const showTeamColorList = () => `
  SELECT
    *
  FROM
    TEAM_COLOR_LIST;
`

module.exports = {searchOpRate, searchTeamColor, showTeamColorList};