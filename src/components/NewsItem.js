import React, { Component } from 'react'

export class NewsItem extends Component{

  render( ) {
   let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='m-3'>
        <div className="card" style={{width: "18rem"}}>
  <img  src={imageUrl ? imageUrl : 'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}....</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
    }
}

export default NewsItem
