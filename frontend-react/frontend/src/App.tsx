import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmissionsPage from "./components/SubmissionsPage"
import CreateSubmissionPage from './components/CreateSubmissionPage';
import EditSubmissionPage from './components/EditSubmissionPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/"  element={<SubmissionsPage />} />
        <Route path="/create" element={<CreateSubmissionPage />} />
        <Route path="/edit/:id" element={<EditSubmissionPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
