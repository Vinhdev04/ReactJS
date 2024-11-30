function Navigation() {
  const handleClick = () => {
    alert("You clicked");
  };

  const handleValue = (e) => {
    console.log(e.target.value);
  };

  const handleFocus = (e) => {
    e.target.classList.toggle("active");
  };

  const handleBlur = (e) => {
    e.target.classList.remove("active");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    console.log(e.target[1].value);
  };

  return (
    <>
      <div className="box">
        <div>Navigation Menu</div>
        <form onSubmit={handleSubmit}>
          <button onClick={handleClick}>Click me</button>
          <input
            type="text"
            onChange={handleValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </form>
      </div>
    </>
  );
}
export default Navigation;
