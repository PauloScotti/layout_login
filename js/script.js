const botao = document.getElementById("botao");

botao.addEventListener('click', (e) => {
    e.preventDefault();
    const salvar = document.getElementById("salvar");
    
    salvar.style.display = "block";

    setTimeout(() => {
        salvar.style.display = 'none';
     },3000);
});
