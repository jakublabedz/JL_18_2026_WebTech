function Student(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>Klasa - {props.className}</p>
        <p>Specjalizacja - {props.specialization}</p>
        <p>Wiek - {props.age}</p>
    </div>
  );
}

export default Student;
