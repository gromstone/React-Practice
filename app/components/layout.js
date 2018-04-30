import React, {Component} from 'react';

import Header from './header';
import DevCard from './cards/dev_card';
import PhotoCard from './cards/photo_card';
import ResumeCard from './cards/resume_card';
import Footer from './footer';

export default class Layout extends Component {
    render() {
        
        return (
            <div>
                <Header/>
                
                <div id="welcome" className="banner banner--welcome">
                    <p></p>
                    <h2>WELCOME TO DEVIATE DESIGN</h2>
                    <p>Learn more</p>
                </div>
                
                <DevCard/>
                
                <div className="wcag banner banner--tags">
                    <h2>WCAG</h2>
                    <p>The web for everyone</p>
                </div>
                
                <PhotoCard/>
                
                <div className="photo banner banner--tags">
                    <p>The web for everyone</p>
                </div>
                
                <ResumeCard/>
                
                <Footer/>
            </div>
        );
    }
}