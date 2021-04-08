import React from 'react';

const Photo = ({image}) => {
    return (
        <div className='photo'>
            <img src={image.url} alt={image.name}/>
        </div>
    )
}

export default Photo;