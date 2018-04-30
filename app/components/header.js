import React, {Component} from 'react';

export default class Header extends Component {
    
    render() {
        return (
            <header role="banner" id="web-card" className="cover-card cover-card--hero">
                <h1 class="brand-name hero-headline">Deviate Design</h1>
                <p>by David Rodriguez</p>
            </header>
        );
    }
    
}