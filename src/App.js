import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchSubmit = async (term) => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID sJWAo_CBj7ScD-JsBH5mRtsuvXiA6BpLz5X0gU--Fw0',
        },
      });
      console.log('API Response:', response.data);
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching the images: ", error);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <SearchBar onSearch={onSearchSubmit} />
      {loading ? <p>Loading...</p> : <ImageList images={images} />}
    </div>
  );
};

export default App;
