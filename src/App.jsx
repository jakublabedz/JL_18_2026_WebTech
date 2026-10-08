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
import Card from "./components/Card.jsx"


const technologies = [
{ id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
{ id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
{ id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
{ id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
{ id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
{ id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
{ id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
{ id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
{ id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
];

function App() {

  return (
    <>
      <div className="container">
        {technologies.map((card, index) => (
          <Card
            key={index}
            card={card}
            
          />
        ))}
      </div>
    </>
  )
}



export default App