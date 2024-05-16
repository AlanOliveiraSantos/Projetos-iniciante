function enviar() {
    var comprimento = document.getElementById("idComp");
    var numcomp = Number(comprimento.value);
    var compri = numcomp + 0.15;

    var lar = document.getElementById("Larg").value;
    var largfaixa = 1.38;
    var perdaporjuncao = 0.03;
    var numerofaixas = 0;
    var larguratotal = 0;

    while (larguratotal < lar) {
      if (numerofaixas > 0) {
        larguratotal += largfaixa - perdaporjuncao;
      } else {
        larguratotal += largfaixa;
      }
      numerofaixas++;
    }
    var falta = larguratotal - lar;
    reslarg.innerHTML = `Faixas Necessárias: <br>${numerofaixas} de ${compri.toFixed(
      2
    )} <br> <br>
    Excesso de Largura:<br> ${falta.toFixed(2)}`;

    medfinal.innerHTML = `MEDIDA TOTAL <br>${compri.toFixed(
      2
    )} x ${larguratotal.toFixed(2)}`;
  }