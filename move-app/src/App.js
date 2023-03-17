import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Celebrity from "./pages/Celebrity";
import Movies from "./pages/Movies";
import Notfound from "./pages/Notfound";
import Tv from "./pages/Tv";
import Home from "./pages/Home";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";


function App() {
  return (
  <div className="root-wrap">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movies/>}/>
        <Route path="/movie/:title" element={<MovieDetail/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/person" element={<Celebrity/>}/>
        <Route path="/*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
