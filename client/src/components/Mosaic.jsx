import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  horizontalOrder: false,
}

class Mosaic extends React.Component {
  render() {
    const { photoArray, onClick } = this.props;

    const images = photoArray.map(photos => {
      const photosToBeDisplayed = photos.phototags.slice(0, 10);
      return photosToBeDisplayed.map((photo, index) => {
        return (
          <li id="carousel-tile">
            <img src={photo.photoURL} key={index} data-id={index} onClick={onClick}></img>
          </li>
        )
      });
    });

    return (
      <Masonry options={masonryOptions}>
        {images}
      </ Masonry>
    )
  }
}

export default Mosaic;