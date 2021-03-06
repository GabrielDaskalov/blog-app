import React, { Component } from 'react';
import NEWS_APIKEY from '../../../constants'
import axios from 'axios'
import Article from './Article/Article';
import Spinner from '../../../spinners/Spinner';

import './News.css'

class News extends Component {

    constructor()
    {
        super()
        this.state=
        {
            articles: {},
            showContent: false
        }
    }

    componentDidMount()
    {
        console.log("Component did mount")
        this.getArticles();
        console.log(this.state.articles)
    }

    getArticles=()=>
    {
        console.log("getting articles")
 
            axios.get(NEWS_APIKEY)
            .then((res)=>
            {
                console.log(`first operation in axios executed ${typeof(res.data.data)}`)
                this.setState({articles: res.data.data})
                this.setState({showContent: true})
            })
            .catch(function(err) {
                console.log("err", err);
              })
       

        console.log(this.state.articles)
            
    }

    getFirstFiveArticles()
    {
        console.log("getting first five")
        let tempArticles = this.state.articles;
        let fiveRandomArticles =[];
       
        for(let i = 0; i< 6;i++)
        {
            let randomNum = Math.floor(Math.random()*21);
           
            while(fiveRandomArticles.includes(tempArticles[randomNum]))
            {
                randomNum=Math.floor(Math.random()*21);
            }
            fiveRandomArticles.push(tempArticles[randomNum])

        }

        return fiveRandomArticles.map((article, key)=>
            <div key={key} className="news-articles">
                <Article article={article}/>
            </div>
        )
    }

    render() {
        const output= !this.state.showContent ? <Spinner/> : this.getFirstFiveArticles();

        return (
            <div className="bodyNews">
                {output}
            </div>
        );
    }
}

export default News;