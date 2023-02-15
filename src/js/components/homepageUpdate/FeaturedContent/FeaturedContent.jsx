/**
 * FeaturedContent.jsx
 * Created by Brian Petway 08/22/22
 */

import React from 'react';
import { FlexGridCol } from 'data-transparency-ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Analytics from 'helpers/analytics/Analytics';
import CardContainer from "../../sharedComponents/commonCards/CardContainer";
import CardHero from "../../sharedComponents/commonCards/CardHero";
import CardBody from "../../sharedComponents/commonCards/CardBody";


const FeaturedContent = () => {
    const trackFeaturedCovidLink = () => Analytics.event({
        category: 'Homepage',
        action: 'Link',
        label: 'covid-19 featured content'
    });
    const trackFeaturedResourcesLink = () => Analytics.event({
        category: 'Homepage',
        action: 'Link',
        label: 'resources featured content'
    });
    return (<>
        <section className="featured-content__section">
            <div className="featured-content__heading">
                <div className="featured-content__heading--background">
                    <FontAwesomeIcon className="featured-content__heading--icon" icon="bullhorn" />
                </div>
                <span>Featured Content</span>
            </div>
            
        </section>
    </>
    );
};

export default FeaturedContent;
