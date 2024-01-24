import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useEffect } from "react";
import { getCategoriesProduct } from "../hooks/useCategory";


export const Category = () => {
    useEffect(() => {
        document.title = `${category}`
    });

    const {category} = useParams();

    const {categoryProducts} = getCategoriesProduct(category);

  return (
    <ItemListContainer productsData = {categoryProducts}/>
  )
}
