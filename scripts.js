
//Eventos


//1.Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

let enlaces = document.querySelectorAll("a")
//console.log(document.querySelectorAll("a")) 

enlaces.forEach((enlace) => {
    enlace.addEventListener('click', (ev) => {
        ev.preventDefault()
        //console.log(ev)
        //mostrarMensaje('mensaje desde el evento')
    });

})

/* function mostrarMensaje(mensaje){
    console.log(mensaje);
} */


//2 Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

let imagenes = document.querySelectorAll("img")

imagenes.forEach((item) => {
    item.addEventListener('click', (ev) => {
        ev.target.src = getRandom(cambioGif);
        console.log(ev.target)
    })
    //item.src='assets/magic-1.gif';
    //item.setAttribute('src','assets/magic-1.gif')

})

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

let parrafos = document.querySelectorAll("p")

parrafos.forEach((item) => {
    item.addEventListener('click', () => {
        item.style.background = getRandom(paletaColors);
        item.style.color = getRandom(paletaColors);
    }
    )

})

console.log(document.querySelectorAll("p"))




//2.3 Bloques de article o section: Cambia el color de fondo.

let articulos = document.querySelectorAll('article')

articulos.forEach((item) => {
item.addEventListener('click',()=>{

    item.style.background = getRandom(paletaColors);

})
    
})

console.log(document.querySelectorAll('article'))


//3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.



//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

imagenes.forEach((item) => {
    let valorOriginal;
    item.addEventListener('mouseenter', (ev) => {
        valorOriginal = ev.target.src;
        ev.target.src = getRandom(cambioGif);
    })
    item.addEventListener('mouseleave', (ev) => {
        ev.target.src = valorOriginal;
        console.log(ev.target, valorOriginal)
    })


})

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
parrafos.forEach((item) => {
    let valorParrafo;
    item.addEventListener('mouseenter', () => {
        valorParrafo=item.style.background;
        valorParrafo=item.style.color;
        item.style.background = getRandom(paletaColors);
        item.style.color = getRandom(paletaColors);
    })
    item.addEventListener('mouseleave', () =>{
        item.style.background=valorParrafo;
        item.style.color=valorParrafo;
    })

})


// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

articulos.forEach((item)=>{
    let valorarticulo;
    item.addEventListener('mouseenter',()=>{
        valorarticulo=item.style.background;
        item.style.background = getRandom(paletaColors);
    })
    item.addEventListener('mouseleave',()=>{
        item.style.background = valorarticulo;
        
    })

})



// 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.


const colors = ['red', 'blue', 'green',]

const getRandom = (array) => {

    return array[Math.floor(Math.random() * array.length)]

}

console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'*/

// 5.Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

const paletaColors = ['#dad7cd','#a3b18a','#588157','#3a5a40','#344e41']
console.log(getRandom(paletaColors))

// 6.Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.

const cambioGif=['assets/magic-1.gif','assets/magic-2.gif','assets/magic-3.gif','assets/magic-4.gif','assets/magic-5.gif','assets/magic-6.gif']
console.log(getRandom(cambioGif))