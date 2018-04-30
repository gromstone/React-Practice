import React, {Component} from 'react';

export default class Article extends Component {
    
    render() {
        return (
            <article role="article" id="photo-card" className="cover-card cover-card--white">
                <h2 className="photo-title">Photography</h2>
                <p>article content</p>
                <div className="info-card" data-card="photo-card">
                    <h3 className="sub-heading">Photo info</h3>
                    <p>Te mea error singulis intellegam. Aliquando vituperatoribus ne cum, dolore vivendo vix in. Constituto neglegentur mei eu. Vis sanctus erroribus concludaturque an, nec oportere pericula at.</p>
                    <p>Te mea error singulis intellegam. Aliquando vituperatoribus ne cum, dolore vivendo vix in. Constituto neglegentur mei eu. Vis sanctus erroribus concludaturque an, nec oportere pericula at.</p>
                </div>
            </article>
        );
    }
    
}