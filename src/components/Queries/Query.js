import React from 'react';
import {useQuery} from '@apollo/client'
import Loader from '../UI/Loader/Loader'


const Query = ({children, query, id}) => {
    
    const {data, loading, error} = useQuery(query, {
        variables: {id:id}
    })

    if(loading) return   <Loader />
    if(error) return <p>Error: (JSON.stringify(error)){console.log(error)}</p>
    return children({data})
}

export default Query