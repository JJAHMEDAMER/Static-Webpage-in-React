function NavBar() {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </nav>
  );
}

var root = document.getElementById("root");
ReactDOM.render(<NavBar />, root);

const NavBarJSX = (
  <nav>
    <h1>Navbar JSX</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </nav>
);

var root = document.getElementById("root");
ReactDOM.render(NavBarJSX, root);
