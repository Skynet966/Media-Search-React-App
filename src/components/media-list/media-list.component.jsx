import React from 'react';

import { ImageCard } from "../cards/image-card/image-card.component";

import './media-list.styles.sass'

export const MediaList = props =>{
    let jsx='';
    if(props.data.search_for==='image')
        jsx=props.data.images.map(image=><ImageCard key={image.id} src={image.images.fixed_width.url}/>)
    else if(props.data.search_for==='audio')
        jsx=props.data.audios.map(audio=>console.log('audios'))
    else if(props.data.search_for==='video')
        jsx=props.data.videos.map(video=>console.log('videos'))
    console.log(props)
    if(props.data.loading==='init')
        return <div className="text-center mx-auto"><h4>Search something intresting...</h4></div>;
    else if(props.data.loading&&props.data.length===0)
        return '';
    else{
        return (
            <div className="col-lg-12">
                <div className="masonry">{jsx}</div>
            </div>
        )
    }
}