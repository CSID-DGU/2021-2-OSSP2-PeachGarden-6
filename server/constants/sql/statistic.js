const selectPitcherWarCoordinates = () => `
  select 
    ps.war
  from 
    pitcher_stat ps 
  order by
    ps.player_games desc
    , ps.war desc
`;

const selectPitcherPlayerGamesCoordinates = () => `
  select 
    ps.player_games 
  from 
    pitcher_stat ps 
  order by
    ps.player_games desc
    , ps.war desc
`;

const selectHitterWarCoordinates = () => `
  select 
    hs.war
  from 
    hitter_stat hs 
  order by
    hs.player_games desc
    , hs.war desc
`;

const selectHitterPlayerGamesCoordinates = () => `
  select 
    hs.player_games 
  from 
    hitter_stat hs 
  order by
    hs.player_games desc
    , hs.war desc
`;

module.exports = {
  selectHitterWarCoordinates,
  selectPitcherPlayerGamesCoordinates,
  selectPitcherWarCoordinates,
  selectHitterPlayerGamesCoordinates,
};
