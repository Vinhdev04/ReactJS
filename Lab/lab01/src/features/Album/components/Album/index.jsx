import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import "./style.css";
Album.propTypes = {
  album: propTypes.object.isRequired,
};

function Album(props) {
  const { album } = props;
  return (
    <div className="album">
      <div className="album__img">
        <img src={album.thumbnail} alt="{album.name}" />
      </div>
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
