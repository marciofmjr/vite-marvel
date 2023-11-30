import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "./pages/Home";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/hero" element={<Hero />}></Route>
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
