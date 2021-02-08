import gql from 'graphql-tag'

const CONTENT_QUERY = gql`
    query Content{
        pageContent{
            mainTitle_hr
            mainTitle_en
            landingText_hr
            landingText_en
            mainDescription_hr
            mainDescription_en
            appDescription1_hr
            appDescription1_en
            appDescription2_hr
            appDescription2_en
          }
    }
`

export default CONTENT_QUERY