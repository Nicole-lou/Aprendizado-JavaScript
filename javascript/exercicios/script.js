function carregar() {
let msg = document.getElementById('msg');
let img = document.getElementById('imagem');
let date = new Date();
let hora = date.getHours();
//let hora = 19;
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = 'img/manha.jpg';
    document.body.style.background = '#e2cd9f';
} else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = 'img/tarde.jpg';
    document.body.style.background = '#be8754ff';
} else {
    // Boa noite!
    img.src = 'img/noite.jpg';
    document.body.style.background = '#3e3e50ff';
}
}