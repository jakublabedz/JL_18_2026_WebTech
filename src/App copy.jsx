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

function App() {

  function showTechnology(name) {
    console.log(name);
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cars = [
    { id: 1, brand: "Toyota", model: "Yaris" },
    { id: 2, brand: "Fiat", model: "126p" },
    { id: 3, brand: "Hyundai", model: "i30n" }
  ]
  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "JS",
      category: "Backend",
      hours: 31
    },
    {
      id: 3,
      name: "HTML",
      category: "Frontend",
      hours: 32
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ];

  const students = [
    { id: 1, name: "Anna", className: "4P", specialization: "Programista", age: 17 },
    { id: 2, name: "Jan", className: "4P", specialization: "Programista", age: 18 },
    { id: 3, name: "Adam", className: "4P", specialization: "Programista", age: 16 },
    { id: 4, name: "V", className: "4P", specialization: "Programista", age: 19 }
  ];

  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  return (
    <>


      {
        cars.map((car) => (
          <div key={car.id}>
            <p>Marka: {car.brand}</p>
            <p>Model: {car.model}</p>
            <hr></hr>
          </div>
        ))
      }
      {
        technologies.map((technology) => (
          <Technology
            key={technology.id}
            name={technology.name}
            category={technology.category}
            hours={technology.hours}
          />
        ))
      }
      <h1>Pierwsza wersja</h1>
      {
        students.map((student) => (
          <Student
            key={student.id}
            className={student.className}
            name={student.name}
            specialization={student.specialization}
            age={student.age}
          />
        ))
      }
      <h1>Druga werja</h1>
      {
        students.map((student) => {

          return (
            <Student
              key={student.id}
              className={student.className}
              name={student.name}
              specialization={student.specialization}
              age={student.age}
            />
          )
        })

      }
      <h1>Książki</h1>
      {
        books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))
      }

      {
        books.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
            />
          )
        })
      }
    </>
  )
}



export default App