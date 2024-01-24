# APP

GymPass style app

## RFs (requisitos funcionais)

- [] Dever possível se cadastrar;
- [] Deve ser possível se autenticar;
- [] Deve ser possível obter perfil de um usuário logado;
- [] Deve ser possível obter o numero de check-ins pelo usuário logado;
- [] Deve ser possível o usuário obter seu historico de check-ins;
- [] Deve ser possível o usuário buscar academia próximas;
- [] Deve ser possível o usuário buscar uma academia pelo nome;
- [] Deve ser possível o usuário buscar academias pelo nome;
- [] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [] O usuário não pode fazer dois check-ins no mesmo dia;
- [] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [] O check-in só pode ser validado 20 minutos após criado
- [] O check-in só pode ser validado por administradores
- [] A academia só pode ser cadastrada por administradores

## RNFs (requisitos não funcionais)

- [] A senha do usuário precisa estar criptografada;
- [] Os dados da app precisam estar persistido em um banco PostgreSQL
- [] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [] O usuário deve ser identificado por um JWT