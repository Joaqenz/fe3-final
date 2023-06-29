import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import {routes} from "./Utils/routes"
import PageNotFound from "./Pages/PageNotFound";
import { useTheme } from "./Context/themeContext";

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.detail} element={<Detail/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
              <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;