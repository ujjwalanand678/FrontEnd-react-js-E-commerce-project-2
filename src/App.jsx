import "./App.css";
import Navbar from "./Components/Navbar";
import Routing from "./Routes/Routing";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Analytics/>
    </>
  );
}

export default App;
