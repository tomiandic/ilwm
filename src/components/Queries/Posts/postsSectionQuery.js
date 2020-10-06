import gql from 'graphql-tag'

const POSTS_MAIN_QUERY = gql`
    query Posts{
        posts{
            id
            title
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

export default POSTS_MAIN_QUERY