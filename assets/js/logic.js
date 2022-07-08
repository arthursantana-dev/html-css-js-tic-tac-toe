let numeroLance = 0;

for (let i = 1; i < 10; i++) {
  const celula = document.getElementById(`celula${i}`);

  celula.addEventListener("click", function () {
    numeroLance++;

    if (numeroLance % 2 === 0) {
      celula.classList.add("click-player-2");
    } else {
      celula.classList.add("click-player-1");
    }

    checarVitoriaOuEmpate();
  });
}

const anunciarVitoria = function (jogador) {
  setTimeout(() => {
	if (jogador === "Empate"){
		alert('Deu velha!')
	} else {
		alert(`O jogador ${jogador} venceu!`);
	}
	window.location.reload();
  }, 1000);
};

const checarVitoriaOuEmpate = function () {
  const vitoria = checarLinhasColunas() || checarDiagonais();

  if (vitoria === 1) {
	anunciarVitoria("Jogador 1");

  } else if (vitoria === 2) {
	anunciarVitoria("Jogador 2");
  } else {
	numeroLance == 9 ? anunciarVitoria("Empate") : false;
  }
};

// const checarColunas = function() {
// 	const colunas = [[1,4,7], [2,5,8], [3,6,9]];

// 	for (let i = 0; i < colunas.length; i++) {
// 		const coluna = colunas[i];

const checarLinhasColunas = function () {
  const linhas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i];

    const celula1 = document.querySelector(`#celula${linha[0]}`);
    const celula2 = document.querySelector(`#celula${linha[1]}`);
    const celula3 = document.querySelector(`#celula${linha[2]}`);

    if (
      celula1.classList.contains("click-player-1") &&
      celula2.classList.contains("click-player-1") &&
      celula3.classList.contains("click-player-1")
    ) {
      return 1;
    } else if (
      celula1.classList.contains("click-player-2") &&
      celula2.classList.contains("click-player-2") &&
      celula3.classList.contains("click-player-2")
    ) {
      return 2;
    }
  }
};

const checarDiagonais = function () {
  const celula1 = document.querySelector("#celula1");
  const celula5 = document.querySelector("#celula5");
  const celula9 = document.querySelector("#celula9");

  if (
    celula1.classList.contains("click-player-1") &&
    celula5.classList.contains("click-player-1") &&
    celula9.classList.contains("click-player-1")
  ) {
    return 1;
  } else if (
    celula1.classList.contains("click-player-2") &&
    celula5.classList.contains("click-player-2") &&
    celula9.classList.contains("click-player-2")
  ) {
    return 2;
  }
};
