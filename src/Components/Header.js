import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import logo from '../../src/Assets/Logo.svg';
import { Link } from 'react-router-dom';
import volvoImage from '../../src/Assets/volvo.png';
import serce from '../../src/Assets/serceOgloszenie.svg';


const navigation = [
  { name: 'Strona Główna', href: '#' },
  { name: 'Dodaj Ogłoszenie', to: '/AddAnnouncement' },
  { name: 'Ulubione', to: '/Favorite' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='container'>
      <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <img className="h-8 w-auto" src={logo} alt=""></img>
      </a>
    </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 pr-2">Zaloguj<span aria-hidden="true"></span></Link>
    <Link to="/register" classNameName="text-sm font-semibold leading-6 text-gray-900">Zarejestruj<span aria-hidden="true"></span></Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Zaloguj<span aria-hidden="true"></span></Link>
    <Link to="/register" classNameName="text-sm font-semibold leading-6 text-gray-900">Zarejestruj<span aria-hidden="true"></span></Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="flex justify-center pt-28 ">
    <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
  </div>
  
  <div className="flex justify-center mt-4 ">
  <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
  </div>

  <div className="flex justify-center mt-4">
  <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
  </div>

  <div className="flex justify-center mt-4">
  <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
  </div>

  <div className="flex justify-center mt-4">
  <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
  </div>

  <div className="flex justify-center mt-4">
  <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
  </div>

  <div className="flex justify-center mt-4 pb-4">
  <div className="w-9/12 h-50 rounded-lg bg-black flex justify-between ">
      <div className="w-1/4 text-white m-2.5 " ><img src={volvoImage}/></div>
        <div className = "text-white w-7/12 m-0 py-2.5"><h2 className='text-3xl'> Volvo XC 90 D5 2019</h2><p className='text-xl'>98 000 km, 1 969 cm3, 235 KM, Diesel</p></div>
      
      
        <div className = "text-white w-56 flex float-right py-2.5 " ><button className='flex pr-2.5'><img className='w-7 h-9' src={serce}/></button><p className='text-3xl py-0.5'>25000 PLN</p></div>

    </div>
    </div>
      </div>
  )
}
