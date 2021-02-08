import gql from 'graphql-tag'

const IMAGES_QUERY = gql`
                        query Images{
                           image{
                             gallery{
                               id
                               url
                             }
                           }
                          }
                        `

export default IMAGES_QUERY

 
 