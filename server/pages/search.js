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
import { playerListState, searchState, selectedPlayerState } from "../recoil/search";
import CompareModal from "../components/Modal/CompareModal";

const Search = (props) => {
  const [searchOption, setSearchOption] = useRecoilState(searchState);
  const { role, team, position, name } = props;
  const [playerList, setPlayerList] = useRecoilState(playerListState);

  useEffect(async () => {
    console.log("목표 검색값: ", role, team, position, name);
    // 리스트 갱신
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

  return (
    <>
      <SearchMainDiv>
        <SearchTitle>선수 검색</SearchTitle>
        <SearchOptionSection optionList={SEARCH_OPTION_LIST} />
        {!playerList || playerList.length === 0 ? (
          <p>값 없음</p>
        ) : role === "타자" ? (
          <HitterSearchTable data={playerList} />
        ) : (
          <PitcherSearchTable data={playerList} />
        )}
      </SearchMainDiv>
      <CompareModal />
    </>
  );
};

Search.getInitialProps = async (context) => {
  const { role, team, position, name } = context.query;
  return { role: role, team: team, position: position, name: name };
};

const SearchMainDiv = styled.div``;

const SearchTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export default Search;
