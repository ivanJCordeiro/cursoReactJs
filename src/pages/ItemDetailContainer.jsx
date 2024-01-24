import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemCount from "../components/ItemCount/ItemCount";

export const ItemDetailContainer = () => {
  
  useEffect (()=>{
    document.title = `${productData.title}`
  });

  const { id } = useParams();

  const { productData } = useGetProductById("products" , id);

  return (
    <div className=" bg-light mx-4 my-3 rounded-3" style={{minHeight:"70vh",maxHeight:"auto"}}>
      <div key={productData.id} style={{display:"flex",justifyContent:"center"}}>
        <div>
          <img src={productData.thumbnail} style={{padding:"20px", flex:"1", borderRadius:"50px", maxHeight:"40rem", maxWidth:"30rem"}} />
        </div>  
        <div style={{paddingTop:"20px" ,paddingRight:"10px"}}>
          <h1 style={{color:"black", fontWeight:"bolder", justifyContent:"center",fontSize:"3rem", flex:"1"}}>
            {productData.title}
          </h1>
          <p style={{color:"black", fontSize:"3rem", fontWeight:"bolder"}}>
            $ {productData.price} USD
          </p>
        </div>
      </div>
      <div style={{margin:"20px", display:"flex", justifyContent:"center", border:"1px solid rgb(33, 164, 197)"}}>
        <p style={{color:"black", fontSize:"2rem"}}>
          Description:
          <br />
          {productData.description}
        </p>
      </div>
      <div style={{display:"flex" , justifyContent:"center", padding:"40px", color:"black"}}>
        <ItemCount />
      </div>
  </div>
  );
};
