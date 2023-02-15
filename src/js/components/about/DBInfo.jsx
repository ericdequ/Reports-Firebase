/**
 * DBInfo.jsx
 * Created by Destin Frasier 04/20/2017
 **/

import React from 'react';

import * as MetaTagHelper from 'helpers/metaTagHelper';
import Footer from 'containers/Footer';
import Header from 'containers/shared/HeaderContainer';

import MetaTags from '../sharedComponents/metaTags/MetaTags';

require('pages/dbInfo/dbInfoPage.scss');

export default class DBInfo extends React.Component {
    render() {
        return (
            <div className="usa-da-db-info">
                <MetaTags {...MetaTagHelper.dbInfoPageMetaTags} />
                <Header />
                <main id="main-content">
                    <div className="article-wrapper">
                        <h1>This Website utilizes the USA Spending Data Base </h1>
                        <p>
                          
                        </p>
                        
                    </div>
                </main>
                <Footer pageName="DBInfo" />
            </div>
        );
    }
}
