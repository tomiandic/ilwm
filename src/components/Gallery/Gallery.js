import React, {useState} from 'react';
import Lightbox from 'fslightbox-react'
import Button from '../UI/Button/Button'
import IMAGES_QUERY from '../Queries/Gallery/galleryQuery'
import  Query from '../Queries/Query'
import {useQuery} from '@apollo/client'

import classes from './Gallery.module.css'


function Gallery(props){

    const [toggler, setToggler] = useState(false)
    const [index, setIndex] = useState(0)
    const {data, loading} = useQuery(IMAGES_QUERY)

    if(loading) return 'Loading...'

     /* console.log(data)  */
    
/* 

const imgSources = ['https://i.imgur.com/fsyrScY.jpg',
                       'https://i.imgur.com/fsyrScY.jpg',
                       'https://i.imgur.com/fsyrScY.jpg',
                       'https://i.imgur.com/fsyrScY.jpg'
                       ]

    const vidSources = ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    ]
    const sources = [...imgSources, ...vidSources] */


     const sources = data.images[0].Gallery.map((image) => ("http://localhost:1337" + image.url))
    let loadMore = sources.length>15 ? <div className={classes.loadMoreContainer}><Button type="load">Učitaj još</Button></div> : null

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
            >
            </Lightbox>
            {thumbs} 
            {loadMore}
           

        </div>
       )
}
export default Gallery
