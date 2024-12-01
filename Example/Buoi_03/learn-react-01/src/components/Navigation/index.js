function Navigation() {
  const listItem = [
    "Home",
    "Products",
    "Newlestters",
    "About",
    "Contact",
    "Projects",
  ];

  return (
    <>
      <ul>
        {listItem.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
export default Navigation;
