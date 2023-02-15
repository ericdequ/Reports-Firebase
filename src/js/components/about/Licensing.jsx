/**
 * Licensing.jsx
 * Created by Joanthan Hill 07/22/19
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/actions/modal/modalActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Licensing = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(showModal('https://github.com/fedspendingtransparency'));
    return (
        <div
            className="about-section-wrapper"
            id="about-licensing">
            <h2 className="about-section-title">
                Licensing
            </h2>
            <div className="about-section-content">
                <p>
                    
                    <Link to="/db_info">
                        noted on the homepage
                    </Link>.
                </p>
                <p>
                    
                </p>
            </div>
        </div>
    );
};

export default Licensing;
