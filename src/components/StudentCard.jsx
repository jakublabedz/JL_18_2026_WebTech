function StudentCard(props) {
  return (
  <>
    <article className="student-card">
        <h2>{props.student.firstName} {props.student.lastName}</h2>
        <p>{props.className}</p>
        <p>{props.gradesAverage}</p>
    </article>
  </>
  );
  
}

export default StudentCard;