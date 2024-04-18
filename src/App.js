import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import Uploadpage from "./pages/Uploadpage";
import Header from "./components/Header";
import Audio from "./pages/Audio";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<PrivateRoute element={<Homepage />} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/upload" element={< Uploadpage />} />
            <Route path="/audio" element={< Audio />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
