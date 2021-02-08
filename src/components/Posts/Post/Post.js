import React from 'react';
import classes from "./Post.module.css"
import Query from "../../Queries/Query"
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import {EmailIcon,FacebookIcon,EmailShareButton,ViberIcon, FacebookShareButton, LinkedinIcon, TwitterIcon, ViberShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share'
import POSTS_QUERY from '../../Queries/Posts/postQuery';

const Post = () =>{

    const scrollOnLoad = () =>window.scrollTo(0, 0) 
    let { id } = useParams()

    return(
    <Query query={POSTS_QUERY} id={id}>
        { ({ data: {post} })=>{
            /* console.log(posts) */
            scrollOnLoad()
            return(
    
    <article className={classes.postArticle}>
        <div className={classes.titleHolder}>
            <img src={post.image.url}/>
            <div className={classes.imgOverlay}>
            <div>
            {post.categories.map((category)=>{
                return  <p className={classes.postCat}>{category.name}</p>
            })}
            </div>
                <h1>{post.title}</h1>
{/*                 <p><Moment format="DD/MM/YYYY">{post.created_at}</Moment></p>
 */}            </div>
        </div>
        <p className={classes.articleText}>
            <ReactMarkdown source={post.content} />
         
        </p>
        <h2>PODIJELITE ČLANAK!</h2>
        <div className={classes.shareContainer}>
            {/* TODO: postavi content, subject etc za share */}
            <EmailShareButton url={window.location.href} ><EmailIcon/></EmailShareButton>
            <FacebookShareButton url={window.location.href} ><FacebookIcon/></FacebookShareButton>
            <LinkedinShareButton url={window.location.href} ><LinkedinIcon/></LinkedinShareButton>
            <TwitterShareButton url={window.location.href} ><TwitterIcon /></TwitterShareButton>
            <ViberShareButton url={window.location.href} ><ViberIcon /></ViberShareButton>

        </div>
   </article>
  
   
   )} }</Query>
   
   )}
export default Post