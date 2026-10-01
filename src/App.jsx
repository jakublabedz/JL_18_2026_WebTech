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
import StudentCard from './components/StudentCard.jsx'
import Book from "./components/Book.jsx"
import Produkt from "./components/Product.jsx"

//Wszystkie zadania są w App copy.jsx tutaj jest tylko ostatnie zadanie

function App() {

  function showProduct(name) {
    console.log("Wybrano produkt: " + name);
  }

  function selectProduct(name) {
  console.log("Wybrany produkt: " + name);
}
  return (
    <>
      <Produkt
        name="Laptop"
        price = {10}
        onSelect={showProduct}
        onSelect2 = {selectProduct}
      />
    </>
  )
}



export default App