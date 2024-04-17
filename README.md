# Teste pr�tico para desenvolvedores Fullstack

Este projeto � um teste pr�tico destinado a avaliar diferentes n�veis de habilidade em desenvolvimento Fullstack. Ele � dividido em v�rias atividades, cada uma com requisitos espec�ficos que buscam medir o conhecimento, organiza��o e esfor�o do desenvolvedor.

## Stack Utilizada

- Linguagem: JavaScript (Node.js)
- Framework: Express.js
- Banco de Dados: MongoDB

### Por que escolhemos esta stack?

Optamos por utilizar JavaScript com Node.js e Express.js devido � sua popularidade, flexibilidade e efici�ncia para o desenvolvimento de aplica��es web e APIs. Al�m disso, o MongoDB foi escolhido como banco de dados devido � sua natureza NoSQL, que oferece facilidade de desenvolvimento e escalabilidade para lidar com os requisitos de um sistema web moderno.

## Como Subir o Sistema para Executar os Testes

Para subir o sistema e executar os testes, siga os passos abaixo:

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua m�quina.
2. Clone este reposit�rio para o seu ambiente local.
3. Instale as depend�ncias do projeto executando o comando `npm install`.
4. Inicie o servidor executando o comando `npm start`.
5. Acesse a aplica��o em `http://localhost:3000` no seu navegador.
6. Para executar os testes, utilize o comando `npm test`.

## Funcionalidades Implementadas

### 1. Autentica��o de Usu�rios

Foi implementado um sistema de autentica��o de usu�rios utilizando JWT (JSON Web Token).

### 2. CRUD de Usu�rios

Implementamos opera��es CRUD (Create, Read, Update, Delete) para gerenciar os usu�rios no sistema. Inclu�mos verifica��es de permiss�o para garantir que apenas usu�rios autenticados possam acessar e modificar os dados do usu�rio.

### 3. CRUD de Postagens

Desenvolvemos opera��es CRUD para gerenciar as postagens dos usu�rios. Apenas o pr�prio usu�rio pode editar ou excluir suas pr�prias postagens. Cada postagem possui a capacidade de adicionar uma imagem, e as edi��es s�o salvas como hist�rico. Al�m disso, implementamos contadores de visualiza��es, curtidas e n�o curtidas para cada postagem.

### 4. CRUD de Coment�rios

Implementamos opera��es CRUD para gerenciar os coment�rios nas postagens. Apenas o pr�prio usu�rio pode editar seus coment�rios, e tanto o usu�rio do coment�rio quanto o usu�rio da postagem podem remov�-los. Adicionamos um marcador para indicar quando um coment�rio foi removido pelo usu�rio ou pelo dono da postagem, e tamb�m enviamos um e-mail para o usu�rio da postagem quando ele recebe um novo coment�rio em seu post.

### 5. Relat�rio de Postagens

Criamos uma rota que gera um relat�rio de postagens, fornecendo informa��es como t�tulo, quantidade de coment�rios, visualiza��es, curtidas e n�o curtidas para cada postagem.

## Conclus�o

Este projeto demonstra a implementa��o de diversas funcionalidades t�picas de uma aplica��o web, incluindo autentica��o de usu�rios, gerenciamento de dados, e relat�rios. Ele serve como uma oportunidade para o desenvolvedor demonstrar suas habilidades em desenvolvimento Fullstack.

## Extras

Deixo junto com o projeto a collection do Postman j� pronta para ajudar, deve apenas ajustar o Bearer Token obtido no login.
