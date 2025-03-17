# DriveS  

O **DriveS** é uma solução inovadora para facilitar a busca por vagas de estacionamento em áreas urbanas. Com uma interface intuitiva e tecnologias modernas, o sistema permite que os usuários localizem vagas disponíveis em tempo real, otimizando tempo e reduzindo o estresse na hora de estacionar.  

## Índice  

- [Funcionalidades Principais](#funcionalidades-principais)  
- [Funcionalidades por Página](#funcionalidades-por-página)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Licença](#licença)  
- [Sobre](#sobre)  
- [Contribuição](#contribuição)  
- [Contato](#contato)  

## Funcionalidades Principais  

- **Monitoramento em Tempo Real**: Veja a disponibilidade de vagas em locais específicos, atualizando as informações continuamente.  
- **Notificações Instantâneas**: Receba alertas sobre vagas próximas, garantindo praticidade na hora de estacionar.  
- **Histórico de Disponibilidade**: Consulte registros detalhados para identificar padrões de disponibilidade ao longo do dia ou da semana.  
- **Mapa Interativo**: Utilize um mapa dinâmico baseado no **Leaflet.js** para visualizar estacionamentos próximos ao endereço pesquisado.  

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

O DriveS foi desenvolvido com base em extensas pesquisas focadas nas dificuldades enfrentadas pelas pessoas ao buscar vagas de estacionamento nas ruas. Nosso compromisso é oferecer uma solução prática e eficiente para melhorar a disponibilidade e o gerenciamento de vagas, utilizando tecnologias inovadoras.
