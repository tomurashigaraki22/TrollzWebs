import React, { useEffect, useState } from "react";
import { BASE_TEST } from "../../config";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemsBox from "../components/ItemsBox";
import jwt_decode from 'jwt-decode'

const Product = () => {
    const { productId } = useParams();
    console.log(productId)
    const [item, setitem] = useState(null);
    const [email, setemail] = useState()
    const [token, settoken] = useState(null)

    useEffect(() => {
        async function getItem(id) {
            try {
                const token = localStorage.getItem('token')
                const {email} = jwt_decode(token)
                setemail(email)
                const response = await fetch(`${BASE_TEST}/getItem/${id}/${email}`, {
                    method: 'POST'
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Message: ', data.message)
                    setitem(data.message[0]);
                } else {
                    console.error('Failed to fetch item details');
                }
            } catch (error) {
                console.error(error);
            }
        }
        getItem(productId);
    }, [productId]);

    return (
        <div>
            <Navbar />
            {item !== null ? (
                    <ItemsBox key={item.id} email={email}id={item.id} caption={item.caption} price={item.price} currency={item.currency} img={item.img} />
                
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Product;
