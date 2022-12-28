import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

const DumbFunnyContext = createContext();

const DumbFunnyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));

      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              breif: doc.data().breif,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));

      setProducts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              brand: doc.data().brand,
              category: doc.data().category,
              price: doc.data().price,
              title: doc.data().title
            },
          };
        })
      );
    };
    getProducts();
  }, []);

  return (
    <DumbFunnyContext.Provider value={{ posts, users, products }}>
      {" "}
      {children}{" "}
    </DumbFunnyContext.Provider>
  );
};

export { DumbFunnyContext, DumbFunnyProvider };
