import React, { useState } from 'react';
import axiosInstance from '../services/axiosInstance';
import { useNavigate } from 'react-router-dom';

const CreateSubmissionPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const navegate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newSubmission = {
      Title: title,
      Resume: resume,
      AuthorName: authorName,
      AuthorEmail: authorEmail,
    };

    axiosInstance
      .post('/createSubmission', newSubmission)
      .then(() => {
        navegate('/'); // Redireciona de volta para a lista
      })
      .catch((error) => {
        console.error('Erro ao criar submissão', error);
      });
  };

  return (
    <div className='CreateBox'>
      <h1>Call<span>4</span>Papers</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Resumo</label>
          <textarea
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            required
            className='ResumeInput'
          />
        </div>
        <div>
          <label>Nome do Autor</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email do Autor</label>
          <input
            type="email"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Criar Submissão</button>
      </form>
    </div>
  );
};

export default CreateSubmissionPage;
