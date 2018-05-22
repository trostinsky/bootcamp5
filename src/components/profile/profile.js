import React from 'react';
import PropTypes from 'prop-types';
import "./profile.css";

const Profile = (props) => {
  return (
      <div>
          <h4>{props.name}</h4>
          <img src={props.image} alt="#" className="full-image"/>
          <div>
              <button onClick={props.onChangeImage}>Change</button>
              <button onClick={props.onDelete}>Delete</button>
              <button onClick={props.onDefaultImage}>Default image</button>
          </div>
      </div>
  )
};

Profile.propTypes = {
    image: PropTypes.string,
    onChangeImage: PropTypes.func,
    onDelete: PropTypes.func,
};

Profile.defaultProps = {
    image: '/noimg.png',
    onChangeImage: () => {},
    onDelete: () => {}
};

export default Profile;