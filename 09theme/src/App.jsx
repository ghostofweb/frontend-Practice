import { useState ,useEffect} from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from '../components/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
const [themeMode,setThemeMode] = useState("light")

const lightTheme = () =>{
  setThemeMode("light")
}

const darkTheme = () =>{
  setThemeMode("dark")
}

//actual change in the theme

useEffect(() => {
  const htmlElement = document.querySelector('html');
  htmlElement.classList.remove('light', 'dark'); // Remove both classes first
  htmlElement.classList.add(themeMode); // Add the current theme mode
}, [themeMode]);




  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
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
