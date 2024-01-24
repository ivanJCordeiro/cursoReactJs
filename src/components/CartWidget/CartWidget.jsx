import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { count } = useContext(CartContext);

  return (
    <Link to="/checkout" className='flex text-white text-decoration-none'>
      <img src="../icon/carritoimg.png" alt= "" style={{ width: '40px', height: '40px', borderRadius: '80px' }} />
      {count}
    </Link>
  );
};

export default CartWidget;