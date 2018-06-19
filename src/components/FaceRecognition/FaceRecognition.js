import React from 'react';

const FaceRecognition = ({ imageUrl, box }) =>{
    return( 
        <div className='center ma'>
        <div className='absolute mt2'>
        <img id='inputimage' src={imageUrl}  width='200px' height='auto' alt=''/>
        </div>
        </div>
    )
}
export default FaceRecognition;

