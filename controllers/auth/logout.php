<?php

/**
 * Procesador de Logout
 * 
 * Este archivo procesa el cierre de sesión
 * 
 * @author Sistema de Calzados y Carteras
 * @version 1.0
 */

// Iniciar sesión si no está iniciada
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Incluir el controlador de autenticación
require_once __DIR__ . '/AuthController.php';

// Crear instancia del controlador
$authController = new AuthController();

// Procesar logout
$authController->logout();
