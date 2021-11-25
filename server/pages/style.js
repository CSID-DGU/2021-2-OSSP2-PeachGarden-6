import Layout from '../components/Layout'

const Index = (props) => (
    console.log(props),
    <Layout>
        <h1>{props.title}</h1>
        <p>Style page</p>
    </Layout>
)

Index.getInitialProps = async (context) => {
    const title = context.query.title;

    return { title: title };
};

export default Index;