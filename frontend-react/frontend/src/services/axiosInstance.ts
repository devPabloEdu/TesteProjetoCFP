import axios from 'axios';

// Configuração do Axios para o se conectar ao backend do quarkus
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/Submissions', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
