import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmissionsPage from "./components/SubmissionsPage"
import CreateSubmissionPage from './components/CreateSubmissionPage';
import EditSubmissionPage from './components/EditSubmissionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<SubmissionsPage />} />
        <Route path="/create" element={<CreateSubmissionPage />} />
        <Route path="/edit/:id" element={<EditSubmissionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
