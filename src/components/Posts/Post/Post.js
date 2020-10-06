import React from 'react';
import classes from "./Post.module.css"
import PostImg from '../../../assets/landing.jpg'
import Query from "../../Queries/Query"
import {useParams} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import {EmailIcon,
    FacebookIcon,EmailShareButton,ViberIcon, FacebookShareButton, LinkedinIcon, TwitterIcon, ViberShareButton, TwitterShareButton, LinkedinShareButton} from 'react-share'
import POSTS_QUERY from '../../Queries/Posts/postQuery';

const Post = () =>{

    let { id } = useParams()
  /*   console.log(id) */
    return(
    <Query query={POSTS_QUERY} id={id}>
        { ({ data: {post} })=>{
            /* console.log(posts) */
            return(
    <article className={classes.postArticle}>
        <div className={classes.titleHolder}>
            <img src={post.picture.url}/>
            <div className={classes.imgOverlay}>
                <h1>{post.title}</h1>
                <p><Moment format="DD/MM/YYYY">{post.created_at}</Moment></p>
            </div>
        </div>
        <p className={classes.articleText}>
            <ReactMarkdown source={post.content} />
         
        </p>
        <h2>PODIJELITE ČLANAK!</h2>
        <div className={classes.shareContainer}>
            {/* TODO: postavi content, subject etc za share */}
            <EmailShareButton><EmailIcon/></EmailShareButton>
            <FacebookShareButton><FacebookIcon/></FacebookShareButton>
            <LinkedinShareButton><LinkedinIcon/></LinkedinShareButton>
            <TwitterShareButton><TwitterIcon /></TwitterShareButton>
            <ViberShareButton><ViberIcon /></ViberShareButton>

        </div>
   </article>
  
   
   )} }</Query>
   
   )}
export default Post