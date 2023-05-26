import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

    rowstyle = {
      display : 'flex' ,
      // alignItems : 'center',
      // justifyContent : 'spaceAround',
    }
    colStyle ={
      display : 'flex' ,
      alignItems : 'center',
      justifyContent : 'center',
    }
    static defaultProps = {
      country : 'in',
      pageSize : 8,
      category : 'general'
    }

    static propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string,
    }


    constructor(){
        super();
        console.log("this is news constructor");

        this.state = {
            articles: [],
            loading : false,
            page : 1,
            
        }
    }
    async updated(pageNo){
        let url=`https://newsapi.org/v2/top-headlines?apiKey=4531844ce5e14a2397bd579dc199e22d&country=${this.props.country}&category=${this.props.category}&page=${pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false});
    }

    async componentDidMount(){
        this.updated(1);
    }


    handleNextClick = async ()=>{
            this.updated(this.state.page+1);
            this.setState({page:this.state.page+1});
            console.log(this.state.page);
    }
    
    handlePrevClick = async ()=>{
        this.updated(this.state.page-1);
        this.setState({page:this.state.page-1});
        console.log(this.state.page);
    }
  render() {
    return (
      <div className='container my-4' >
        <h3 className='text-center'>{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} News - Top HeadLines In India</h3>
        <div className="container d-flex  justify-content-between ">
            <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handlePrevClick}> &larr; Previous </button>
            <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults/8)} className='btn btn-primary' onClick={this.handleNextClick}> Next &rarr; </button>
        </div>
        <hr />
       {this.state.loading && <Spinner/>}
        <div className="row my-6" style={this.rowstyle}>
            {!this.state.loading && this.state.articles?.map((element)=>{
                return <div className="col my-3" style={this.colStyle} key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} brand={element.source.name}
                 mode={this.props.mode} modeReverse={this.props.modeReverse} handleMode={this.props.handleMode}/>
                </div>
            })}
        </div>
       
        
      </div>
    )
  }
}

export default News
