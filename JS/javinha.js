
function inputDinamico(evento) {
  evento.style.height = "100%";
  evento.style.height = 25 + evento.scrollHeight + "px";
}

function TextoPadrao(txt) {
  txt.value = txt.value == txt.defaultValue ? "" : txt.value;
  return true;
}
function criptografar() {
  var conteudo = document.getElementById("textInput").value;
   place = document.getElementById("resultado");
  var text = document.createTextNode(
    conteudo
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat")
  );
   textFinal = text.data;  

    place.innerHTML=`
    <p id="outputText" class="outputDinamico">${textFinal}</p>
    <button class='buttonCopiar' onclick="copiar()">Copiar</button>
`;
 limparOutput();
}
function limparOutput(){
  if(place == "")
  {
    document.getElementById("preTexto").style.disable = "true";
  }

}
function descriptografar() {
  var conteudo = document.getElementById("textInput").value;
  place = document.getElementById("resultado");
  var text = document.createTextNode(
    conteudo
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u")
  );
   textFinal = text.data;  

  place.innerHTML=`
  <p id="outputText" class="outputDinamico">${textFinal}</p>
  <button class='buttonCopiar' onclick="copiar()" >Copiar</button>
`;
}

function copiar(){
  let textoCopiado = document.getElementById("outputText");
  textoFinal = textoCopiado.data;
  navigator.clipboard.writeText(textoCopiado.innerHTML);
};

