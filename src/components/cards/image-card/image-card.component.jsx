import React from 'react';
import './image-card.styles.sass'
export const ImageCard = props => (
    <img src={props.src} alt="random" className="image-thumbnail"/>
)