const divReact = React.createElement(
  "div",
  {
    className: "post-item",
  },
  React.createElement("h2DOM", { title: "Học React tại F8" }, "Học ReactJS"),
  React.createElement("pDOM", null, "Học ReaJS từ cơ bản tới nâng cao")
);
const container = document.querySelector("#root");
const root = ReactDom.createRoot(container);
root.render(divReact);
