import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './ProductList.module.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search');

  useEffect(() => {
    // Lógica para obtener TODOS los productos de Firebase...
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsList);
      } catch (err) {
        console.error("Error fetching products: ", err);
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>Nuestros Productos</h2>
      <div className={styles.grid}>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className={styles.card}>
              <img src={product.imagen} alt={product.nombre} className={styles.image} />
              <h3>{product.nombre}</h3>
              <p>Precio: ${product.precio}</p>
              <Link to={`/product/${product.id}`} className={styles.button}>
                Ver producto
              </Link>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}