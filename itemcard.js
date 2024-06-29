import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.destino} />
      <h2>{item.destino}</h2>
      <p>Valor: {item.valor}</p>
      <p>Check-in: {item.checkin}</p>
      <Link to={`/details/${item.id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default ItemCard;
