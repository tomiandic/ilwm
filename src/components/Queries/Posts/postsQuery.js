import gql from 'graphql-tag'

const POSTS_QUERY = gql`
    query Posts{
        posts{
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

export default POSTS_QUERY


