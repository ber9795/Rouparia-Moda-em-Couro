/* Esconde o conteudo da pagina "index e Contato" ao clicar no toggle e mostrar as opções do navbar */
document.getElementById("_bar_Id_").onclick = function (c) {
  const elems = document.getElementsByClassName("tt");
  for (const x of elems) {
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }
};


