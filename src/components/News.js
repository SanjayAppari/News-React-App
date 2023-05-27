import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=>{

    const rowstyle = {
      display : 'flex' ,
    };

    const colStyle ={
      display : 'flex' ,
      alignItems : 'center',
      justifyContent : 'center',
    };

    const [articles,setArticles] = useState([]);
    // const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);
    
    
    const updated = async (pageNo)=>{
        props.setProgressFun(10);
        let url=`https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${pageNo}&pageSize=${props.pageSize}`;
        // setLoading(true);
        let data = await fetch(url);
        props.setProgressFun(30);
        let parsedData = await data.json();
        props.setProgressFun(70);
        setArticles(parsedData.articles);
        // setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.setProgressFun(100);
    }


    useEffect(()=>{
        document.title = props.category.charAt(0).toUpperCase()+props.category.slice(1)+" - NewsApp";
        updated(1);
    });

    const fetchMoreData = async()=>{
        console.log(props.apiKey);
        let url=`https://newsapi.org/v2/top-headlines?apiKey=${props.apiKey}&country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    
    return (
      <>
        <h3 className='text-center my-4' style={{marginTop:'90px'}}>{props.category.charAt(0).toUpperCase()+props.category.slice(1)} News - Top HeadLines In India</h3>
       {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >


        <div className="container my-4">
            <div className="row my-6" style={rowstyle}>
                {articles?.map((element)=>{
                    return <div className="col-md-3 my-3" style={colStyle} key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} brand={element.source.name}
                    mode={props.mode} modeReverse={props.modeReverse} handleMode={props.handleMode}/>
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
       
        
      </>
    )
}

export default News

News.defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general'
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
}