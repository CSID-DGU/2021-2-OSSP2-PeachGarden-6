import { memo } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { searchState } from "../../recoil/search";
import OptionBadge from "../Badge/OptionBadge";
import ButtonType1 from "../Button/ButtonType1";
import Router from "next/router";

const SearchOptionSection = ({ optionList }) => {
  const [searchOption, setSearchOption] = useRecoilState(searchState);
  const handleSearch = () => {
    const { name, position, role, team } = searchOption;
    let query = ``;
    if (name) {
      query += `name=${name}&`;
    }
    if (position) {
      query += `position=${position}&`;
    }
    if (role) {
      query += `role=${role}&`;
    }
    if (team) {
      query += `team=${team}&`;
    }
    Router.push(`/search?${query}`);
  };
  const handleText = (e) => {
    setSearchOption({ ...searchOption, name: e.target.value });
  };
  return (
    <SearchOptionDiv>
      {optionList.map(({ option, list, text }, index) => (
        <SearchOptionLine>
          <OptionBadge text={text} />
          {option === "position" ? (
            <OptionList list={list[searchOption.role]} option={option} />
          ) : (
            <OptionList list={list} option={option} />
          )}
        </SearchOptionLine>
      ))}
      <SearchOptionLine>
        <OptionBadge text={"이름"} />
        <OptionTextInput onChange={handleText} />
        <ButtonType1 text="Search" onClick={handleSearch} />
      </SearchOptionLine>
    </SearchOptionDiv>
  );
};

const OptionTextInput = ({ onChange }) => {
  return <TextInput placeholder={`이름을 입력해주세요.`} onChange={onChange} />;
};

const OptionList = ({ list, option }) => {
  const [searchOption, setSearchOption] = useRecoilState(searchState);
  return (
    <OptionListDiv>
      {list.map((item, index) => (
        <OptionRadio
          option={option}
          text={item}
          isChecked={searchOption[option] === item}
        />
      ))}
    </OptionListDiv>
  );
};

const OptionRadio = ({ text, isChecked, option }) => {
  const [searchOption, setSearchOption] = useRecoilState(searchState);
  const handleChecked = () => {
    let temp = { ...searchOption };
    temp[option] = text;
    if (option === 'role') {
      temp.position = '';
    }
    setSearchOption(temp);
  };
  return (
    <OptionRadioDiv>
      <input
        type="radio"
        value={text}
        checked={isChecked}
        onChange={handleChecked}
      />
      <p>{text}</p>
    </OptionRadioDiv>
  );
};

const SearchOptionDiv = styled.div``;

const SearchOptionLine = styled.div`
  display: flex;
  text-align: center;
`;

const OptionListDiv = styled.div`
  display: flex;
  justify-content: start;
`;

const OptionRadioDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  & :nth-child(n) {
    margin: 0;
    margin-left: 10px;
  }
`;

const TextInput = styled.input`
  width: 400px;
  height: 30px;
  margin: 0;
  margin-top: 8px;
  margin-left: 20px;
`;

export default memo(SearchOptionSection);
