import React from 'react';

import Header from './header';
import Footer from './footer';

import style from '../../css/main.scss';

console.log(JSON.stringify(scssStyles));

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                
                <Footer/>
            </div>
        );
    }
}