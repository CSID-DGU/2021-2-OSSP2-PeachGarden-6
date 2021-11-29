const searchStyle = () => `
  SELECT
    ID
    , SNAME
    , SCRIPT
    FROM
      PLAYER_STYLE_LIST
    ORDER BY ID DESC
`;

module.exports = { searchStyle };