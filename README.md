Criar um arquivo .env na raís da api e coloque o usuario e senha do seu banco de dados para que funcione
DB_USER=/SeuUsuario/
DB_PASSWORD=/suaSenha/


## API rota /Cliente
- [x]Criar dados POST
    - - [o]nome: String,
    - - [o]sobrenome: String,
    - - [o]data_nascimento: String,
    - - [o]cpf: Number,
    - - [o]cep: Number,
    - - [o]endereco: String,
    - - [o]numero: String,
    - - [o]complemento: String,
    - - [o]cidade: String,
    - - [o]estado: String,
- [x]Ler dados GET
- [x]Ler dados dividuais GET/:ID
- [x]Alterar dados PATCH
- [x]Deletar dados Individuais DELETE/:ID

## API rota /Person
- [x]Criar dados POST
    - - [o]name: String,
    - - [o]salary: Number,
    - - [o]approved: Boolean,
- [x]Ler dados GET
- [x]Ler dados dividuais GET/:ID
- [x]Alterar dados PATCH
- [x]Deletar dados Individuais DELETE/:ID