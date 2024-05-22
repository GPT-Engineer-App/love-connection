import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profiles from "./pages/Profiles.jsx";
import Navigation from "./components/Navigation.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/admin" element={<Admin />} />
        <Route exact path="/" element={<Index />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
