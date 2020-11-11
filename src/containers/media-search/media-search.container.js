import React from 'react';
import { LoadMore } from '../../components/load-more/load-more.component';
import { Loader } from '../../components/loader/loader.component';
import { MediaList } from '../../components/media-list/media-list.component';
import { SearchBar } from '../../components/search-bar/search-bar.component';
export default class MediaSearch extends React.Component{
    constructor(){
        super();
        this.state={
            search_text:'',
            search_for:'image',
            limit:10,
            length:0,
            loading:'init',
            images:[],
            audios:[],
            videos:[]
        }
    }
    handleChange(e){
        const {name,value}=e.target;
        this.setState({[name]:value,limit:10,length:0},()=>{
            const searchFor=this.state.search_for;
            if(searchFor==='image'){
                this.setState({images:[]});
                this.fetchImageData();
            }else if(searchFor==='audio')
                console.log('audios')
            else if(searchFor==='video')
                console.log('videos')
        });
    }
    loadMore(){
        this.setState({limit:this.state.limit+10},()=>this.fetchImageData());
    }
    fetchImageData(){
        this.setState({loading:true});
        setTimeout(()=>{
            fetch(`https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=${this.state.search_text}&limit=${this.state.limit}`)
            .then(response=>response.json())
            .then(response=>{
                if(this.state.length<response.data.length)
                    this.setState({images:response.data,loading:false,length:response.data.length});
                else if(response.data.length===0)
                    this.setState({images:response.data,loading:'init'});
                else
                    this.setState({images:response.data,loading:'done'});
                console.log(response.data);
            });
        },500)
        // https://itunes.apple.com/search?term=${searchValue}&limit=20
        
    }
    render(){
        return (
            <>
                <SearchBar handleChange={this.handleChange.bind(this)}/>
                <MediaList data={this.state}/>
                <Loader loading={this.state.loading}/>
                <LoadMore loading={this.state.loading} handleLoadMore={this.loadMore.bind(this)}/>
            </>
        )
    }
}