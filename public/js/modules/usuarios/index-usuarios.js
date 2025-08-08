$(document).ready(function () {
    const config = createTableConfig('Usuarios', [0, 1, 2, 3, 4, 6, 7], {
        pageLength: 5
    });

    // Inicializar DataTable con la configuración generada
    const table = $("#tablaUsuarios").DataTable(config);

    // Mover los botones al contenedor adecuado (si es necesario)
    table.buttons().container().appendTo('#tablaUsuarios_wrapper .col-md-6:eq(0)');
});

document.addEventListener('DOMContentLoaded', function () {
    const botonesCambiarEstado = document.querySelectorAll('.btn-cambiar-estado');

    botonesCambiarEstado.forEach(boton => {
        boton.addEventListener('click', function () {
            const usuarioId = this.dataset.id;
            const estadoActual = this.dataset.estado;
            const nombreUsuario = this.dataset.nombre;

            const tituloAlerta = estadoActual == 1 ? `¿Desactivar a ${nombreUsuario}?` : `¿Activar a ${nombreUsuario}?`;
            const textoAlerta = estadoActual == 1 ? 'El usuario no podrá acceder al sistema.' : 'El usuario podrá acceder nuevamente al sistema.';
            const confirmButtonText = estadoActual == 1 ? 'Sí, desactivar' : 'Sí, activar';
            const cancelButtonText = 'Cancelar';

            Swal.fire({
                title: tituloAlerta,
                text: textoAlerta,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: estadoActual == 1 ? '#d33' : '#3085d6',
                cancelButtonColor: '#6c757d',
                confirmButtonText: confirmButtonText,
                cancelButtonText: cancelButtonText
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `${baseUrl}controllers/usuarios/desactivar_usuario.php?id=${usuarioId}&estado=${estadoActual}`;
                }
            });
        });
    });
});