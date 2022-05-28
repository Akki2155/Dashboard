import React from 'react';
import {Button, Header} from '../components';

import { HtmlEditor, Image, Inject, LINK, Link , QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Editor = () => {

  const {CurrentColor} = useStateContext();

  return (
    <div className='m-2 mt-14 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Apps" title="Editor"/>
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]}/>
      </RichTextEditorComponent>
      <div className=" mt-5 flex justify-center">
      <Button
        text="Submit Text"
        color="white"
        bgColor={CurrentColor}
        borderRadius="10px"
      />
      </div>
    
    </div>
  )
}

export default Editor