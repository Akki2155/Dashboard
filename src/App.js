import React ,{ useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, Themeset} from './components'
import { Ecommerce, Orders, Calendar, ColorPicker, Customer, Kanban, Editor, ColorMapping, Employees, Area, Pie, Bar, Financial, Pyramid,Stacked, Lines } from './pages'
import { useStateContext }  from './contexts/ContextProvider';
import './App.css'

const App = () => {
  const { activeMenu, ThemeSettings, setThemeSettings, CurrentColor , CurrentMode} = useStateContext();
  
  return (
      <div className={CurrentMode === 'Dark' ? 'dark' : ''}>
         <BrowserRouter>
             <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000'}}>
                   <TooltipComponent content="Settings" position="top">
                     <button type='button' onClick={()=> setThemeSettings(true)}
                           className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background:CurrentColor, borderRadius : '50%'}}>
                         <FiSettings/>
                     </button>
                   </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                       <Sidebar/>
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar/>
                     </div>
                )}
                <div className={
                   activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2' 
                }>
                
                <div className='fixed md:static bg-main-bg  dark:bg-main-dark-bg navbar w-full'>
                    <Navbar/>
                 </div>
              <div>
                {ThemeSettings && <Themeset/>}
                  <Routes>
                      <Route path='/' element={<Ecommerce/>}/>
                      <Route path='/ecommerce' element={<Ecommerce/>}/>


                      <Route path='/orders' element={<Orders/>}/>
                      <Route path='/employees' element={<Employees/>}/>
                      <Route path='/customers' element={<Customer/>}/>

                      <Route path='/kanban' element={<Kanban/>}/>
                      <Route path='/editor' element={<Editor/>}/>
                      <Route path='/calendar' element={<Calendar/>}/>
                      <Route path='/color-picker' element={<ColorPicker/>}/>

                      <Route path='/line' element={<Lines/>}/>
                      <Route path='/area' element={<Area/>}/>
                      <Route path='/pie' element={<Pie/>}/>
                      <Route path='/pyramid' element={<Pyramid/>}/>
                      <Route path='/color-mapping' element={<ColorMapping/>}/>
                      <Route path='/stacked' element={<Stacked/>}/>
                  </Routes>
              </div>
              </div>
             </div>
         </BrowserRouter>
      </div> 
  )
}

export default App
