import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillBagXFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useStateContext } from '../context/StateContext';

const Canceled = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect( ()=> {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, []);

    return (
        <div className='success-wrapper'>
            <div className='cancel'>
                <p className='icon'>
                    <BsFillBagXFill />
                </p>
                <h2>Your order is cancelled</h2>
                
                <p className='description'>
                    If you have any questions, please email
                    <a className='email' href='mailto:waelmanai96@gmail.com'>
                        waelmanai96@gmail.com
                    </a>
                </p>
                <Link href='/'>
                    <button className='btn' width="300px" type='button'>
                        Continue Shopping
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Canceled;