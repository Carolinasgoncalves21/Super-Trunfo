var carta1 = {
  imagem:
    "https://static.preparaenem.com/conteudo_legenda/dados%20do%20brasil.jpg",
  nome: "Brasil",
  atributos: {
    vitórias: 69,
    empates: 11,
    derrotas: 16
  }
};

var carta2 = {
  imagem: "https://static.preparaenem.com/2021/01/1-bandeira-argentina.jpg",
  nome: "Argentina",
  atributos: {
    vitórias: 40,
    empates: 9,
    derrotas: 21
  }
};

var carta3 = {
  imagem:
    "https://static.preparaenem.com/conteudo_legenda/dados%20do%20uruguai.jpg",
  nome: "Uruguai",
  atributos: {
    vitórias: 19,
    empates: 11,
    derrotas: 17
  }
};

var carta4 = {
  imagem: "https://knoow.net/wp-content/uploads/2019/02/bandeira-mexico-6.jpg",
  nome: "México",
  atributos: {
    vitórias: 12,
    empates: 11,
    derrotas: 26
  }
};

var carta5 = {
  imagem: "https://static.preparaenem.com/2021/02/bandeira-do-paraguai.jpg",
  nome: "Paraguai",
  atributos: {
    vitórias: 8,
    empates: 9,
    derrotas: 10
  }
};

var carta6 = {
  imagem:
    "https://static.preparaenem.com/conteudo_legenda/dados%20do%20chile.jpg",
  nome: "Chile",
  atributos: {
    vitórias: 9,
    empates: 6,
    derrotas: 14
  }
};

var carta7 = {
  imagem:
    "https://static.preparaenem.com/conteudo_legenda/c5fb73477e64d8d6e17b5711108d520e.jpg",
  nome: "Peru",
  atributos: {
    vitórias: 4,
    empates: 3,
    derrotas: 8
  }
};

var carta8 = {
  imagem: "https://static.preparaenem.com/2021/03/bandeira-colombia.jpg",
  nome: "Colômbia",
  atributos: {
    vitórias: 3,
    empates: 2,
    derrotas: 8
  }
};

var carta9 = {
  imagem: "https://s1.static.brasilescola.uol.com.br/be/e/equador(1).jpg",
  nome: "Equador",
  atributos: {
    vitórias: 3,
    empates: 0,
    derrotas: 4
  }
};

var carta10 = {
  imagem:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/1280px-Flag_of_Bolivia_%28state%29.svg.png",
  nome: "Bolívia",
  atributos: {
    vitórias: 0,
    empates: 1,
    derrotas: 5
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'> Você venceu! Heee ... Parabéns! </p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'> Você perdeu! Lamentável! </p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatamos!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      " - " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      " - " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
