import {
  collection,
  getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    setDoc,
    collectionGroup,
    Timestamp,
    getFirestore,
    QuerySnapshot,
  } from "firebase/firestore";
  
  export const queryByCollection = async (col: string) => {
    const firestoreDb = getFirestore();
    // @ts-ignore
    const colRef = collection(firestoreDb, col);
  
    const snapshot = await getDocs(colRef);
  
    const docs = Array.from(snapshot.docs).map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return docs;
  };


  export const validUntilQuery = async (col: string) => {
   const firestoreDb = getFirestore();
   const d = new Date();
   let month = d.getUTCMonth() +1;
   const q = query(collection(firestoreDb, col), where("month", "==", month));

   const querySnapshot = await getDocs(q);
   const docs = Array.from(querySnapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
  };
  
  export const set = async (col: string, document: Object) => {
    const firestoreDb = getFirestore();
    await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
  };
  
  export const add = async (col: string, document: Object) => {
    const firestoreDb = getFirestore();
    // @ts-ignore
    const colRef = collection(firestoreDb, col);
  
    const docRef = await addDoc(colRef, document);
  
    return docRef;
  };
  
  export const del = async (col, id) => {
    const firestoreDb = getFirestore();
    const docRef = doc(firestoreDb, col, id);
    return await deleteDoc(docRef);
  };