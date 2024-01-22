import { useContext, useState } from "react";
import {Button} from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {
    const [countItem, setCountItem] = useState (1);

    const {count , setCount} = useContext(CartContext);

    const handleAdd = () =>{
        setCountItem(countItem + 1);
    }

    const handleRemove = () =>{
        setCountItem(countItem - 1) ;
    }

    const handleAddProductToCart = () => {
        const productExist = count.find(item => item.id === productId)

        if(productExist){
            setCount(count.map(item=> item.id === productId ?{
                ...item, quantity: item.quantity + countItem
            } : item))
        } else { setCount([...count, {id:productId, quantity: countItem}])}

        setCountItem(1);
    }



    return (
      <div>
        <div style = {{width: "50%" , display: "flex" , alignItems : "center", justifyContent : "space-between" , margin :"auto" , paddingBlock :"20px"}}>
            <Button onClick={handleRemove} className='btn-warning' variant="primary">-</Button>
            <span>{countItem}</span>
            <Button onClick={handleAdd} className='btn-warning' variant="primary">+</Button>
        </div>
        <Button onClick={() =>{ setCount (count + countItem),  setCountItem(1),handleAddProductToCart}} style = {{display:"flex" , alignItems: "center", margin:"auto"}} className='btn-warning' variant="primary">Añadir al carrito</Button>
        </div>
        )
    }

export default ItemCount