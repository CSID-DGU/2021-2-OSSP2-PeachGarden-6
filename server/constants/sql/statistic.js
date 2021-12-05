const selectPitcherWarCoordinates = () => `
  select 
    ps.war
    , ps.player_games 
  from 
    pitcher_stat ps 
`;

const selectHitterWarCoordinates = () => `
  select 
    hs.war
    , hs.player_games 
  from 
    hitter_stat hs 
`;

module.exports = { selectHitterWarCoordinates, selectPitcherWarCoordinates };