import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

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

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?apiKey=e45bd67418874ed2832a56156a3d01ca&country=${this.props.country}&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false});
    }


    handleNextClick = async ()=>{
            let url=`https://newsapi.org/v2/top-headlines?apiKey=e45bd67418874ed2832a56156a3d01ca&country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({articles: parsedData.articles});
    
            
            this.setState({page:this.state.page+1,loading:false});
    
            console.log(this.state.page);
        
    }
    
    handlePrevClick = async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?apiKey=e45bd67418874ed2832a56156a3d01ca&country=${this.props.country}&category=${this.props.category}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});

        this.setState({page:this.state.page-1,loading:false});
        console.log(this.state.page);
    }
  render() {
    return (
      <div className='container my-4' >
        <h3 className='text-center'>News - Top HeadLines In India</h3>
        <div className="container d-flex  justify-content-between ">
            <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handlePrevClick}> &larr; Previous </button>
            <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults/8)} className='btn btn-primary' onClick={this.handleNextClick}> Next &rarr; </button>
        </div>
        <hr />
       {this.state.loading && <Spinner/>}
        <div className="row my-6">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-3 my-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
       
        
      </div>
    )
  }
}

export default News