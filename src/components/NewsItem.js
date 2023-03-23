import React, { Component } from 'react'

export class NewsItem extends Component {
  // eslint-disable-next-line
  // constructor(){
  //     super();

  // }  


  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "" }}>
          <img src={!imgUrl ? "https://c.ndtvimg.com/2023-03/hh8teoq8_virat-kohli-and-rahul-dravid-bcci_625x300_14_March_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "85%", zIndex : '1'}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span> </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {(new Date(date)).toLocaleString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
