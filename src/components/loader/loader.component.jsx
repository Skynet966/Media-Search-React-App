import React from 'react';
import {ReactComponent as Reactloader} from '../loader/loader.svg'
export const Loader = (props) => {
    if(props.loading===true)
        return (<div className="col-md-12"><Reactloader/></div>)
    else
        return ''
}