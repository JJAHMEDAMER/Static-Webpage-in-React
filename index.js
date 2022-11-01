var StaticPage = () => (
  <div>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was First released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has Well Over 100k stars on git hub</li>
      <li>Is maintained by facebook</li>
      <li>Powers thousands of apps</li>
    </ul>
  </div>
);

const NavBar = () => (
  <nav className="nav-bar">
    <img className="logo" src="./React-icon.png"  />
    <h1>React</h1>
    <ul className="nav-items">
      <li>React Course - Project 1</li>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer>
    <p>2022 JJAHEMDAMER Development. All Rights Reserved</p>
  </footer>
);

const App = () => (
  <div>
    <NavBar />
    <StaticPage />
    <Footer/>
  </div>
);

var root = document.getElementById("root");
ReactDOM.render(<App />, root);
