import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";
import Footer from "./components/Footer.jsx";
import Student from "./components/Student.jsx";
import InfoBox from "./components/InfoBox.jsx";
import Navigation from "./components/Navigation.jsx"
import CourseCard from "./components/CourseCard.jsx"
import Technologies from "./components/Technologies.jsx"

function App() {

  const specyfikation = {
    language: "JavaScript",
    type: "Fronend"
  }

  const features = [
    "Komponenty",
    "JSX",
    "Props"
  ]

  return (
    <>
    <Header/>
     <Technology name="React" category="frontend" hours="39" specyfikacja={specyfikation} ft={features}/>
     <Technology name="JS" category="backend" hours="25"  specyfikacja={specyfikation} ft= {features}/>
     <Technology name="CSS" category="frontend" hours="2"  specyfikacja={specyfikation} ft= {features}/>
     <Technology name="Ja chce do domu" category="choroba psychiczna" hours="&infin;"  specyfikacja={specyfikation} ft= {features}/>
    </>
  )
}



export default App