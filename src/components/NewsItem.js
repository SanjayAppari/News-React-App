import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        //deconstructoring 
        let {title,description, imgUrl, newsUrl} = this.props;

        return (
            <div>
                <div className="card" style={{width:"18rem",height:"340px"}}>
                    <img src={imgUrl?imgUrl:"https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="} className="card-img-top" alt="..." height="150px"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} className="btn btn-sm btn-primary">Read More </a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem