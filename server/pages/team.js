import Layout from '../components/Layout';
import styled from "styled-components";
import BasicTable from '../components/graph/BasicTable';
import { TEAM_DUMMY_DATA } from '../constants/dummy/teampage';

const StylePage = () => {
  const [teamList, setTeamList] = useState([]);
  useEffect(async () => {
    await axios
      .get(urlSet.style)
      .then(({ data: { data } }) => {
        if (data) {
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

  return (
    <MainLayout>
        <TeamTitle>팀 기록</TeamTitle>
        <BasicTable data={TEAM_DUMMY_DATA} />
    </MainLayout>
  );
};


const TeamTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const TeamMainLayout = styled.div`
  width: 100%;
`;

export default TeamPage;