/* Esconde o conteudo da pagina "Servico"  ao clicar no toggle e mostrar as opções do navbar */

document.getElementById("_bar_Id_").onclick = function(click1) {
    const elems = document.getElementsByClassName("texto2");
  for(const x of elems) {
    if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }
  }


  