/**
 * Development.jsx
 * Created by Lizzie Salita 7/10/19
 */

import React from 'react';

import * as redirectHelper from 'helpers/redirectHelper';

export default class Development extends React.Component {
    constructor(props) {
        super(props);

        this.clickedLink = this.clickedLink.bind(this);
    }

    clickedLink() {
        redirectHelper.showRedirectModal('https://github.com/fedspendingtransparency/usaspending-website/wiki');
    }
    render() {
        return (
            <div
                className="about-section-wrapper"
                id="about-development">
                <h2 className="about-section-title">
                    Development and Releases
                </h2>
                <div className="about-section-content">
                    <p>
                        
                    </p>
                </div>
            </div>
        );
    }
}
