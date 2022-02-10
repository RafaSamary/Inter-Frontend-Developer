![Index_Gif](./Index_Gif.gif)

# Metodos JavaScript Manipulando D.O.M.

# ![img](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)

* document.createElement() - Cria um novo elemento HTML
* document.removeChild()   - Remove um elemento
* document.appendChild()   - Adiciona um elemento
* document.replaceChild()  - Substitui um elemento

# Metodos para Manipular  Estilos.

# ![img](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)

const meuElemento = document.getElementById(`meu-elemento`)

meuElemento.classList.add("novo-estilo");
// adiciona a classe "meu estilo"

meuElemento.classList.remove("classe");
// Remove a classe "classe"

meuElemento.classList.toggle("dark-mode")
// Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça.
__________________________________________________________________________________________________

document.getElementsByTagName("h1").style.color = "blue";
// acessando diretamente o CSS de um elemento

# Eventos para Manipular D.O.M.

# ![img](https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b)

* Eventos do mouse          - mouseover, mouseout

*   Eventos de click          - click, dbclik

*   Eventos de atualização    - change, load

  

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);

// cria um evento de click diretamente pelo javascript





​    

