import { useEffect, useState, useParams } from "react"
import { collection, getFirestore, getDocs, query, where} from "firebase/firestore";

export const useCategory = (collectionName="categories") => {
    const [category ,setCategory] = useState([]);

    useEffect (() => {

        const db = getFirestore();
        const categoryCollection= collection(db, collectionName);

        getDocs(categoryCollection).then((snapshot) => {
            setCategory(snapshot.docs.map(doc=>({...doc.data()})))
        })
      }, []);

    return { category }
};

export const getCategoriesProduct = (category) => {
    const [categoryProducts ,setCategoryProducts] = useState([]);

    useEffect (() => {

        const db = getFirestore();
        const q = query(collection(db, "products"), where("category", "==", `${category}`));

        getDocs(q).then((snapshot) => {
            setCategoryProducts(snapshot.docs.map(doc=>({...doc.data()})))
        })
      }, [category]);

    return { categoryProducts }
};
