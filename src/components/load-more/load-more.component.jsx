import React from 'react';
export const LoadMore = props =>{
    if(props.loading==='init')
        return '';
    else if(props.loading==='done')
        return (<div className="mx-auto my-5"><button type="button" className="btn btn-outline-secondary" disabled>That's all we have</button></div>)
    else if(props.loading)
        return (<div className="mx-auto my-5"><button type="button" className="btn btn-outline-success" disabled>loading...</button></div>)
    else
        return (<div className="mx-auto my-5"><button type="button" onClick={props.handleLoadMore} className="btn btn-outline-primary">load more</button></div>)
}