import Layout from '../components/Layout';
import styled from "styled-components";
import TeamTable from '../components/graph/TeamTable';
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
        <TeamTable data={TEAM_DUMMY_DATA} />
    </MainLayout>
    
)