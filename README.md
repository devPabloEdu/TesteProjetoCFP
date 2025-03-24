## Call4Papers - projeto de teste The developer's conference
![Language](https://img.shields.io/badge/JAVA-orange) ![Language](https://img.shields.io/badge/QUARKUS-purple) ![Language](https://img.shields.io/badge/ApiRest-green) ![Language](https://img.shields.io/badge/MariaDB-blue) ![Language](https://img.shields.io/badge/Html-yellow) ![Language](https://img.shields.io/badge/CSS-orange) ![Language](https://img.shields.io/badge/REACT-red)
![Language](https://img.shields.io/badge/TYPESCRIPT-blue) ![Language](https://img.shields.io/badge/React-router-purple) ![Language](https://img.shields.io/badge/Axios-green)
<br><br>Um sistema para submissão, listagem e gerenciamento de propostas de palestras.
<p align="center">
  <img src="https://raw.githubusercontent.com/devPabloEdu/ImagensParaReadme/refs/heads/main/homeTesteTDC.PNG" height="100%" width="100%">
</p>

## Tecnologias Utilizadas:
As tecnologias escolhidas para a solução foram selecionadas para manter o mesmo ambiente de trabalho utilizado na GlobalCode, mesmo que isso não seja um critério de avaliação.
- Backend: Java, Quarkus, RESTEasy, Jakarta EE
- Frontend: ReactJs, TypeScript, html semântico, CSS
- Banco de Dados Relacional: MariaDB
- Containerização: Docker
- MVC (model, view, controller)
- Boas práticas e código modular
- Acessibilidade


## Pré requisitos :
Antes de começar, verifique se você tem os seguintes programas instalados:
- Java 21+
- Maven
- Docker
- Quarkus
- NodeJs / NPM

<hr>

## Rodando o projeto
Clone o repositório

```bash
git clone https://github.com/devPabloEdu/TesteProjetoCFP.git
```

Acesse via terminal/CMD a raiz do backend da aplicação, com o seguinte comando:
```bash
cd .\teste-tecnico\backend-api\
```
Agora utilize o comando abaixo para instalar todas as dependencias necessárias do Quarkus
```bash
mvn clean install
```
Feito isso, utilize o comando abaixo para iniciar o container do banco de dados MARIA DB
```bash
docker-compose up --build
```
Ou se preferir utilize o comando abaixo, substituindo as informações como desejar
```bash
docker run --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=cfp -p 3306:3306 -d mariadb
```
## Para iniciar a api integrada ao banco de dados no ambiente de desenvolvimento, utilize o comando:
```bash
mvn quarkus:dev
```
Feito isso, acesse a pasta onde se encontra a raiz do frontend deste projeto
```bash
cd .\teste-tecnico\frontend-react\frontend\
```
Utilize o comando abaixo para baixar os pacotes necessários
```bash
npm install
```
## Feito isso, utilize o comando abaixo para iniciar o frontend de sua aplicação
```bash
npm start
```
<hr>
<p align="center">
  <img src="https://github.com/devPabloEdu/ImagensParaReadme/blob/main/teladecriacaoTDC.PNG" height="100%" width="100%">
</p>

## 📌 Endpoints da API

| Método  | Endpoint              | Descrição                               | Parâmetros |
|---------|-----------------------|-----------------------------------------|------------|
| `POST`  | `/Submissions/createSubmission` | Cria uma nova submissão                | Body: JSON |
| `GET`   | `/Submissions/ListSubmissions`  | Lista todas as submissões              | Query: `page`, `pageSize` |
| `DELETE`| `/Submissions/DeleteSubmission` | Deleta uma submissão pelo ID           | Query: `Id` |
| `PUT`   | `/Submissions/EditSubmission`   | Edita uma submissão existente          | Query: `Id`, Body: JSON |

Para testar os endpoints, você pode usar o Postman ou cURL. <br>
Exemplo de requisição para criar uma submissão:
```bash
curl -X POST "http://localhost:8080/Submissions/createSubmission" \
-H "Content-Type: application/json" \
-d '{
  "title": "Explorando Quarkus",
  "resume": "Palestra sobre Quarkus e suas vantagens",
  "authorName": "João Silva",
  "authorEmail": "joao@email.com"
}'
```
