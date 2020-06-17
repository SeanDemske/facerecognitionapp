import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ box, imageUrl }) => {
    if (imageUrl)
    {
        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt="URL Error" width='500px' height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol}}></div>
                </div>
            </div>
        );
    }
    else
    {
        return (
            <p>Please Insert an Image</p>
        )
    }
}

export default FaceRecognition;