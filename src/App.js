import "./style/app.css";
import Header from "./components/header/header";
import Github from "./components/search/github";

function App() {
  return (
    <div className="father">
      <Header />
      <Github />
    </div>
  );
}

export default App;
