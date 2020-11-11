import React from 'react';
import './App.css'
import MediaSearch from './containers/media-search/media-search.container';

function App(props) {
    return (
      <div className="row">
        <MediaSearch/>
      </div>
    );
}

export default App;