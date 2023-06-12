import React, { useEffect, useState } from 'react';
import axios from 'axios';

import volvoImage from '../../src/Assets/volvo.png';
import serceP from '../../src/Assets/sercePusteOgloszenie.svg';
import serceW from '../../src/Assets/serceWypelnioneOgloszenie.svg';

export default function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  console.log(data);

  // dane do podmiany jeżeli potrzebujesz więcej
  const data2 = [...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data];
  console.log(data2);

  // wzorzec danych statycznych
  // title: 'Volvo XC 90 D5 2019',
  // description: '98 000 km, 1 969 cm3, 235 KM, Diesel',
  // price: '25000 PLN',


  const [favorites, setFavorites] = useState([]); // Stan przechowujący ulubione samochody

  const handleFavoriteClick = (carId) => {
    // Sprawdź, czy samochód jest już w ulubionych
    if (favorites.includes(carId)) {
      // Jeśli jest, usuń go z ulubionych
      setFavorites(favorites.filter(id => id !== carId));
    } else {
      // Jeśli nie ma, dodaj go do ulubionych
      setFavorites([...favorites, carId]);
    }
  };

  return (
    <>
      <div className="pt-24 pb-24">
        {data.map((car, index) => (
          <div key={index} className="flex justify-center mt-4 px-4 sm:px-0">
            <div className="w-full sm:w-11/12 md:w-9/12 h-auto rounded-lg bg-black flex flex-col sm:flex-row justify-between car-list">
              <div className="flex items-center w-full sm:w-1/4 text-white m-2.5 overflow-hidden">
                <img
                  className="w-full max-w-full h-32 sm:h-auto object-contain object-center"
                  src={volvoImage}
                  alt="carImage"
                />
              </div>
              <div className="text-white w-full sm:w-7/12 m-0 py-2.5 flex flex-col justify-center items-center sm:items-start">
                <h2 className="text-2xl sm:text-3xl text-center sm:text-left">
                  {car.marka} {car.model} {car.nazwa}
                </h2>
                <p className="text-lg sm:text-xl text-center sm:text-left">
                  {car.przebieg} km, {car.pojemnosc} cm3, {car.moc} KM {car.paliwo}
                </p>
              </div>
              <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
                <button className="flex pr-2.5" onClick={() => handleFavoriteClick(car.id)}>
                  <img className="w-7 h-9" src={favorites.includes(car.id) ? serceW : serceP} alt="heartIcon" />
                </button>
                <p className="text-3xl py-0.5 text-center sm:text-left">
                  {car.cena} PLN
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
