import axios from "axios";
import Link from "next/link";
import Layout from '../components/Layout';
import styled from "styled-components";
import StyleSectionType from "../components/common/StyleSectionType";
import React, { useEffect, useState } from "react";
import { urlSet } from "../constants/urls";


const StylePage = () => {
  const [styleList, setStyleList] = useState([]);
  useEffect(async () => {
    await axios
      .get(urlSet.style)
      .then(({ data: { data } }) => {
        if (data) {
          console.log(data);
          setStyleList(data);
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
      <StyleSectionType text="" columnList={["칭호", "기준"]} parentIndex={1} data={styleList} key = {1} pageType={`style`} />
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