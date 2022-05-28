import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const Change= (args) =>(
      document.getElementById('preview').style.backgroundColor=args.currentValue.hex
)

const ColorPicker = () => {
  return (
    <div className='m-2 mt-14 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Apps" title="Color Picker"/>
    <div className='text-center'>
      <div id='preview'/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div className='mr-10'>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
                  id="inline-palette"
                  mode="Palette"
                  modeSwitcher={false}
                  inline
                  showButtons={false}
                  change={Change}
            />
          </div>
          <div className='ml-10'>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
                  id="inline-picker"
                  mode="Picker"
                  modeSwitcher={false}
                  inline
                  showButtons={false}
                  change={Change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker