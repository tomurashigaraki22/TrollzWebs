import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Featured from './pages/Featured'
import Sales from './pages/Sales'
import Accessories from './pages/Accessories'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Favourites from './pages/Favourites'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Wishlist from './pages/WishList'
import Register from './pages/Register'
import { ShopContextProvider } from './context/shop-context'
import Product from './pages/Product'
import SearchPage from './pages/Search'
import CategoryPage from './pages/Categories'
import LatestCollection from './pages/LatestColl'
import LatestGadgets from './pages/LatestGadgets'
import PrivacyPolicy from './pages/PrivacyPolicy'



const App = () => {
  return (
    <div>
        <Router>
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/featured' element={<Featured />}/>
          <Route path='/sales' element={<Sales />}/>
          <Route path='/Accessories' element={<Accessories/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='/latestgadgets' element={<LatestGadgets/>}/>
          <Route path='/latestcoll' element={<LatestCollection/>}/>
          <Route path='/categories' element={<CategoryPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product />}>
          </Route>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/search/:query' element={<SearchPage />}>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='*' element={<h1>404 Error</h1>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App