$(document).ready(function () {
    // Opción más simple: usar directamente las utilidades para configurar el idioma
    $("#detallePermisos").DataTable({
        "responsive": true,
        "autoWidth": false,
        "pageLength": 10,
        // Usar el idioma predefinido pero personalizado para usuarios
        "language": DataTableUtils.customizeLanguageFor('usuarios')
    });
});