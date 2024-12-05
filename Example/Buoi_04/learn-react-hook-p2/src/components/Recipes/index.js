import { useEffect, useState } from "react";
import "./Recipes.scss";
function Recipes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.categories);
        setData(data.categories);
      })
      .catch((error) => {
        console.log("Error" + error.message);
      });
  }, []);
  return (
    <>
      <div className="list__category">
        {data.map((item, index) => {
          return (
            <div className="list__item" key={index}>
              <div className="list__img">
                <img src={item.strCategoryThumb} alt={item.strCategory} />
              </div>
              <div className="list__info">
                <h4 className="list__name">Category: {item.strCategory}</h4>
                <p className="list__desc">{item.strCategoryDescription}</p>
                <p className="list__id">ID: {item.idCategory}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Recipes;
