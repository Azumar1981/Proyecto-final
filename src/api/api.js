import { db } from '..firebase/firebaseConfig'; // Asegúrate que la ruta sea correcta desde tu estructura de carpetas
import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  updateDoc, 
  deleteDoc,
  getDoc 
} from "firebase/firestore";


export const getItems = async (collectionName) => {
  try {
    const collectionRef = collection(db, collectionName);
    const data = await getDocs(collectionRef);
    const items = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return items;
  } catch (error) {
    console.error(`Error al obtener items de ${collectionName}: `, error);
    return [];
  }
};


export const createItem = async (collectionName, newItem) => {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, newItem);
    return { ...newItem, id: docRef.id };
  } catch (error) {
    console.error(`Error al crear item en ${collectionName}: `, error);
    return null;
  }
};


export const updateItem = async (collectionName, id, updatedItem) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await updateDoc(itemDoc, updatedItem);
    return true;
  } catch (error) {
    console.error(`Error al actualizar item en ${collectionName}: `, error);
    return false;
  }
};

export const deleteItem = async (collectionName, id) => {
  try {
    const itemDoc = doc(db, collectionName, id);
    await deleteDoc(itemDoc);
    return true;
  } catch (error) {
    console.error(`Error al eliminar item en ${collectionName}: `, error);
    return false;
  }
};

export const getItemById = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No se encontró el documento!");
      return null;
    }
  } catch (error) {
    console.error(`Error al obtener el item ${id}: `, error);
    return null;
  }
};