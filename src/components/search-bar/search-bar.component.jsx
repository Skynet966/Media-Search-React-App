import React from 'react';
const updateCategory=(e)=>{
    if(e.target.checked);
}
export const SearchBar = props =>(
    <div className="input-group shadow-sm bg-white rounded p-3 mx-auto my-5 row">
        <input type="Search" className="form-control shadow-none bg-light w-auto" onKeyDown={e=>e.key==='Enter'?props.handleChange(e):''} name="search_text" placeholder="Search here..." aria-describedby="searchbar"/>
        <div className="input-group-append mx-auto">
            <div className="input-group-text">
                <input id="image" type="radio" onChange={updateCategory} onClick={props.handleChange} name="search_for" value="image" aria-label="Image search" defaultChecked/>
                <label className="m-0 pl-1 font-italic font-weight-bold" htmlFor="image">Image</label>
            </div>
            <div className="input-group-text">
                <input id="audio" type="radio" onChange={updateCategory} onClick={props.handleChange} name="search_for" value="audio" aria-label="Audio search"/>
                <label className="m-0 pl-1 font-italic font-weight-bold" htmlFor="audio">Audio</label>
            </div>
            <div className="input-group-text">
                <input id="video" type="radio" onChange={updateCategory} onClick={props.handleChange} name="search_for" value="video" aria-label="Video search"/>
                <label className="m-0 pl-1 font-italic font-weight-bold" htmlFor="video">Video</label>
            </div>
        </div>
    </div>
)