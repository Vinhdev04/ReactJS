// import react-icon
import { GoCheckCircleFill } from "react-icons/go";
function Content(props) {
  console.log(props);
  console.log(props.message);

  // # sử dụng destructuring
  const { message, active } = props;

  return (
    <>
      <div className="box">
        {message}
        <GoCheckCircleFill style={{ color: "green", fontSize: "20px" }} />
      </div>
    </>
  );
}
export default Content;
