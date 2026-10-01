function Product({ name, price, onSelect, onSelect2 }) {
  return (
    <section>
      <button onClick={() => onSelect(name)}>
        Pokaż produkt
      </button>
      <button onClick={() => onSelect2(name)}>
        Pokaż produkt
      </button>
    </section>
  );
}

export default Product;