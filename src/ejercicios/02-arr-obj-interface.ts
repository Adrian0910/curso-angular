
/*
    ===== Código de TypeScript =====
*/

/* Debemos especificar el tipo del arreglo */
let habilidades:string[] = ['Bash', 'Counter', 'Healing']; 

/* Objetos */

/* Definimos una interfaces para que el obj tenga lo que queramos */
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string; /* ? indica que es opcional */
}


const personaje: Personaje = {
    nombre: 'Oxim',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healting']
}

personaje.puebloNatal = 'Pueblo Paleta';


console.table(personaje);
