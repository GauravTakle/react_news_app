import React, { Component } from 'react'

export class NewsItem extends Component {
    // eslint-disable-next-line
    // constructor(){
    //     super();
       
    // }  


  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: ""}}>
            <img src={!imgUrl?"https://c.ndtvimg.com/2023-03/hh8teoq8_virat-kohli-and-rahul-dravid-bcci_625x300_14_March_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
