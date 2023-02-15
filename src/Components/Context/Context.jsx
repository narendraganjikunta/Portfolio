import React, { createContext, useContext, useState } from 'react'

const AppContext=createContext()
const AppProvider=({children})=>{
    const [val,newVal]=useState("")
    const [val1,setVal1]=useState("")
return <AppContext.Provider value="bar" >
    {children}
</AppContext.Provider>
}
export  {AppContext,AppProvider}
