import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import Pagination from '../components/Pagination';

const ListPage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get(`https://api.example.com/destinos?page=${currentPage}`)
      .then(response => {
        setItems(response.data.destinos);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [currentPage]);

  return (
    <div>
      <h1>Destinos</h1>
      <div className="item-list">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setPage={setCurrentPage} />
    </div>
  );
};

export default ListPage;
