import {Route} from 'react-router-dom'
import Home from './components/PublicPart/Home/Home'
import Login from './components/PublicPart/Login/Login'
import Register from './components/PublicPart/Register/Register'
import About from './components/PublicPart/About/About'
import News from './components/PublicPart/News/News'
import Layout from './components/PublicPart/Layout'
import PrivateLayout from './components/PublicPart/PrivatePart/PrivateLayout'
import Post from './components/PublicPart/PrivatePart/Post/Post'
import Categories from './components/PublicPart/PrivatePart/Categories/Categories'
import Search from './components/PublicPart/PrivatePart/Search/Search'
import Account from './components/PublicPart/PrivatePart/Account/Account'
import Logout from './components/PublicPart/PrivatePart/Logout/Logout'
import ChangeDetails from './components/PublicPart/PrivatePart/Account/ChangeDetails/ChangeDetails'
import ShowNewPost from './components/PublicPart/PrivatePart/Post/ShowNewPost/ShowNewPost'
import ShowCurrentPost from './components/PublicPart/PrivatePart/Categories/CategoryPosts/ShowCurrentPost/ShowCurrentPost'
import CategoryPosts from './components/PublicPart/PrivatePart/Categories/CategoryPosts/CategoryPosts'
import AccountCard from './components/PublicPart/PrivatePart/Account/AccountCard/AccountCard'
import ShowUserPosts from './components/PublicPart/PrivatePart/Account/ShowUserPosts/ShowUserPosts'

export const AppRouter = () => {
    return (
        <div>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/about" component={About}/>
            <Route path="/news" component={News}/>
            <Route path="/layout" component={Layout}/>
            <Route path='/post' component={Post}/>
            <Route path='/categories' component={Categories}/>
            <Route path='/search' component={Search}/>
            <Route path='/account' component={Account}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/privatePage' component={PrivateLayout}/>  
            <Route path='/changeDetails' component={ChangeDetails}/>
            <Route path='/showNewPost' component={ShowNewPost}/>
            <Route path='/showCurrentPost' component={ShowCurrentPost}/>
            <Route path='/showCategoryPosts' component={CategoryPosts}/>
            <Route path='/accountCard' component={AccountCard}/>
            <Route path='/showUserPosts' component={ShowUserPosts}/>
        </div>
    );
};


