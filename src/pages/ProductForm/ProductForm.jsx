import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import styles from "./ProductForm.module.css";

export default function ProductForm() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    nombre: "",
    precio: 0,
    stock: 0,
    imagen: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      
      await addDoc(collection(db, "productos"), {
        ...productData,
        precio: parseFloat(productData.precio), 
        stock: parseInt(productData.stock, 10)  
      });
      alert("¡Producto agregado exitosamente!");
      navigate('/products'); 
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
      setError("Error al agregar el producto. Por favor, revisa la consola.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Agregar Nuevo Producto</h2>
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.productForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={productData.nombre} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" value={productData.precio} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" value={productData.stock} onChange={handleChange} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="imagen">URL de la Imagen:</label>
          <input type="url" id="imagen" name="imagen" value={productData.imagen} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? "Agregando..." : "Agregar Producto"}
        </button>
      </form>
    </div>
  );
}
