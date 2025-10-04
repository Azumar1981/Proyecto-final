import React from 'react';
import OffersDisplay from '../../components/OffersDisplay/OffersDisplay'; 

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenido a nuestra página de inicio</h1>
      <p>Aquí encontrarás las últimas novedades y las mejores ofertas.</p>
      <OffersDisplay />
    </div>
  );
}
