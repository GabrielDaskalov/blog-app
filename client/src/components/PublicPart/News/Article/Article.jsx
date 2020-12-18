import React from 'react';
import './Article.css';

const IMAGE_NOT_FOUND ="https://www.pinclipart.com/picdir/big/51-516309_clipart-document-not-found-icon-png-download.png";

const Article=(props)=>{
    const author = props.article.author === null ? <div> No Author</div>: <div>{props.article.author}</div>

    
    const checkPicture = props.article.image === null ?
    <img src={IMAGE_NOT_FOUND} alt="empty" className="notFoundImage"></img>
    :<img src={props.article.image} alt="empty" className="image"></img>;

    const output =
    <div className="article">
        <h3 className="title">{props.article.title}</h3>
        <h4 className="author">{author}</h4>
        {checkPicture}
        <a href={props.article.url} className="link">Link</a>
        <span className="date">{props.article.published_at}</span>
    </div>
    return (
        <div>
            {output}
        </div>
    );
};

export default Article;