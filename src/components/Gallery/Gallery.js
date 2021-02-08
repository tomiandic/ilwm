import React, {useState} from 'react';
import Lightbox from 'fslightbox-react'
import Button from '../UI/Button/Button'
import IMAGES_QUERY from '../Queries/Gallery/galleryQuery'
import {useQuery} from '@apollo/client'
import classes from './Gallery.module.css'


function Gallery(){

    const [toggler, setToggler] = useState(false)
    const [index, setIndex] = useState(0)
    const [imgNum, setImgNum] = useState(12)
    const {data, error, loading} = useQuery(IMAGES_QUERY) 

    if(loading) return 'Loading...' 
    if(error) console.log(error)
    const allSources = data.image.gallery
    const slicedSources = allSources.slice(0, imgNum)

    const loadHandler = () => {
        setImgNum(imgNum+8)
    }


/* const sources = [...imgSources, ...vidSources] */
//REINICIALIZIRAJ LIGHTBOX

    const sources = slicedSources.map((image) => (image.url))
    let loadMore = (allSources.length > 12 && allSources.length > imgNum) ? <div className={classes.loadMoreContainer}><Button onClick={loadHandler} type="load">Učitaj još</Button></div> : null
    
    const openLightBox = (i) => {
        setToggler(prevState => (!prevState));
        setIndex(i)
    }

     const thumbs = sources.map((source, index) => 
        <img className={classes.thumb} src={source} key={index} onClick={() => openLightBox(index)} />
    ) 


    return(

        <div className={classes.galleryContainer}>
            
            <Lightbox toggler={toggler} 
            sources={sources}
            sourceIndex={index}
            key={sources.length}
            >
            </Lightbox>
            {thumbs} 
            {loadMore}
           

        </div>
       )
}
export default Gallery
