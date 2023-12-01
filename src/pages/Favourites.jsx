import React from 'react'
import Navbar from '../components/Navbar'
import '../product.css'
const Favourites = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div class="productsection">
            <div class="productinnerbox"></div>
            <div class="namediv">
                <div class="namesect">
                    <p class="whiliststatus">Product Name here</p>
                    <p class="whilistadd">$764.00</p>
                </div>
                <div class="addtocart">
                    <div class="addtocartinner">
                        <button id="plus">+</button>
                        <p id="num">3</p>
                        <button id="minus">-</button>
                    </div>
                    <aside>Remove</aside>
                </div>
            </div>    
            
            <div class="checkoutdiv">
                <p class="Checkoutheading">Checkout</p>
                <div class="incheckoutdiv">
                    <p>Subtotal</p>
                    <p>$768.00</p>
                </div>

                <div class="incheckoutdiv">
                    <p>Shipping</p>
                    <p>$12.00</p>
                </div>
                <hr />
                <div class="incheckoutdiv bolder">
                    <p>Total</p>
                    <p>$780.00</p>
                </div>


                <button class="Checkoutbutton">Checkout</button>
            </div>
        </div>
    </main>
      
      
      </div>
  )
}

export default Favourites