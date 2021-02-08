import gql from 'graphql-tag'

const POST_QUERY = gql`
    query Post($id: ID!){
        post(id: $id){
            id
            title
            content
            published_at
            categories{
                id
                name
            }
            image{
                url
            }
        }
    }
`

export default POST_QUERY