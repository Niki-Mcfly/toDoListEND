
// Date
const dateElement = document.getElementById("date");


const options= {weekday: "long", month: "long", day: "numeric"}
const today = new Date() ;  // new Date sagt JS dass ein neues Objekt erschaffen wird 
dateElement.innerHTML= today.toLocaleDateString("de-DE", options);  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; console.log(event.toLocaleDateString('de-DE', options));




const addButton = document.getElementById("addButton");
const inputField = document.getElementById("inputField");
const items = document.getElementById("items"); 



// toDo entsteht erst wenn jemand etwas eintippt/abschickt & deshalb besser toDo innehralb der FKt deklariert werden //
//The insertAdjacentHTML() method inserts a text as HTML, into a specified position."afterbegin""afterend""beforebegin""beforeend" node.insertAdjacentHTML(position, text)




addButton.addEventListener("click", function () {
    const toDo = inputField.value 
    const template = `<li> <div class="to_item"><span> ${toDo} </span> 
    <img class="trash" src="trash-can-solid.svg" alt="Mülleimer"/> </div> </li>`
    items.insertAdjacentHTML("beforeend", template); // items sind listen-elemente  / node.insertAdjacentHTML(position, text)//
 

    // LöschFKT mit Button: //
    let trashElements = document.querySelectorAll(".trash"); //getElementsbyClassName ging nicht, daher  querySel.//
    trashElements.forEach(function(element) {
    element.addEventListener("click", function() {
       this.parentNode.parentNode.remove()  //this = aktuelle Element "was man gerade in der Hand hat innerhalb des schleifendurchgangs" das von der forEach durchlaufen wurde / was die FKT aufgerufen hat//
    }); // da gesamter li Eintrag gelöscht werden soll und nicht nur Mülleimer, muss man alle obrigeren Elternelemente löschen, daher zweimal parentNode. Die Hierachie beachten//
});
    
})

// Template muss innerhalb der Fkt sein, wegen dem const und damit es funktioniert, sonst geht es nicht // 


