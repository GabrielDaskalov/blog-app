import React, { Component } from 'react';
import Category from './Category/Category';
import CategoryPosts from './CategoryPosts/CategoryPosts';
import './Categories.css'

class Categories extends Component {

    constructor(props)
    {
        super(props)

        this.state=
        {
            showCategories: true,
            categoryToShow: ""
        } 
    }


    showPostsForCategory=(category)=>
    {
        this.setState({categoryToShow: category})
        this.setState({showCategories: false})
        
    }

    render() {
        const outputCategories = this.state.showCategories ?
        <div className="bodyCategories">
        <ul className="categories">
            <div className="box-1">
            <div>
                    <ul>
                            <Category value="Finance" func={this.showPostsForCategory}/>
                    </ul>
            </div>
            <div>
                    <ul>
                        <Category value="Health" func={this.showPostsForCategory}/>
                    </ul>
            </div>
            <div>
                    <ul>
                            <Category value="Politics" func={this.showPostsForCategory}/>
                    </ul>
            </div>
            </div>
            <div className="box-2">
            <div>
                    <ul>
                        <Category value="Science" func={this.showPostsForCategory}/>
                    </ul>
            </div>
            <div>
                    <ul>
                        <Category value="History" func={this.showPostsForCategory}/>
                    </ul>
            </div>
            <div>
                    <ul>
                        <Category value="Sport" func={this.showPostsForCategory}/>
                    </ul>
                </div>
            </div>
            <div className="box-3">
                <div>
                    <ul>
                        <Category value="Tourism" func={this.showPostsForCategory}/>
                    </ul>
                </div>
                <div>
                    <ul>
                        <Category value="Art" func={this.showPostsForCategory}/>
                    </ul>
                </div>
                <div>
                    <ul>
                        <Category value="Other" func={this.showPostsForCategory}/>
                    </ul>
                </div>
            </div>
            
        </ul>
        </div> :
        <CategoryPosts value={this.state.categoryToShow}/>

        
       
        return (
            <div>
                {outputCategories}
            </div>
        );
    }
}

export default Categories;