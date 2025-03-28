window.onload = function() {
    generateExcuse(); 
};

function generateExcuse() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed on', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    // Seleccionamos un elemento aleatorio de cada array
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    // Creamos la excusa
    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

    // Insertamos la excusa en el HTML
    document.getElementById("excuse").innerHTML = excuse;
}