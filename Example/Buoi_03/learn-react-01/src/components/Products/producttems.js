function RenderItem(props) {
  const { item } = props;
  return (
    <>
      <div className="product__item">
        <img src={item.thumbnail} alt={item.title} />
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
    </>
  );
}
export default RenderItem;
