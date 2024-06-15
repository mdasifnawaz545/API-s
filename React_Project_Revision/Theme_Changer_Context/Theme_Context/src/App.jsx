import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

   const [theme, setTheme] = useState("light");
   const lightTheme = () => {
      setTheme((prev) => (prev = "light"))
   }
   const darkTheme = () => {
      setTheme((prev) => (prev = "dark"))

      
   }

   useEffect(()=>{
         const html=document.querySelector('html');
         html.classList.remove("light","dark");
         html.classList.add(theme);
   },[theme])

   return (
      <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
         <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
               <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
               </div>

               <div className="w-full max-w-sm mx-auto">
                  <Card />
               </div>

            </div>

         </div>
      </ThemeProvider>
   )
}

export default App
