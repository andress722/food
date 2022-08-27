import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './components/Header'
import NotFound from './pages/Err'
import Product from './pages/Products'
import Footer from './components/Footer'
import OurMenu from './pages/Ourmenu'
import Blog from './pages/Blog'
const routes = () =>{
    return(
        <BrowserRouter> 
            <Header/>  
            <Routes>   
                <Route exact path='/' element={<Home/>} />

                <Route exact path='/contato' element={<Contact/>} />
                <Route path='*' element={<NotFound/>} />
                <Route path='/produto/:id' element={<Product/>} />
                <Route path='/menu' element={<OurMenu/>} />
                <Route path='/blog' element={<Blog/>} />

            </Routes>  
            <Footer/>
        </BrowserRouter>
    )
}

export default routes