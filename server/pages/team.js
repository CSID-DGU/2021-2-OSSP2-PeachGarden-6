import Layout from '../components/Layout';
import styled from "styled-components";
import BasicTable from '../components/graph/BasicTable';
import { TEAM_DUMMY_DATA } from '../constants/dummy/teampage';

const TeamTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const MainLayout = styled.div`
  width: 100%;
`;

export default() => (
    <MainLayout>
        <TeamTitle>팀 기록</TeamTitle>
        <BasicTable data={TEAM_DUMMY_DATA} />
    </MainLayout>
    
)