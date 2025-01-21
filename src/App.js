
import './App.css';
import { NavLink, Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';
import Profile from './component/Profile';
import Wishlist from './component/Wishlist';
import Men from './component/Men';
import Women from './component/Women';
import Kid from './component/Kid';
import Living from './component/Living';
import Beauty from './component/Beauty';

function App() {
  return (
    <div >

<div className='flex justify-between px-8 py-4 fixed w-full bg-white shadow-2xl items-center border-y-4 border-slate-200'>
        <img className='h-16 w-24' src='https://www.creativefabrica.com/wp-content/uploads/2023/02/17/GS-Monogram-Logo-Graphics-61543769-1-580x387.jpg'></img>
        <div className='flex gap-8 text-2xl font-semibold'>
          <div className='group flex flex-col gap-3 items-center'>
              <NavLink to='/Men'>Men</NavLink>
              <div className=' h-1 w-12 opacity-0 bg-pink-500 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500'></div>
          </div>
          <div  className='group flex flex-col  gap-3 items-center'>
              <NavLink to='/Women'>Women</NavLink>
              <div className='h-1 w-20 bg-pink-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500'></div>
          </div>
          <div  className='group flex flex-col gap-3  items-center'>
              <NavLink to='/Kids'>Kids</NavLink>
              <div className='h-1 w-12 bg-pink-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500'></div>
          </div>
          <div  className='group flex flex-col gap-3  items-center'>
              <NavLink to='/Living'>Living</NavLink>
              <div className='h-1 w-16 bg-pink-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500'></div>
          </div>
          <div  className='group flex flex-col gap-3  items-center'>
              <NavLink to='/Beauty'>Beauty</NavLink>
              <div className='h-1 w-20 bg-pink-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 transition-all duration-500'></div>
          </div>
          
        </div>
        <div className='flex gap-0'>
          <div className='flex group flex-col items-center p-2 w-24'>
          <NavLink to='/Profile'><i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg></i></NavLink>
          <h2 className='text-lg hover:text-xl group-hover:text-pink-500 transition-all duration-200 font-semibold cursor-pointer'>Profile</h2>
          </div>
          <div className='flex group flex-col items-center p-2 w-24'>
          <NavLink to='/Wishlist'><i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg></i></NavLink>
          <h2 className='text-lg hover:text-xl group-hover:text-pink-500 transition-all duration-200 font-semibold cursor-pointer'>Wishlist</h2>
          </div>
          <div className='flex group flex-col items-center p-2 w-24'>
          <NavLink to='/Cart'><i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg></i></NavLink>
          <h2 className='text-lg hover:text-xl group-hover:text-pink-500 transition-all duration-200 font-semibold cursor-pointer'>Cart</h2>
          </div>
        </div>

      </div>
      
     

    

      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>        
        <Route path='/Profile' element={<Profile></Profile>}></Route>
        <Route path='/Wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
        <Route path='/Men' element={<Men></Men>}></Route>
        <Route path='/Women' element={<Women></Women>}></Route>
        <Route path='/Kid' element={<Kid></Kid>}></Route>
        <Route path='/Living' element={<Living></Living>}></Route>
        <Route path='/Beauty' element={<Beauty></Beauty>}></Route>
      </Routes>
    </div>
  );
}

export default App;
