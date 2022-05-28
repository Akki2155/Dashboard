import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Inject,Sort,Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid  } from '../data/dummy';
import { Header } from '../components';


const Employees = () => {
  return (
    <div className='m-2 mt-14 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Pages" title="Employees"/>
      <GridComponent
         dataSource={employeesData}
         allowPaging
         allowSorting
         toolbar={['Search']}
         width="auto"
         >
        <ColumnsDirective>
          {employeesGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Sort, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees