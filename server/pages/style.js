import axios from "axios";
import Link from "next/link";
import Layout from '../components/Layout';
import styled from "styled-components";
import MainSectionType2 from "../components/common/MainSectionType2";
import { STYLE_DUMMY_DATA } from '../constants/dummy/stylepage';
import React, { useEffect, useState } from "react";
import { urlSet } from "../constants/urls";

const STYLE_SECTION = {
  columns: ["칭호", "기준"],
  data: STYLE_DUMMY_DATA,
};

const StylePage = () => {
  const [styleList, setStyleList] = useState([]);
  useEffect(async () => {
    await axios
      .get(urlSet.style)
      .then(({ data: { data } }) => {
        if (data) {
          setStyleList(data.resultList);
        }
        else {
          setStyleList([]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <StyleMainLayout>
      <StyleTitle>선수 호칭</StyleTitle>
      <MainSectionType2 text="" columnList={["칭호", "기준"]} parentIndex={1} data={styleList} pageType={`style`} />
    </StyleMainLayout>
  );
};

const StyleTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const StyleMainLayout = styled.div`
  width: 100%;
`;

export default StylePage;