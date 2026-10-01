function Book(props) {
  return (
    <div>
        <p>{props.title}</p>
        <p>Autor: {props.author}</p>
    </div>
  );
}

export default Book;
