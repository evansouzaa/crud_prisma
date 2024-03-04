# crud_prisma

CRUD with Typescript and Prisma



### example .env
create new file .env ./

APP_PORT=3000

DATABASE_URL_MYSQL="mysql://teste:teste@teste/database"

JWT_PASS="keyjwt"

JWT_EXPIRE="7d"

### Running on docker-compose

``  
  git clone https://github.com/evansouzaa/crud_prisma.git

  cd crud_prisma

  sudo nano .env (same .env above)

  sudo docker-compose up --build
  
  http://localhost:3000/
  
``

  

# start project

npmr run dev

  

# start new project steps

npm i prisma ts-node-dev typescript @types/express -D

  

npm i @prisma/client express

  

npx prisma init

  

## prisma commands

  

## force reset db

npx prisma db push --force-reset

  

### migration

npx prisma migrate dev

  
  

### prisma studio

npx prisma studio

  

### folder structure

src

│ app.js # Classe app

│ server.js # Server para iniciar o app

└───api

└───controllers # Funções da controllers do express route

└───models # Modelos do banco de dados

└───services # Regras de negócio

└───subscribers # Eventos async

└───repositories* # Query builders

└───config # Configuração das variaveis de ambiente

└───jobs # Tarefas de rotinas

└───loaders # Modulos para utilizado no app

└───utils # Trechos de código pequeno

└───helpers # Trechos de arquitetura de código

└───routes # Definição de rotas express

└───types # Tipagem (d.ts) para Typescript

  

### DOCUMENTAÇÃO

## Autentica um usuário e gera um token de acesso.

  

### Endpoint

  

-  **Método:**  `POST`

-  **URL:**  `/auth`

  

### Parâmetros de Requisição

  

-  **Corpo da Requisição (JSON):**

-  `email` (string): O e-mail do usuário.

-  `password` (string): A senha do usuário.

  

**Exemplo de Requisição:**

> json { 	
	> "email":  "usuario@example.com", 	
	> "password":  "senha123" 
> }


## Rota de Usuário

  

### Criação de Usuário

  

Cria um novo usuário.

- **Método:** `POST`

- **URL:** `/user/create`

  
#### Parâmetros de Requisição


- **Corpo da Requisição (JSON):**

- `name` (string): Nome do usuário.

- `email` (string): E-mail do usuário.

- `password` (string): Senha do usuário.

  

#### Exemplo de Requisição:

> json 
> { 
	> "name": "Nome do Usuário", 
	> "email": "usuario@example.com",   
	> "password": "senha123"
>  }

  

### Listagem de Usuários

Obtém a lista de todos os usuários.

  

Método: GET

URL: /user/

Parâmetros de Requisição

Cabeçalho (Header):

Authorization (string): Token de acesso do usuário autenticado.

Exemplo de Requisição:


GET /user/

Authorization: Bearer {token_de_acesso}

Resposta Bem-Sucedida (HTTP 200 OK)

Corpo da Resposta (JSON):

users (array): Lista de usuários.

Exemplo de Resposta:

> json
> 
> { "users": 
	> 	[ 
	> {
> "id":  1,
> "name":  "Nome do Usuário",
> "email":  "usuario@example.com"
	> },
> // Outros usuários...
	> ]
	> 	}

### Atualização de Usuário

Atualiza as informações do usuário autenticado.

  

Método: PUT

URL: /user/

Parâmetros de Requisição

Corpo da Requisição (JSON):

name (string, opcional): Novo nome do usuário.

email (string, opcional): Novo e-mail do usuário.

password (string, opcional): Nova senha do usuário.

Exemplo de Requisição:

  

json
{
"name":  "Novo Nome",
"email":  "novo_email@example.com",
"password":  "nova_senha"
}

Resposta Bem-Sucedida (HTTP 200 OK)
Corpo da Resposta (JSON):
message (string): Mensagem indicando a atualização bem-sucedida.

Exemplo de Resposta:

> json 
> { 
	> "message":  "Informações do usuário atualizadas com sucesso." 
> }

Respostas de Erro Possíveis
HTTP 400 Bad Request:

Se os dados de criação ou atualização forem inválidos ou incompletos.
HTTP 401 Unauthorized:

Se o token de acesso não for fornecido ou for inválido.

## Rota de Ativação

### Listagem de Ativações

Obtém a lista de todas as ativações de usuário.

- **Método:** `GET`
- **URL:** `/activation/`

#### Parâmetros de Requisição

- **Cabeçalho (Header):**
  - `Authorization` (string): Token de acesso do usuário autenticado.

**Exemplo de Requisição:**
```http
GET /activation/
Authorization: Bearer {token_de_acesso}
