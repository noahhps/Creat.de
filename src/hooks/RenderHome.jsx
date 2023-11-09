import { useState, useEffect, createContext, useContext } from 'react';
import Home from '../components/Home'

const ReturnHomeContext = createContext();

export default function ReturnToHome() {
  const [isReturnHome, setIsReturnHome] = useState(false);

  function RenderHome() {
    setIsReturnHome(!isReturnHome)
  }

  return(
    <ReturnHomeContext.Provider value = {{ isReturnHome, RenderHome }}>
        {<Home/>}
    </ReturnHomeContext.Provider>
  )

    
}

export function useRenderHomeState() {
    const context = useContext(ReturnHomeContext);
    if (!context) {
        throw new Error('use renderhomestate must be used within returnhomecontextprovider')
    }
    return context;
}


