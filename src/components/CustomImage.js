import React from 'react'

function CustomImage(props) {
    return (
        <div className="custom-image" style={{paddingTop: props.pt}}>
            <img src={props.imgSrc} alt="" />
        </div>
    )
}

export default CustomImage