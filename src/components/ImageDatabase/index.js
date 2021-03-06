import React from 'react'
import Images from '../Images';

import Animals from '../../Images/Animals.png';
import EatingOut from '../../Images/EatingOut.png';
import Fitness from '../../Images/Fitness.jpg';
import Thrill from '../../Images/Thrill.png';

import {Link} from 'react-router';
import './index.css';

class ImageDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : [
        {
          url: Animals,
          label: "Animals"
        }, {
          url: EatingOut,
          label: 'Food'
        },
        {
          url: Fitness,
          label: 'Fitness'
        },
        {
          url: Thrill,
          label: 'Thrill'
        }]

    }
  }

  render () {
    return (
      <div className="tags-container" >
        {this.state.images.map(function(image, i) {
         return (
           <div className='tag-container'>
             <Link to={`/search/${image.label}`}>
             <div className='image-label'>{image.label}</div>
             <Images key={i} source={image.url}></Images>
             </Link>
           </div>
         )})}
      </div>
    )}
}
//<Link to={`/search/${image.label}`/}>
export default ImageDatabase;

/*{this.state.images.map(function(image, i) {
 return <Images key={i} source={image}/>
})}*/

//style={{backgroundImage: url(this.props.imageURL)}}
