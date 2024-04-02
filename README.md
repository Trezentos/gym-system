# APP

GymPass style app

## RFs (requisitos funcionais)

- [x] Dever possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter perfil de um usuário logado;
- [x] Deve ser possível obter o numero de check-ins pelo usuário logado;
- [x] Deve ser possível o usuário obter seu historico de check-ins;
- [x] Deve ser possível o usuário buscar academia próximas (até 10km);
- [x] Deve ser possível o usuário buscar uma academia pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer dois check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [x] O check-in só pode ser validado 20 minutos após criado
- [] O check-in só pode ser validado por administradores
- [] A academia só pode ser cadastrada por administradores

## RNFs (requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da app precisam estar persistido em um banco PostgreSQL
- [] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [] O usuário deve ser identificado por um JWT