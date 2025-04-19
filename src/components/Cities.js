import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '49805777-20bf70864af15483381970488';
const cities = ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Agadir', 'Tangier'];

function Cities() {
  const [city, setCity] = useState('');
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${city}&image_type=photo`);
    console.log(res.data.hits);
    
    setImages(res.data.hits);
  };

  return (
    <div className="container mt-4">
      <h2>Moroccan Cities</h2>
      <div className="input-group mb-3">
        <select className="form-select" onChange={(e) => setCity(e.target.value)} value={city}>
          <option value="">Choose a city</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button className="btn btn-primary" onClick={fetchImages}>Get City</button>
      </div>

      <div className="row">
        {images.map((img) => (
          <div className="col-md-4 mb-3" key={img.id}>
            <div className="card h-100">
              <img src={img.webformatURL} className="card-img-top" alt={img.tags} />
              <div className="card-body">
                <p className="card-text">{img.tags} | {img.imageWidth} x {img.imageHeight}</p>
                <button className="btn btn-primary">More Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
