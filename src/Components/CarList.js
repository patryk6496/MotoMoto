import React from 'react';
import volvoImage from '../../src/Assets/volvo.png';
import serce from '../../src/Assets/serceOgloszenie.svg';

export default function Example() {
  return (
    <>
      {/* <div className="flex justify-center pt-28 ">
    <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between car-list ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage} alt='carImage'/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div> */}

      <div className="flex justify-center pt-28 px-4 sm:px-0">
        <div className="w-full sm:w-11/12 md:w-9/12 h-auto rounded-lg bg-black flex flex-col sm:flex-row justify-between car-list ">
          <div className="flex items-center w-full sm:w-1/4 text-white m-2.5 overflow-hidden">
            <img
              className="w-full max-w-full h-32 sm:h-auto object-contain object-center"
              src={volvoImage}
              alt="carImage"
            />
          </div>
          <div className="text-white w-full sm:w-7/12 m-0 py-2.5 flex flex-col justify-center items-center sm:items-start">
            <h2 className="text-2xl sm:text-3xl text-center sm:text-left">
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4 sm:px-0">
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
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4 sm:px-0">
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
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4 sm:px-0">
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
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4 sm:px-0">
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
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4 sm:px-0">
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
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 px-4 sm:px-0">
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
              {' '}
              Volvo XC 90 D5 2019
            </h2>
            <p className="text-lg sm:text-xl text-center sm:text-left">
              98 000 km, 1 969 cm3, 235 KM, Diesel
            </p>
          </div>
          <div className="text-white w-full sm:w-56 flex justify-center sm:float-right py-2.5">
            <button className="flex pr-2.5">
              <img className="w-7 h-9" src={serce} alt="heartIcon" />
            </button>
            <p className="text-3xl py-0.5 text-center sm:text-left">
              25000 PLN
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
