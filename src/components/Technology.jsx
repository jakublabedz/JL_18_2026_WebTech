function Technology(props) {
  return (
  <>
    <section>
      <h4>Technologia - {props.name}, Kategoria - {props.category}, Liczba godzin - {props.hours}, {props.specyfikacja.language}, {props.ft[0]}</h4>
    </section>
  </>
  );
  
}

export default Technology;