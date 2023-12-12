
//Eventos


//1.Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let enlaces=document.querySelectorAll("a")

//enlaces=document.addEventListener('click','type')

console.log(document.querySelectorAll("a")) 
/*
enlaces.addEventListener('click',()=>{
    mostrarMensaje('mensaje desde el evento')
});


function mostrarMensaje(mensaje){
    console.log(mensaje);
}*/


//2 Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let imagenes=document.querySelectorAll("img")


console.log(document.querySelectorAll("img"))



//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let parrafos=document.querySelectorAll("p")

parrafos.forEach((item)=>{
    item.style.background='green';
    item.style.color='red';
})

console.log(document.querySelectorAll("p"))




//2.3 Bloques de article o section: Cambia el color de fondo.

let articulos=document.querySelectorAll('article')

articulos.forEach((item)=>{

    item.style.background='blue';
})

console.log(document.querySelectorAll('article'))

const secciones=document.querySelectorAll('section')

articulos.forEach((item)=>{

    item.style.background='red';
})

console.log(document.querySelectorAll('section'))



//3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.



//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.



//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.



//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.



//4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.


/*const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
     código misterioso 
}

console.log(getRandom(colors))*/
// imprime 'red', 'blue' o 'green'*/

// 5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

// 6.Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.