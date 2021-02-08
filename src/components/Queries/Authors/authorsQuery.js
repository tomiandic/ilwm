import gql from 'graphql-tag'

const AUTHORS_QUERY = gql`
                        query Authors{
                            authors(sort: "createdAt:DESC"){
                                id
                                fullName
                                role
                                workPlace
                                mailAddress
                                profilePicture{
                                  url
                                }
                            }
                          }
                        `

export default AUTHORS_QUERY

 
 