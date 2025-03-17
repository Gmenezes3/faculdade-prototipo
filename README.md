# DriveS  

O **DriveS** é uma solução desenvolvida para facilitar a busca por vagas de estacionamento em áreas urbanas. O sistema permite que os usuários insiram um endereço e visualizem estacionamentos públicos próximos, utilizando um mapa interativo para melhor orientação.  

## Índice  

- [Funcionalidades Principais](#funcionalidades-principais)  
- [Funcionalidades por Página](#funcionalidades-por-página)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Licença](#licença)  
- [Sobre](#sobre)

## Funcionalidades Principais  

- **Busca de Estacionamentos Próximos**: Insira um endereço e visualize estacionamentos públicos disponíveis na região.  
- **Mapa Interativo**: Exibição dos estacionamentos em um mapa dinâmico baseado no **Leaflet.js**.  
- **Requisições HTTP**: O sistema utiliza **Axios.js** para buscar informações relacionadas ao endereço inserido.  

## Funcionalidades por Página  

### Página Principal (`index.html`)  
- Apresenta uma introdução ao DriveS, destacando os benefícios e funcionalidades do sistema.  
- Contém um vídeo com efeito de máquina de escrever utilizando **Typed.js**.  

### Página de Login (`login.html`)  
- Permite que usuários cadastrados façam login para acessar a busca de vagas.  
- Verifica credenciais e garante a segurança do acesso.  

### Página de Registro (`registro.html`)  
- Permite que novos usuários se cadastrem no sistema.  
- Coleta informações básicas para criação de conta.  

### Página Sobre (`sobre.html`)  
- Apresenta informações sobre a criação do projeto, incluindo a motivação e os integrantes envolvidos.  

### Página de Busca de Vagas (`busca.html`)  
- Disponível apenas para usuários autenticados.  
- Permite inserir um endereço para buscar estacionamentos próximos.  
- Utiliza **Leaflet.js** para exibir um mapa interativo com as vagas disponíveis.  
- Faz requisições HTTP com **Axios.js** para obter dados relevantes.  

## Tecnologias Utilizadas  

### Front-End  
- **HTML**: Estruturação das páginas e seus respectivos conteúdos.  
- **CSS**: Estilização dos elementos da página para melhorar a apresentação visual.  
- **JavaScript**: Adição de interatividade e dinamismo às páginas web.  

### Bibliotecas e Frameworks  
- **Bootstrap**: Utilizado para a criação de uma interface de usuário responsiva e estilizada.  
- **Typed.js**: Implementado para criar o efeito de máquina de digitação sobre o vídeo da homepage.  
- **Axios.js**: Usado para fazer requisições HTTP a servidores ao inserir o endereço no campo de busca.  
- **Leaflet.js**: Empregado na criação e manipulação do mapa interativo.  

## Licença  

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](https://github.com/gmenezes3/faculdade-prototipo/blob/main/LICENSE).  

## Sobre  

O **DriveS** foi desenvolvido por um grupo de alunos como parte de um trabalho acadêmico. Durante o desenvolvimento, identificamos uma grande deficiência na busca por vagas de estacionamento nas áreas urbanas, o que motivou a criação dessa solução. O objetivo do projeto é fornecer uma ferramenta prática e eficiente para ajudar as pessoas a encontrar estacionamentos públicos próximos a um determinado endereço.  

