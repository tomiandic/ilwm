import React from 'react';
import Query from "../Queries/Query"
import classes from './Posts.module.css'
import postImg from '../../assets/grad.jpg'
import POSTS_QUERY from '../Queries/Posts/postsQuery'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'

function Posts(){

    const scrollOnLoad = () =>window.scrollTo(0, 0) 
   return(
       <section className={classes.postsSection}>
           <div className={classes.postsTitle}>
               <img src={postImg}/>
               <h1>Novosti</h1>
           </div>
        <div className={classes.postsContainer}>
            <Query query={POSTS_QUERY}>
                {({data: {posts}})=>{
                
                    return(posts.map((post)=>{

                       scrollOnLoad()
                       return(
                           <Link key={post.id} to={"novosti/" +  post.id}>
                           <article  className={classes.post}>
                              <img src={post.image.url} />
                              <div className={classes.postDetails}>
                               {/*    <p className={classes.postDate}>
                                  <Moment format="DD/MM/YYYY">{post.published_at}</Moment>
                                  </p> */}
                                  {post.categories.map((category)=>{
                                      return  <p className={classes.postCat}>{category.name}</p>
                                })}<br />
                                  <h2>{post.title}</h2><br />
                                  
                                  <p className={classes.postText}>{post.content.substring(0, 244) + "..."}</p>
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