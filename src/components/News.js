import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

    rowstyle = {
      display : 'flex' ,
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


    constructor(props){
        super(props);
        console.log("this is news constructor");

        this.state = {
            articles: [],
            loading : true,
            page : 1,
        }
        document.title = this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)+" - NewsApp";
    }
    async updated(pageNo){
       this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&page=${pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
          articles: parsedData.articles, 
          totalResults: parsedData.totalResults, 
          loading:false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updated(1);
    }


    fetchMoreData = async ()=>{
      console.log(this.props.apiKey);
        let url=`https://newsapi.org/v2/top-headlines?apiKey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({page: this.state.page +1});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles: this.state.articles.concat(parsedData.articles), 
          totalResults: parsedData.totalResults, 
        });
    }
    
  render() {
    return (
      <>
        <h3 className='text-center my-4'>{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} News - Top HeadLines In India</h3>
       {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >


        <div className="container my-4">
            <div className="row my-6" style={this.rowstyle}>
                {this.state.articles?.map((element)=>{
                    return <div className="col-md-3 my-3" style={this.colStyle} key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} brand={element.source.name}
                    mode={this.props.mode} modeReverse={this.props.modeReverse} handleMode={this.props.handleMode}/>
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
       
        
      </>
    )
  }
}

export default News