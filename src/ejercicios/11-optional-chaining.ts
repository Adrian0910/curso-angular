
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Adrian'
}

const pasajero2: Pasajero = {
    nombre: 'Lety',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

imprimeHijos( pasajero1 );


