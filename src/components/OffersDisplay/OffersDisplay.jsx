// src/components/OffersDisplay/OffersDisplay.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; // <-- 'getDocs' ahora está incluido
import { db } from '../../firebaseConfig';
import styles from './OffersDisplay.module.css';

// El resto de tu código de componente...

export default function OffersDisplay() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Ofertas"));
        const offersList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setOffers(offersList);
      } catch (err) {
        console.error("Error fetching offers: ", err);
        setError("No se pudieron cargar las ofertas. Por favor, inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <p>Cargando ofertas...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div className={styles.offersContainer}>
      <h2>Ofertas Destacadas</h2>
      <div className={styles.offersGrid}>
        {offers.length > 0 ? (
          offers.map(offer => (
            <div key={offer.id} className={styles.offerCard}>
              <img src={offer.imageUrl} alt={offer.title} className={styles.offerImage} />
              <div className={styles.offerContent}>
                <h3 className={styles.offerTitle}>{offer.title}</h3>
                <p className={styles.offerDescription}>{offer.description}</p>
                <button className={styles.offerButton}>Ver oferta</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay ofertas disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}