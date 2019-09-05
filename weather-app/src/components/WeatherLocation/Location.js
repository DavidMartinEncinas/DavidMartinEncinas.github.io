import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({place}) => (
    <div className="locationCont">
        <h1>{place}</h1>
    </div>
);

Location.propTypes = {
    place: PropTypes.string.isRequired,
};

export default Location;