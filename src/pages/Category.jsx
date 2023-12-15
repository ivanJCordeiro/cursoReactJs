import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProductByCategory } from "../hooks/useProducts";
import { useEffect } from "react";


export const Category = () => {
    useEffect(() => {
        document.title = `${id}`
    });

    const {id} = useParams();

    const {productsData} = useGetProductByCategory(id);

  return (
    <ItemListContainer productsData = {productsData}/>
  )
}
