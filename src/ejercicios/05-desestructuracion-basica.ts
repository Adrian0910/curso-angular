/*
    ===== Código de TypeScript =====
*/
/* Debemos especificar el tipo del arreglo */

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}


const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;  /* con este extraemos el autor de detalles de reproductor  */

/* console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El canción actual de: ', cancion);
console.log('El autor es: ', detalles); */


/* arreglos */

const dbz: string[] =['Goku', 'Vegeta', 'Trunks'];

const [ , , t3 ] = dbz; /* basado en posicion, cuando no queremos nada solo se pone la coma */

/* console.log('Personaje 1: ', t1);
console.log('Personaje 2: ', t2); */
console.log('Personaje 3: ', t3);
