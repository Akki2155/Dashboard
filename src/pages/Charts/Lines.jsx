import React from 'react';
import { ChartsHeader, LinesChart } from '../../components';
import { Header } from '../../components';


const Lines = () => {

 

  return (
    <div className='m-2 mt-14 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Charts" title="Inflation Rate"/>
      <div className='w-full'>
          <LinesChart/>
      </div>
    </div>
  )
}

export default Lines