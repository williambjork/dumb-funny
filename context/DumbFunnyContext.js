import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

const DumbFunnyContext = createContext();

const DumbFunnyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.docs.map((doc) => console.log(doc.data));
    };

    getUsers();
  }, []);

  return (
    <DumbFunnyContext.Provider value={{posts, users}}> {children} </DumbFunnyContext.Provider>
  )
};

export { DumbFunnyContext, DumbFunnyProvider };
