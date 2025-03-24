import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axiosInstance'
import { Link } from 'react-router-dom';
import "../styles/SubmissionsPage.css";

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
    <div className='HomeContainer'>
      <div className='HomeTextBox'>
        <p>PARTICIPE DA NOSSA NOVA <br /> JORNADA DE <span>TECNOLOGIA</span></p>
      </div>

      <div>
        <div className='TitulosHome'>
          <div>
            <h2>Call4Papers</h2>
            <p>Segue abaixo todas as solicitações <br /> que recebemos até o momento</p>
          </div>
          <Link to="/create"><button>Criar Nova Submissão</button></Link>
        </div>

        <div className='tableBox'>
          <table>
            <thead>
              <tr>
                <th>TÍTULO</th>
                <th>RESUMO</th>
                <th>AUTOR</th>
                <th>E-MAIL</th>
              </tr>
            </thead>
            <tbody>
            {submissions.map((submission) => (
              <tr key={submission.Id}>
                <td>{submission.Title}</td>
                <td>{submission.Resume}</td>
                <td>{submission.AuthorName}</td>
                <td>{submission.AuthorEmail}</td>
                <Link to={`/edit/${submission.Id}`}><button className='editButton'>Editar</button></Link>
                <button onClick={() => handleDelete(submission.Id)} className='deleteButton'>Excluir</button>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmissionsPage;
