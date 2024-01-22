import { useState, useEffect } from "react";
import { getProductByCategory } from "../services/productsService";
import { collection , getDocs , doc , getDoc, getFirestore } from "firebase/firestore";


/**
 * @name useGetProducts
 * @description Costum hook para traer productos 
 * @returns {Array}
 */

export const useGetProducts = (collectionName = "products") => {
    const [productsData , setProductsData] = useState([]);

    useEffect(() => {
      setTimeout(() => {
      const db = getFirestore();

      const productsCollection = collection (db, collectionName);

      getDocs(productsCollection).then ((snapshot) =>{
        setProductsData(snapshot.docs.map(((doc) =>({id: doc.id, ...doc.data()}))))
      })
        }, 2000);
      } , []);

      return { productsData }
};

export const useGetProductById = (collectionName="products", id) => {

  const [productData , setProductData] = useState({});

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, collectionName, id)

    getDoc(docRef).then((doc) => {
      setProductData({id: doc.id, ...doc.data()})
    })
  } , [id]);

  return { productData }
};


export const useGetProductByCategory = (collectionName = " categories ") => {

  const [productsData , setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const productsCategory = collection (db, collectionName);

    getDocs(productsCategory).then ((snapshot) =>{
      setProductsData(snapshot.docs.map(((doc) =>({id: doc.id, ...doc.data()}))))
    })
  } , [collectionName]);

  return { productsData }
};