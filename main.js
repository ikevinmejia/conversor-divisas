// Seleccionando elementos del DOM

const input = document.querySelector('.input'),
selectContainer = document.querySelector('.select-container'),
button = document.querySelector('.button'),
validacion = document.querySelector('.validacion');

let convertir,
    select1,
    select2,
    divisa1,
    divisa2;

// Variable a iterar
const moneda = ['Elige tu moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano','Euro', 'Libra Esterlina'];

const valorEnUSD = [
    {
        nombre: 'Elige tu moneda',
        valor: null,
    },
    {
        nombre: 'Dolar',
        valor: 1,
    },
    {
        nombre: 'Peso Colombiano',
        valor: 3962.33,
    },
    {
        nombre: 'Peso Mexicano',
        valor: 20.25,
    },
    {
        nombre: 'Euro',
        valor: 0.93,
    },
    {
        nombre: 'Libra Esterlina',
        valor: 0.78,
    },
];

// Creando select y options

const fragment = document.createDocumentFragment();

for (let i = 0; i < 2; i++){
    const creandoSelect = document.createElement('select');
    creandoSelect.classList.add('select');
    creandoSelect.setAttribute('id',`select-${[i]}`);
    fragment.append(creandoSelect);

    moneda.forEach(element => {
        const option = document.createElement('option');
        option.setAttribute('value', element);
        option.textContent = element;
        creandoSelect.append(option);
    });
};

// Añadiendo fragment
selectContainer.append(fragment);


// Formula conversión
const formulaConversion =  (cantidadDinero, seleccion2, seleccion1) => {

    return ((seleccion2)*(cantidadDinero)) / (seleccion1);
};

const conversion = () => {
    if(valorEnUSD[select1].nombre){

        return formulaConversion(input,select1,select2);

    }else{
        console.log('No se pudo');
        console.log(valorEnUSD);
        return 'no se pudo'
    }
}

// Función extrae el nombre y valor del array de objetos de la divisa
const obtenerNombreDivisa = (selector) => {
    return valorEnUSD.find(moneda => moneda.nombre === selector).nombre;
}

const obtenerValorDivisa = (selector) => {
    return valorEnUSD.find(moneda => moneda.nombre === selector).valor;
}


// Eventos
const eventoSelect1 = document.querySelector('#select-0')
    .addEventListener('change', (event) => {
        select1 = event.target.value;

        select1 =  obtenerNombreDivisa(select1);

        console.log(select1);
        divisa1 =  obtenerValorDivisa(select1);
    });

const eventoSelect2 = document.querySelector('#select-1')
    .addEventListener('change', (event) => {
        select2 = event.target.value;

        select2 =  obtenerNombreDivisa(select2);

        divisa2 =  obtenerValorDivisa(select2);

    });

button.addEventListener('click', () =>{

    valorInput = parseInt(input.value).toFixed(2);
    console.log(`Al inicio de la iteración: ${valorInput}`);


    if (isNaN(valorInput)) {
        validacion.textContent = "No has ingresado correctamente un valor númerico";

    } else if ((select1 == undefined) || (select2 == undefined)) {
        validacion.textContent = "Elige los valores a convertir";
    } else if (select1 == select2) {
        convertir = valorInput;
        validacion.innerText = convertir;
    } else {
        validacion.textContent = formulaConversion(valorInput,divisa2,divisa1).toFixed(2);
    }

    console.warn(`Al final de la iteración: ${input}`);

});

