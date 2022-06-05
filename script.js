/* Esconde o conteudo da pagina ao clicar no toggle e mostrar as opções do navbar */
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


  
/*Valida se o nome esta usando apenas letras do alfabeto */
function checkNome() {
  var fname = document.getElementById('fnome');
  var letras = /^[A-Za-z]+$/;
   if(!letras.test(fname.value)) {
     alert('Por favor preencha um nome válido');
     return false;
     }
  }


/*Valida se o email esta correto */
  function checkEmail() {

    var email = document.getElementById('e-mail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Por favor preencha um email válido');
    email.focus;
    return false;
    
 }
}


/*Valida se esta colocando numero no campo telefone */
function validfone () {  
  var telefone = document.getElementById('fone');
  var reg = /^[0-9]+$/;
  if (!reg.test(telefone.value)) {
    alert('Por favor preencha um telefone válido');
    telefone.focus;
    return false;


  }}

/*Limpa os input do formulario depois de submeter*/
function submit_form() {
  document.submit1.submit();
  document.submit1.reset();
}
