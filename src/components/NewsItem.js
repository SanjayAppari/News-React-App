import React from 'react'

const NewsItem = (props)=> {
        //deconstructoring 
        let { title, description, imgUrl, newsUrl, author, date ,brand,mode} = props;

        return (
            <div className={`card bg-${mode} shadow-lg rounded`} style={{ width: "18rem", height: "390px" }}>
                <span style={{marginLeft:'-10px',zIndex:'1'}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {brand.slice(0,10)}...
                </span>
                <img src={imgUrl ? imgUrl : "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="} className="card-img-top" alt="..." height="150px" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} On { ((date)) }</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More </a>
                </div>
            </div>
        )
}

export default NewsItem
