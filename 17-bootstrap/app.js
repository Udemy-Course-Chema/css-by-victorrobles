var nombre = "World";
var age = 25;

// document.write(nombre);
// document.write(age);

var datos = document.getElementById("datos");
datos.innerHTML = nombre;

datos.innerHTML += `
     <h2>Estamos en el Javascript</h2>
     <p>Con los métodos. </p>
     <p>Nombre: ${nombre}</p>
     <p>Edad: ${age}</p>
`;
