import { productItems } from "../../Variables/product";
import RenderItems from "./producttems";
import "./Prouduct.css";
function Products() {
  console.log(productItems);

  // # render product
  return (
    <>
      <div className="product__list">
        {productItems.map((item) => (
          <RenderItems item={item} key={item.id} />
        ))}
        ;
      </div>
    </>
  );
}
export default Products;
