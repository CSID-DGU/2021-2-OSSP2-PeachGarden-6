import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import SearchOptionSection from "../components/common/SearchOptionSection";
import HitterSearchTable from "../components/graph/SearchTable";
import PitcherSearchTable from "../components/graph/PitcherSearchTable";
import {
  SEARCH_DUMMY_DATA,
  SEARCH_OPTION_LIST,
} from "../constants/dummy/searchpage";
import { LOCAL_URL, urlSet } from "../constants/urls";
import { playerListState, playerRoleState, searchState, selectedPlayerState } from "../recoil/search";
import CompareModal from "../components/Modal/CompareModal";

const SearchPage = (props) => {
  const [searchOption, setSearchOption] = useRecoilState(searchState);
  const [playerRole, setPlayerRole] = useRecoilState(playerRoleState);
  const { role, team, position, name } = props;
  const [playerList, setPlayerList] = useRecoilState(playerListState);
  const [selectedPlayer, setSelectedPlayer] =
    useRecoilState(selectedPlayerState);

  useEffect(async () => {
    await axios
      .get(
        urlSet.searchPlayer +
          `?a=a${role ? `&role=${role}` : ``}${team ? `&team=${team}` : ``}${
            position ? `&position=${position}` : ``
          }${name ? `&name=${name}` : ``}`
      )
      .then(({ data: { data } }) => {
        if (data) {
          setPlayerList(data);
        } else {
          setPlayerList([]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
    setSearchOption({
      name: name ? name : null,
      position: position ? position : "전체",
      role: role ? role : "타자",
      team: team ? team : "두산",
    });
  }, [props]);

  useEffect(() => {
    if (role && role !== playerRole) {
      setSelectedPlayer([]);
      setPlayerRole(role);
    }
  }, [role, playerRole]);

  return (
    <>
      <SearchMainDiv>
        <SearchTitle>선수 검색</SearchTitle>
        <SearchOptionSection optionList={SEARCH_OPTION_LIST} />
        {!playerList || playerList.length === 0 ? (
          <p>값 없음</p>
        ) : role === "투수" ? (
          <PitcherSearchTable data={playerList} />
        ) : (
          <HitterSearchTable data={playerList} />
        )}
      </SearchMainDiv>
      <CompareModal />
    </>
  );
};

SearchPage.getInitialProps = async (context) => {
  const { role, team, position, name } = context.query;
  return { role: role, team: team, position: position, name: name };
};

const SearchMainDiv = styled.div``;

const SearchTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export default SearchPage;
