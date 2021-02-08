import gql from 'graphql-tag'

const POSTS_QUERY = gql`
    query Posts{
        posts(sort: "createdAt:DESC"){
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

export default POSTS_QUERY


