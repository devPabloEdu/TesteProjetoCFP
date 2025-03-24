import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance'
import { Link } from 'react-router-dom';

interface Submission {
  Id: number;
  Title: string;
  Resume: string;
  AuthorName: string;
  AuthorEmail: string;
}

const SubmissionsPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    // Carregar submissões do backend
    axiosInstance
      .get('/ListSubmissions')
      .then((response) => {
        setSubmissions(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar submissões', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    axiosInstance
      .delete(`/DeleteSubmission?Id=${id}`)
      .then(() => {
        setSubmissions(submissions.filter(submission => submission.Id !== id));
      })
      .catch((error) => {
        console.error('Erro ao excluir submissão', error);
      });
  };

  return (
    <div>
      <h1>Submissões</h1>
      <Link to="/create">Criar Nova Submissão</Link>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.Id}>
            <h3>{submission.Title}</h3>
            <p>{submission.Resume}</p>
            <p>{submission.AuthorName}</p>
            <p>{submission.AuthorEmail}</p>
            <Link to={`/edit/${submission.Id}`}>Editar</Link>
            <button onClick={() => handleDelete(submission.Id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionsPage;
