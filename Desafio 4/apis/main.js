//const url = "https://jsonplaceholder.typicode.com/albums";

//fetch(url)
//.then(res => res.json())
//.then(res => console.log(res)) 

//CREAMOS UN ARRAY DE OBJETOS (POR EJEMPLO DATOS DE ESTUDIANTES)
const estudiantes = [
    { id: 1, nombre: 'Juan', edad: 16 },
    { id: 2, nombre: 'María', edad: 17 },
    { id: 3, nombre: 'Carlos', edad: 16 },
    { id: 4, nombre: 'Juana', edad: 19 },
];


// Filtramos estudiantes mayores de 16 años
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 16);

console.log(estudiantesMayores); //Un ARRAY NUEVO FILTRADO

const encontrado = estudiantes.find(estudiante => estudiante.id === 2); //== ESTRICTO IDENTICO 

console.log(encontrado);

estudiantes.map(estudiante => {
    if (estudiante.nombre === 'María') {
        estudiante.edad = 21;
    }
});
console.log(estudiantes);

//estudiantes.forEach(estudiante => {
  //  if (estudiante.edad === 16) {
    //    estudiante.edad = 21;
    //}
//});
//console.log(estudiantes);

const nuevoEstudiante = {id: 5, nombre:"Martin", edad:14 }

estudiantes.push(nuevoEstudiante)

const Menores = estudiantes.filter(estudiante => estudiante.edad<=18);
console.log(Menores);


const ordenados = estudiantes.sort((a,b) => a.edad - b.edad);

console.log(ordenados);
