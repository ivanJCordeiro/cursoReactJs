import { useEffect, useState, useParams } from "react"
import { collection, getFirestore, getDocs} from "firebase/firestore";



export const useCategory = (collectionName="categories") => {
    const [category ,setCategory] = useState([]);

    useEffect (() => {

        const db = getFirestore();
        const categoryCollection= collection(db, collectionName);

        getDocs(categoryCollection).then((snapshot) => {
            setCategory(snapshot.docs.map(((doc) =>({ id: doc.id, categories: doc.data().categories}))))
        })
      }, []);

    return { category }
};
