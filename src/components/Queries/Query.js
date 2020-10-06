import React from 'react';
import {useQuery} from '@apollo/client'

const Query = ({children, query, id}) => {
    
    const {data, loading, error} = useQuery(query, {
        variables: {id:parseInt(id)}
    })

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: (JSON.stringify(error)){console.log(error)}</p>
    return children({data})
}

export default Query