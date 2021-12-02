const searchOpRate = () => `
  SELECT 
    OP.DOOSAN
    , OP.SAMSUNG
    , OP.NC
    , OP.KIWOOM
    , OP.SSG
    , OP.HANWHA
    , OP.LG
    , OP.LOTTE
    , OP.KIA
    , OP.KT
  FROM 
    TEAM_OP_RATE AS OP;
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