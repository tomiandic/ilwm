import gql from 'graphql-tag'

const POSTS_MAIN_QUERY = gql`
    query Posts{
        posts(limit: 10 sort: "createdAt:DESC"){
            id
            title
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

export default POSTS_MAIN_QUERY