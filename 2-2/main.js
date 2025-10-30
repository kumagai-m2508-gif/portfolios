const interests = ["ゲーム","アニメ","プログラミング","読書","音楽をきくこと"];
const specialties = ["寝ること","食べること","運動すること","勉強すること"];
const greetings = ["よろしくね","お手柔らかに","押忍！","よろしくお願いします。"];

const button = document.querySelector("#button");
button.addEventListener("click",function() {
    //alert("こんにちは！");
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialties.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const specialty = specialties[index2];
    const greeting = greetings[index3];
    //const message = `こんにちは、私の名前は${name}です。`;
    const message =`
    こんにちは、私の名前は${name}です。
    最近はまっているのは${interest}で、
    特技は${specialty}です。
    ${greeting}`;
    const output = document.querySelector("#output");
    //output.textContent ="こんにちは";
    output.textContent = message;
});