import React, { useEffect, useState } from 'react';
import Main from '../Main/Main'
import Nav from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Post from '../Posts/Post/Post'
import Posts from '../Posts/Posts'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function Layout(){

   

return(
        <Router>
        

            <Nav />
            <div>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/novosti" exact component={Posts} /> 
                    <Route path="/novosti/:id" exact component={Post}/>
                </Switch>
            </div>
            <Footer />
        </Router>

)
}


export default Layout