const dateElement = document.getElementById("date");



// Date
// 

const options= {weekday: "long", month: "long", day: "numeric"}
const today = new Date() ;  // new Date sagt JS dass ein neues Objekt erschaffen wird 
dateElement.innerHTML= today.toLocaleDateString("de-DE", options);  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; console.log(event.toLocaleDateString('de-DE', options));




const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
let toDo = "";   // immer variablen deklarieren. und da wir den Inhalt nicht kennen der ins input kommt, muss toDo leer sein. toDo = inputField.value(Inputwert)
const items = document.getElementById("items"); 





addButton.addEventListener("click", function () {
    toDo = inputField.value 
    const template = `<li> <div class="to_item"><span> ${toDo} </span> 
    <img class="trash" src="trash-can-solid.svg" alt="Mülleimer"/> </div> </li>`
    items.insertAdjacentHTML("beforeend", template);
})

// Template muss innerhalb der Fkt sein, wegen dem const und damit es funzt

            