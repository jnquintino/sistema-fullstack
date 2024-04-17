# Teste prático para desenvolvedores Fullstack

Este projeto é um teste prático destinado a avaliar diferentes níveis de habilidade em desenvolvimento Fullstack. Ele é dividido em várias atividades, cada uma com requisitos específicos que buscam medir o conhecimento, organização e esforço do desenvolvedor.

## Stack Utilizada

- Linguagem: JavaScript (Node.js)
- Framework: Express.js
- Banco de Dados: MongoDB

### Por que escolhemos esta stack?

Optamos por utilizar JavaScript com Node.js e Express.js devido à sua popularidade, flexibilidade e eficiência para o desenvolvimento de aplicações web e APIs. Além disso, o MongoDB foi escolhido como banco de dados devido à sua natureza NoSQL, que oferece facilidade de desenvolvimento e escalabilidade para lidar com os requisitos de um sistema web moderno.

## Como Subir o Sistema para Executar os Testes

Para subir o sistema e executar os testes, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Instale as dependências do projeto executando o comando `npm install`.
4. Inicie o servidor executando o comando `npm start`.
5. Acesse a aplicação em `http://localhost:3000` no seu navegador.
6. Para executar os testes, utilize o comando `npm test`.

## Funcionalidades Implementadas

### 1. Autenticação de Usuários

Foi implementado um sistema de autenticação de usuários utilizando JWT (JSON Web Token).

### 2. CRUD de Usuários

Implementamos operações CRUD (Create, Read, Update, Delete) para gerenciar os usuários no sistema. Incluímos verificações de permissão para garantir que apenas usuários autenticados possam acessar e modificar os dados do usuário.

### 3. CRUD de Postagens

Desenvolvemos operações CRUD para gerenciar as postagens dos usuários. Apenas o próprio usuário pode editar ou excluir suas próprias postagens. Cada postagem possui a capacidade de adicionar uma imagem, e as edições são salvas como histórico. Além disso, implementamos contadores de visualizações, curtidas e não curtidas para cada postagem.

### 4. CRUD de Comentários

Implementamos operações CRUD para gerenciar os comentários nas postagens. Apenas o próprio usuário pode editar seus comentários, e tanto o usuário do comentário quanto o usuário da postagem podem removê-los. Adicionamos um marcador para indicar quando um comentário foi removido pelo usuário ou pelo dono da postagem, e também enviamos um e-mail para o usuário da postagem quando ele recebe um novo comentário em seu post.

### 5. Relatório de Postagens

Criamos uma rota que gera um relatório de postagens, fornecendo informações como título, quantidade de comentários, visualizações, curtidas e não curtidas para cada postagem.

## Conclusão

Este projeto demonstra a implementação de diversas funcionalidades típicas de uma aplicação web, incluindo autenticação de usuários, gerenciamento de dados, e relatórios. Ele serve como uma oportunidade para o desenvolvedor demonstrar suas habilidades em desenvolvimento Fullstack.

## Extras

Deixo junto com o projeto a collection do Postman já pronta para ajudar, deve apenas ajustar o Bearer Token obtido no login.
