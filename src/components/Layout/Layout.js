import React, { useEffect } from 'react';
import Main from '../Main/Main'
import Nav from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Post from '../Posts/Post/Post'
import Posts from '../Posts/Posts'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import useIsInViewport from 'use-is-in-viewport'



function Layout(){
    
    
        const [isLandingInViewport, landingRef] = useIsInViewport()
        const [isNewsInViewport, newsRef] = useIsInViewport({threshold: 45})
        const [isAppInViewport, appRef] = useIsInViewport({threshold: 45})
        const [isGalleryInViewport, galleryRef] = useIsInViewport({threshold: 15})
        const [isAboutInViewport, aboutRef] = useIsInViewport({threshold: 15})


return(
        <Router>
    <Nav landingVisible={isLandingInViewport} newsVisible={isNewsInViewport} appVisible={isAppInViewport} galleryVisible={isGalleryInViewport} aboutVisible={isAboutInViewport} />

            <div>
                    <Switch>
                        <Route path="/" exact render={(props) => (
                            <Main 
                            fLandingRef={landingRef}
                            fNewsRef={newsRef} 
                            fAppRef={appRef} 
                            fGalleryRef={galleryRef} 
                            fAboutRef={aboutRef} 
                            />
                        )}/>
                        <Route path="/novosti" exact component={Posts} /> 
                        <Route path="/novosti/:id" exact component={Post}/>
                    </Switch>
                <Footer />
            </div>
        </Router>

)
}


export default Layout