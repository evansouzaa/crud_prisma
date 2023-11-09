# crud_prisma
 CRUD with Typescript and Prisma

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
│   app.js          # Classe app
│   server.js       # Server para iniciar o app
└───api             
  └───controllers   # Funções da controllers do express route
  └───models        # Modelos do banco de dados
  └───services      # Regras de negócio
  └───subscribers   # Eventos async 
  └───repositories* # Query builders 
└───config          # Configuração das variaveis de ambiente
└───jobs            # Tarefas de rotinas
└───loaders         # Modulos para utilizado no app
└───utils           # Trechos de código pequeno
└───helpers         # Trechos de arquitetura de código
└───routes          # Definição de rotas express
└───types           # Tipagem (d.ts) para Typescript

