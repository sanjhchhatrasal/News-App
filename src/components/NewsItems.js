import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style= {{ display: 'flex', justifyContent: 'flex-end',  right: '0' }}>
        <span className="position-absolute   badge rounded-pill bg-success" >{source}</span>
        </div>
          <img src={imageUrl?imageUrl:"https://cdn.arstechnica.net/wp-content/uploads/2016/12/Lenovo-Legion-Y520-Laptop-with-Lenovo-Y-Gaming-Headset-760x380.png" } className="card-img-top" alt="..." />
                     
          <div className="card-body"> 
            
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-outline-dark btn-sm "
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
