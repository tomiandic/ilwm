import React from 'react';
import Query from "../Queries/Query"
import classes from './Posts.module.css'
import postImg from '../../assets/landing.jpg'
import POSTS_QUERY from '../Queries/Posts/postsQuery'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'

function Posts(){

    
   return(
       <section className={classes.postsSection}>
           <div className={classes.postsTitle}>
               <img src={postImg}/>
               <h1>Novosti</h1>
           </div>
        <div className={classes.postsContainer}>
            <Query query={POSTS_QUERY}>
                {({data: {posts}})=>{
                /*     console.log(posts) */
                    return(posts.map((post)=>{
                       let date = new Date(post.created_at)
                       return(
                           <Link to={"novosti/" +  post.id}>
                           <article key={post.id} className={classes.post}>
                              <img src={post.picture.url} />
                              <div className={classes.postDetails}>
                                  <p className={classes.postCat}>{post.category.name}</p>
                                  <h2>{post.title}</h2>
                                  <p className={classes.postDate}>
                                  <Moment format="DD/MM/YYYY">{post.created_at}</Moment>
                                  </p>
                                  <p className={classes.postText}>{post.content.substring(0, 444) + "..."}</p>
                              </div>
                           </article>
                            </Link>
                           )}))
                }}
            </Query>
  
        </div>
        </section>
   ) 
}

export default Posts