import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Hero from './components/Hero';
import FollowCursor from "./stylings/FollowCursor";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./context/ProtectedRoutes";
import ViewQuiz from "./components/ViewQuiz";
import Create from "./components/Create"
import CreateQuiz from "./components/CreateQuiz";
import CreateQuestion from "./components/CreateQuestion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<ProtectedRoutes><Hero /></ProtectedRoutes>} />
            <Route path="/viewquiz/:id" element={<ProtectedRoutes><ViewQuiz /></ProtectedRoutes>} />
            <Route path="/create" element={<ProtectedRoutes><Create /></ProtectedRoutes>} />
            <Route path="/create-quiz" element={<ProtectedRoutes><CreateQuiz /></ProtectedRoutes>} />
            <Route path="/create-question" element={<ProtectedRoutes><CreateQuestion /></ProtectedRoutes>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      
      <FollowCursor />
    </div>
  );
}

export default App;