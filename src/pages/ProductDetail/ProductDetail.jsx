import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import styles from './ProductDetail.module.css';
import ProductList from '../../components/productList/ProductList';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newStock, setNewStock] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("ID de producto no encontrado.");
        setLoading(false);
        return;
      }
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProduct({ id: docSnap.id, ...productData });
          setNewStock(productData.stock);
        } else {
          setError("El producto no existe.");
        }
      } catch (err) {
        console.error("Error fetching product: ", err);
        setError("No se pudo cargar el producto. Por favor, inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleUpdateStock = async () => {
    if (newStock < 0) {
      alert("El stock no puede ser menor a cero.");
      return;
    }
    const productRef = doc(db, "productos", id);
    await updateDoc(productRef, { stock: newStock });
    setProduct(prevProduct => ({ ...prevProduct, stock: newStock }));
    setIsEditing(false);
  };

  const handleDeleteProduct = async () => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      const productRef = doc(db, "productos", id);
      await deleteDoc(productRef);
      navigate('/');
    }
  };

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p className={styles.errorMessage}>{error}</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <img src={product.imagen} alt={product.nombre} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h2>{product.nombre}</h2>
        <p>Precio: ${product.precio}</p>
        <div>
          {isEditing ? (
            <>
              <label htmlFor="stock">Stock:</label>
              <input
                id="stock"
                type="number"
                value={newStock}
                onChange={(e) => setNewStock(parseInt(e.target.value))}
              />
              <button onClick={handleUpdateStock}>Guardar</button>
            </>
          ) : (
            <>
              <p>Unidades disponibles: {product.stock}</p>
              <div className={styles.buttonGroup}>
                <button onClick={() => setIsEditing(true)} className={styles.editButton}>Editar</button>
                <button onClick={handleDeleteProduct} className={styles.deleteButton}>Eliminar Producto</button>
              </div>
            </>
          )}
        </div>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          ← Volver al listado
        </button>
      </div>
    </div>
  );
}