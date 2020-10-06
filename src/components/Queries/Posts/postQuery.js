import gql from 'graphql-tag'

const POST_QUERY = gql`
    query Post($id: ID!){
        post(id: $id){
            id
            title
            content
            created_at
            category{
                id
                name
            }
            picture{
                url
            }
        }
    }
`

export default POST_QUERY