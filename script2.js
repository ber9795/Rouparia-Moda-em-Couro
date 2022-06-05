document.getElementById("_bar_Id_").onclick = function(c) {
    const elems = document.getElementsByClassName("texto2");
  for(const x of elems) {
    if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
  }
  }


  