/**
 * Guía 3 - Ejemplo de programación modular con arrow functions
 * Simulación del aprendizaje top-down coding aplicado a motocicletas
 */

// =======================
// Módulo de preparación de la moto
// =======================
const prepararMoto = (tipo) => {
    console.log(`Preparando la moto tipo: ${tipo}`);
    return {
        tipo,
        encendida: false,
        velocidad: 0
    };
};

// =======================
// Módulo de encendido
// =======================
const encenderMoto = (moto) => {
    moto.encendida = true;
    console.log(`${moto.tipo} encendida ✅`);
    return moto;
};

// =======================
// Módulo de acelerar
// =======================
const acelerar = (moto, incremento) => {
    if (!moto.encendida) {
        console.log("La moto debe estar encendida para acelerar!");
        return moto;
    }
    moto.velocidad += incremento;
    console.log(`${moto.tipo} acelerando a ${moto.velocidad} km/h 🏍️`);
    return moto;
};

// =======================
// Módulo de frenar
// =======================
const frenar = (moto, decremento) => {
    moto.velocidad = Math.max(0, moto.velocidad - decremento);
    console.log(`${moto.tipo} frenando, velocidad actual: ${moto.velocidad} km/h`);
    return moto;
};

// =======================
// Módulo principal: iniciar viaje
// =======================
const iniciarViaje = (tipo, incremento, decremento) => {
    // Preparar moto
    let moto = prepararMoto(tipo);
    // Encender
    moto = encenderMoto(moto);
    // Acelerar
    moto = acelerar(moto, incremento);
    // Frenar
    moto = frenar(moto, decremento);
    console.log(`Viaje completado con ${moto.tipo} 🏁`);
    return moto;
};

// =======================
// Ejemplo de uso
// =======================
iniciarViaje("Kawasaki Ninja", 80, 30);
iniciarViaje("Harley Davidson", 60, 40);
