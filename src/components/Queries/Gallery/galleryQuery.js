import gql from 'graphql-tag'

const IMAGES_QUERY = gql`
query Images{
    images{
      Gallery{
        id
          url
      }
        }
    }
`

export default IMAGES_QUERY


