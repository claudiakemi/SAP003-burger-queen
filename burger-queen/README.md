#Projeto Burger Queen

##Índice

* [1. Introdução] (#1-introdução)
* [2. Histórias de usuário] (#5-histórias-de-usuário)
* [3. Protótipo] (#3-protótipo)
* [4. Ferramentas utilizadas] (#4-ferramentas-utilizadas)
* [5. Como utilizar] (#4-como-utilizar)

***

## 1. Introdução

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

Estas são as informações que temos do cliente:

Somos **Burger Queen**, um fast food 24hrs.

A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
clientes.

Nós temos 2 menus. Um muito simples para o café da manhã:

| Ítem                      |Preço R$|
|---------------------------|------|
| Café americano            |    5 |
| Café com leite            |    7 |
| Misto Quente              |   10 |
| Suco de fruta natural     |    7 |

E outro menu para o resto do dia:

| Ítem                      |Preço |
|---------------------------|------|
|**Hambúrgueres**           |   **R$**   |
|Hambúrguer simples         |    10|
|Hambúrguer duplo           |    15|
|**Acompanhamentos**        |   **R$**   |
|Batata frita               |     5|
|Anéis de cebola            |     5|
|**Bebidas**                |   **R$**   |
|Água 500ml                 |     5|
|Água 750ml                 |     7|
|Refrigerante 500ml         |     7|
|Refrigerante 750ml         |    10|

**Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
frango ou vegetariano. Além disso, por um adicional de R$ 1,00 , eles podem
adicionar queijo ou ovo.

Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

## 2. Histórias de usuário

#### [História de usuário 1] Cliente deve poder anotar o seu pedido

Eu como cliente quero poder anotar o meu pedido saber o valor de cada
produto e poder enviar o pedido para a cozinha para ser preparado.

##### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome e mesa.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem e se adequar a um _tablet_.

##### Definição de pronto

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo.

***

#### [História de usuário 2] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.

##### Critérios de aceitação

* Ver os pedidos à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

##### Definição de pronto

* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo.

***

#### [História de usuário 3] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

##### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marque os pedidos que foram entregues.

##### Definição de pronto

* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo.
* Os dados devem ser mantidos intactos, mesmo depois que um pedido terminado. Tudo isso para poder ter estatísticas no futuro.

***

## 3. Protótipo

A interface foi prototipada no [Figma](https://www.figma.com/):

![](/src/images/prototipo.png)

## 4. Ferramentas utilizadas

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 5. Como utilizar

Ao entrar na aplicação, o funcionário deve escolher sua função:
![](/src/images/home.png)

O garçom terá acesso à pagina do cardápio, onde pode filtrar se quer ver o cardápio do café da manhã ou do almoço/janta. Também terá a área para incluir o nome do cliente e o número da mesa.

![](/src/images/cardapios.png)

Em cada produto, pode escolher a quantidade e nos hambúrgueres pode escolher as opções (bovino, frango ou vegetariano) e extras (queijo e ovo).
![](/src/images/hamburgs.png)

Ao final da página pode ver o resumo do pedido e enviar para a cozinha preparar.

O cozinheiro terá acesso a todos os pedidos enviados pelo garçom, ordenados do mais antigo para o mais recente.

![](/src/images/chef.png)
