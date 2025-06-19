import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routing from "./Routes/Routing";
const Analytics = React.lazy(() => import("@vercel/analytics/react"));

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <React.Suspense fallback={null}>
        <Analytics />
      </React.Suspense>
    </>
  );
}

export default App;
