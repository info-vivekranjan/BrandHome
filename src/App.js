import "./App.css";
import { Routes } from "./Components/Routes";
import { useContext } from "react";
import { BrandHomeContext } from "./Context/BrandHomeContextProvider";

function App() {
  const { theme } = useContext(BrandHomeContext);

  return (
    <div className="App" style={{ backgroundColor: theme.bodyBackground }}>
      <Routes />
    </div>
  );
}

export default App;
