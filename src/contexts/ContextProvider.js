import React, { createContext , useContext , useState} from 'react';


const StateContext= createContext();


const intialState={
    chat: false,
    cart: false,
    userProfile:false,
    notification:false,
}



export const ContextProvider=({children})=> 
{
 const [activeMenu, setActiveMenu]=useState(true);
 const [isClicked, setisClicked] = useState(intialState);
 const [screenSize, setscreenSize] = useState(undefined);
 const [CurrentColor, setCurrentColor] = useState('#03C9D7');
 const [CurrentMode, setCurrentMode] = useState('Light');
 const [ThemeSettings, setThemeSettings] = useState(false);

const setMode= (e)=> {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode',e.target.value);
    setThemeSettings(false);
}

const setColor= (color)=> {
    setCurrentColor(color);
    localStorage.setItem('colorMode',color);
    setThemeSettings(false);
}

 const handleClick =( clicked) => {
       setisClicked({...intialState, [clicked]:true})
 }

 return(
        <StateContext.Provider value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setisClicked,
                handleClick,
                screenSize,
                setscreenSize,
                CurrentColor,
                CurrentMode,
                ThemeSettings, 
                setThemeSettings,
                setMode,
                setColor
            }}>
                    {children}
            </StateContext.Provider>
 );
} 

export const useStateContext = () => useContext(StateContext);