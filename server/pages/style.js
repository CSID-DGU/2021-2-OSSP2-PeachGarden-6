import Layout from '../components/Layout';
import styled from "styled-components";
import StyleTable from '../components/graph/StyleTable';
import { STYLE_DUMMY_DATA } from '../constants/dummy/stylepage';
// const Index = (props) => (
//     console.log(props),
//     <Layout>
//         <h1>{props.title}</h1>
//         <p>Style page</p>
//     </Layout>
// )

// Index.getInitialProps = async (context) => {
//     const title = context.query.title;

//     return { title: title };
// };

const TeamTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const MainLayout = styled.div`
  width: 100%;
`;

export default() => (
    <MainLayout>
        <TeamTitle>선수 호칭</TeamTitle>
        <StyleTable data={STYLE_DUMMY_DATA} />
    </MainLayout>
    
)