TECNOLOGIAS UTILIZADAS

Todo o sistema foi implementando usando HTML5, CSS3 (Twitter Bootstrap 3), Javascript (JQuery 1.10, AngularJS 1.08) e JSON.
Estas tecnologia fora utilizadas para permitiur uma fácil atualização das informações contidas no web site.
Isto é feito basicamente usando Javascript e não existe servidor de aplicação (ex. tomcat, IIS, ...).

ATUALIZAÇÃO

Para atualizar as informações do web site, os arquivos html podem ser alterados diretamente, ou
através da atualização dos arquivos JSON contidos na pasta "data" de "public_html".
Os arquivos json populam as páginas estáticas como: links, pessoas, equipmentos, notícias e etc.

Antes de atualizar, verifique o código corrente e siga os exemplos já implementados.

Ao adicionar um novo integrante, verifique o campo "position". Ele indica a ordem que o integrante vai aparecer
na página. 
 
Para adicionar publicações, devem ser somente levadas em consideração as publicações com dois ou 
mais integrantes do grupo de pesquisa e relacionados com projetos existentes. 

Para exibir as imagens são armazenados apenas os caminhos relativos nos arquivos JSON.
Relativos à pasta "img" da raiz do website. Por exemplo, no "equipaments.json" colocar somente
o texto relativo ao nome da imagem "novo_robo.jpg" e na pasta "img/equipaments" colocar o arquivo 
da imagem (jpg).
Para cada imagem, deve haver uma thumbnail no diretório "thumbs" na mesma pasta com um arquivo 
com o mesmo nome do original, mas com tamanho menor.

As imagens para as pessoas são automaticamente requisitadas através do currículo lattes.
Se a informação do lattes não estiver disponível no JSON a foto não aparecerá.

Se quiser adicionar mais uma informação nos arquivos JSON, pode adicionar e para exibir essa informação no 
HTML é só colocar o nome do novo campo entre {{}}. Ex. <p>Data do link: {{link.date}}</p>
 
Toda vez que alguém realizar uma alteração, por favor registrar no arquivo de log (LOG_UPDATES.txt) na raíz do website.
E enviar um email para o grupo confirmando a alteração.

REGRAS PARA ATUALIZAÇÃO

Publicações: Deve ter no mínimo dois integrantes do grupo de pesquisa nos autores.

FUNCIONAMENTO

Existe um mecanismo de template, então cada página criada deve conter apenas a parte central do conteúdo a ser exibido.
Excluindo head, footer, menu, etc.

Para cada nova página criada deve ser adicionado uma rota no arquivo "scripts/controllers/app.js",
indicando o padrão a ser requisitado e a página a ser exibida no corpo do template.

O menu está representado no arquivo "navbar.html" na pasta "template".

CONTATO/DESENVOLVEDOR

Anderson V. Araújo
andvicoso@gmail.com