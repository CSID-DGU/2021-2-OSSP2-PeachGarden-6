import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import SearchOptionSection from "../components/common/SearchOptionSection";
import SearchTable from "../components/graph/SearchTable";
import { SEARCH_DUMMY_DATA, SEARCH_OPTION_LIST } from "../constants/dummy/searchpage";
import { searchState } from "../recoil/search";

const Search = (props) => {
  const [searchOption, setSearchOption] = useRecoilState(searchState);
  const {role, team, position, name} = props;

  useEffect(() => {
    console.log("목표 검색값: ", role, team, position, name);
    // 리스트 갱신
    setSearchOption({
      name: name?name:null,
      position: position?position:'C',
      role: role?role:'타자',
      team: team?team:'두산',
    })
  }, [props]);

  return (
    <SearchMainDiv>
      <SearchTitle>선수 검색</SearchTitle>
      <SearchOptionSection optionList={SEARCH_OPTION_LIST} />
      <SearchTable data={SEARCH_DUMMY_DATA} />
    </SearchMainDiv>
  );
};

Search.getInitialProps = async (context) => {
  const {role, team, position, name} = context.query;
  return {role: role, team: team, position: position, name: name};
}

const SearchMainDiv = styled.div`
  width: 100%;
  margin: 10px;
`;

const SearchTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export default Search;
