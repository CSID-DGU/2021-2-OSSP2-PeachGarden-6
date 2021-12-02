import Layout from '../components/Layout';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OpSection from '../components/common/OpSectionType';
import { urlSet } from '../constants/urls';

const Team = () => {
  const [teamList, setTeamList] = useState([]);
  useEffect(async () => {
    await axios
      .get(urlSet.team)
      .then(({ data: { data } }) => {
        if (data) {
          console.log(data);
          setTeamList(data);
        }
        else {
          setTeamList([]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const [colorList, setcolorList] = useState([]);
  useEffect(async () => {
    await axios
      .get(urlSet.color)
      .then(({ data: { data } }) => {
        if (data) {
          console.log(data);
          setcolorList(data);
        }
        else {
          setcolorList([]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  let nameList = ["VS","두산","삼성","NC","키움","SSG","한화","LG","롯데","KIA","KT"];
  return (
    <TeamMainLayout>
        <TeamTitle>상대 승률</TeamTitle>
        <OpSection text="" columnList={nameList} parentIndex={1} data={teamList.list} key = {1} pageType={`style`} />
    </TeamMainLayout>
  );
};


const TeamTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const TeamMainLayout = styled.div`
  width: 100%;
`;

export default Team;