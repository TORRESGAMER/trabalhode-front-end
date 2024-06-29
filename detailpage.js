import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailPage = ({ match }) => {
  const [item, setItem] = useState(null);
  const itemId = match.params.id;

  useEffect(() => {
    axios.get(`https://api.example.com/destinos/${itemId}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.destino}</h1>
      <img src={item.imageUrl} alt={item.destino} />
      <p>Valor: {item.valor}</p>
      <p>Check-in: {item.checkin}</p>
      <p>Descrição: {item.descricao}</p>
      {/* Adicione outras informações do item conforme necessário */}
    </div>
  );
};

export default DetailPage;
