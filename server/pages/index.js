import Link from 'next/link'
import Layout from '../components/Layout'

const Postlink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/style?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>Player battle</h1>
        <ul>
            <Postlink title="hello"/>
            <Postlink title="hello 2트"/>
            <Postlink title="hello 3트"/>
        </ul>
    </Layout>
)
