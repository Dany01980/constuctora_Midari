class Proyecto {
    constructor(nombreProyecto) {
        this.nombreProyecto = nombreProyecto;
    }

    // Getter
    getNombreProyecto() {
        return this.nombreProyecto;
    }

    // Setter
    setNombreProyecto(nombreProyecto) {
        this.nombreProyecto = nombreProyecto;
    }
}

class Trabajador extends Proyecto {
    constructor(nombreProyecto, nombreTrabajador, rutTrabajador, cargoTrabajador) {
        super(nombreProyecto);
        this.nombreTrabajador = nombreTrabajador;
        this.rutTrabajador = rutTrabajador;
        this.cargoTrabajador = cargoTrabajador;
    }

    // Getters
    getNombreTrabajador() {
        return this.nombreTrabajador;
    }

    getRutTrabajador() {
        return this.rutTrabajador;
    }

    getCargoTrabajador() {
        return this.cargoTrabajador;
    }

    // Setters
    setNombreTrabajador(nombreTrabajador) {
        this.nombreTrabajador = nombreTrabajador;
    }

    setRutTrabajador(rutTrabajador) {
        this.rutTrabajador = rutTrabajador;
    }

    setCargoTrabajador(cargoTrabajador) {
        this.cargoTrabajador = cargoTrabajador;
    }
}

// Método para buscar trabajadores por nombre usando prototype y mostrar en pantalla
Trabajador.prototype.buscarPorNombre = function (nombre) {
    if (this.nombreTrabajador.toLowerCase() === nombre.toLowerCase()) {
        const resultadoBusqueda = document.getElementById('resultadoBusqueda');
        resultadoBusqueda.innerHTML = `
        <tr>
            <td>${this.getNombreProyecto()}</td>
            <td>${this.getNombreTrabajador()}</td>
            <td>${this.getRutTrabajador()}</td>
            <td>${this.getCargoTrabajador()}</td>
        </tr>
        `;
    }
};

// Método para mostrar todos los datos de los trabajadores usando prototype y mostrar en pantalla
Trabajador.prototype.mostrarDatos = function () {
    const tbody = document.getElementById('proyectoTrabajador');
    const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${this.getNombreProyecto()}</td>
        <td>${this.getNombreTrabajador()}</td>
        <td>${this.getRutTrabajador()}</td>
        <td>${this.getCargoTrabajador()}</td>
    `;

    tbody.appendChild(fila);
};

const trabajadores = [];

document.getElementById('proyectoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreProyecto = document.getElementById('proyecto').value;
    const nombreTrabajador = document.getElementById('trabajador').value;
    const rutTrabajador = document.getElementById('rut').value;
    const cargoTrabajador = document.getElementById('cargo').value;

    // Instanciar un nuevo proyecto
    const nuevoProyecto = new Proyecto(nombreProyecto);

    // Instanciar un nuevo trabajador asociado al proyecto
    const nuevoTrabajador = new Trabajador(
        nuevoProyecto.getNombreProyecto(),
        nombreTrabajador,
        rutTrabajador,
        cargoTrabajador
    );

    trabajadores.push(nuevoTrabajador);

    // Mostrar el trabajador en la tabla
    nuevoTrabajador.mostrarDatos();

    // Limpiar el formulario
    document.getElementById('proyectoForm').reset();
});

// Ejemplo de uso del método buscarPorNombre
function buscarTrabajador(nombre) {
    // Limpiar la búsqueda previa
    document.getElementById('resultadoBusqueda').innerHTML = '';
    trabajadores.forEach(trabajador => trabajador.buscarPorNombre(nombre));
}

// Ejemplo de uso del método mostrarTodosLosTrabajadores
function mostrarTodosLosTrabajadores() {
    document.getElementById('proyectoTrabajador').innerHTML = '';
    trabajadores.forEach(trabajador => trabajador.mostrarDatos());
}

// Capturar la búsqueda de trabajadores por nombre
document.getElementById('buscarForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('buscarNombre').value;
    buscarTrabajador(nombre);
});
