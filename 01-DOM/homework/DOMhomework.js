// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:
let toDoItems = [];


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
let miNombre = ' Mateo';
let span = document.querySelector('#createdBy');
span.innerHTML += miNombre;



// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo(description){
  this.description = description; //descripcion de la tarea
  this.complete = false; //la tarea inicialmente está incompleta (por hacerse)
}

// class ToDo {
//   // Tu código acá:
//   constructor(description){
//     this.description = description;
//     this.complete = false;
//   }
// }


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
// completeToDo.ToDo() = this.complete(true);
ToDo.prototype.completeToDo = function() {
  this.complete = !this.complete; //si this.complete es true, pasa a false, y viceversa
}
//el objetivo de esta func es tomar el this.complete en true cuando se complete la tarea.


// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) { // todo {description: description, complete:false} //todo es una tarea que es un obj de la clase ToDo
  // Tu código acá:

  let toDoShell = document.createElement('div')
  //1 le paso el tipo de tag que quiero crear
  //<div></div>
  
  toDoShell.setAttribute('class','toDoShell');
  //2 //tb podria ser toDoShell.className = 'toDoShell'
  //<div class='toDoShell'> </div>

  let toDoText = document.createElement('span');
  //3
  //<span></span>

  toDoText.innerHTML = todo.description;
  //4 todo es una instancia de la clase ToDo, con la prop description
  //<span>'description'</span>

  toDoText.setAttribute('id', index);
  //5 tb podria ser toDoText.id = index
  //<span id=index>'description'</span>
  
  if (todo.complete) {
    //6 Si la tarea se completa, se le aplcia la clase completeText
    toDoText.setAttribute('class','completeText');
    //<span id=numIndex class='completeText'>'description'</span>
  }
  toDoShell.appendChild(toDoText); //7
  //<div class='toDoShell'>
  //  <span id=numIndex>'description'</span>
  //</div>
  toDoText.addEventListener('click',completeToDo);
  return toDoShell; //8
}


// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
  //un arr con todos los objs todo agregados
  //toDos = [{Comprar tomate, complete}, {Comprar lechuga, complete}]
  //map devuelve un nuevo arr
  // Tu código acá:
let arr=toDos.map(function(todo, i){
  return buildToDo(todo,i)
  //crea un array donde cada el es:
  //<div class='toDoShell'>
  //  <span id=numIndex>'description'</span>
  //</div>
});

return arr;
//arr = [<div class='toDoShell'><span id=0>'Comprar tomate'</span></div>,
//       <div class='toDoShell'><span id=1>'Comprar lechuga'</span></div>]

//tb podria hacer en una sola linea
// return toDos.map(buildToDo);
// //Por cada elemento de buildToDo, aplicar
}




// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionar el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregando cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
let toDoContainer = document.querySelector('#toDoContainer')
//1 <div id='toDoContainer'></div>

toDoContainer.innerHTML = '';
//2 <div id='toDoContainer'>''</div>

let build = buildToDos(toDoItems);
//3 result = [<div class='toDoShell'><span id=0>'Comprar tomate'</span></div>,
//            <div class='toDoShell'><span id=1>'Comprar lechuga'</span></div>]

for(let i=0; i<build.length; i++){
  toDoContainer.appendChild(build[i])
}
//<div id='toDoContainer'>
//  <div class='toDoShell'><span id=0>'Comprar tomate'</span></div>,
//  <div class='toDoShell'><span id=1>'Comprar lechuga'</span></div>]
//</div>

//otra forma
// build.map(function(e){
//   return toDoContainer.appendChild(e)
}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
  let inp = document.querySelector('#toDoInput');
  if(inp.value !== ''){
    let toDo = new ToDo(inp.value) //toDo = {description: inp.value, complete: false}
    toDoItems.push(toDo); //actualice mi arreglo de toDos
    inp.value = ''; // me deja el input vacio (resetea)
    displayToDos(); //va a hacer aparecer en pantalla cada tarea
  }
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:
let agregar = document.querySelector('#addButton');
//asigna el id addButton (boton) a la var agregar
agregar.addEventListener('click',addToDo);
//cuando se hace click en el boton, se ejecuta la func addToDo


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id;
  // event es click
  // event.target es span
  // evente.target.id es el index del buildToDo, del span 
  // Tu código acá:
toDoItems[index].completeToDo(); //a las tareas le paso la func completeToDo (las completa)
displayToDos(); //nuevamente muestra las tareas con las incompletas y completas

}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'
displayToDos();


// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
