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
  <nav>
    <img src="./React-icon.svg.png" width = "30"/>
    <h1>React</h1>
    <ul>
      <li>React Course - Project 1</li>
    </ul>
  </nav>
);

const App = () => (
  <div>
    <NavBar />
    <StaticPage />
  </div>
);

var root = document.getElementById("root");
ReactDOM.render(<App />, root);
