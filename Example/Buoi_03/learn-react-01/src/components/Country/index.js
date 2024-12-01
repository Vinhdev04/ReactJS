import { countries } from "../../Variables/country";
import "./Country.css";
// # render country
function getCountry() {
  console.log(countries);

  // # xử lý render mảng lồng trong mảng và 1 phần tử ko có dữ liệu thỏa mãn (a.x || [])
  return (
    <>
      {/* <ul>
        <li>
          <span>Viet Nam</span>
          <ul>
            <li>Ha Tinh</li>
            <li>Ha Noi</li>
          </ul>
        </li>
      </ul> */}

      <ul className="list">
        {(countries || []).map((country) => (
          <li className="list__item" key={country.id}>
            <span className="list__country">{country.name}</span>
            {(country.city || []).map((item) => (
              <ul className="list__info">
                <li className="list__city" key={item.id}>
                  {item.city}
                </li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
}
export default getCountry;
