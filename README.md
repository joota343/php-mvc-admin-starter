# PHP MVC Admin Starter — Auth, Users & Admin Panel Boilerplate

[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github)](https://github.com/joota343/php-mvc-admin-starter/releases)

![Admin Panel Preview](https://raw.githubusercontent.com/ColorlibHQ/AdminLTE/master/dist/img/AdminLTELogo.png)  
![PHP](https://www.php.net/images/logos/new-php-logo.svg) ![Bootstrap](https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg) ![AdminLTE](https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png)

Descripción: 🚀 Sistema base PHP con autenticación, gestión de usuarios y permisos. MVC + AdminLTE + Bootstrap — PHP Authentication & User Management Boilerplate.

Topics: admin-panel, adminlte, authentication, boilerplate, bootstrap, datatables, mvc, permissions, php, starter-template, tcpdf, user-management

Table of contents
- About
- Key features
- Demo screenshots
- Tech stack
- Quick install
- Configuration
- Database & migrations
- Authentication, roles & permissions
- AdminLTE and UI
- DataTables
- PDF exports (TCPDF)
- Customization
- File layout
- Common commands
- Releases

About
This repository gives a compact, production-minded base for PHP projects that need an admin panel. It follows MVC patterns and ships with an auth system, role-based permissions, user CRUD, responsive UI, and PDF export support. Use it to build internal tools, admin dashboards, or control panels.

Key features
- MVC folder layout and simple router
- Authentication (login, logout, password reset)
- User management (create, edit, assign roles)
- Role and permission checks (middleware-ready)
- AdminLTE + Bootstrap UI
- DataTables for list views
- TCPDF for PDF generation
- Basic audit fields and activity log
- Composer-based dependencies
- Ready-to-use seed data and sample users

Demo screenshots
![Dashboard](https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png)
![Users Table](https://upload.wikimedia.org/wikipedia/commons/0/0b/Table_demo.png)

Tech stack
- PHP 8.x
- Composer for dependency management
- MySQL / MariaDB
- AdminLTE 3 (front-end)
- Bootstrap 5
- jQuery + DataTables
- TCPDF for PDF export
- .env config (dotenv)

Quick install
1. Clone the repository
   git clone https://github.com/joota343/php-mvc-admin-starter.git
2. Enter project folder
   cd php-mvc-admin-starter
3. Install PHP dependencies
   composer install
4. Copy environment file
   cp .env.example .env
5. Create database and update .env with DB credentials
6. Run migrations and seeders (see Database & migrations)

Use the built-in PHP server for local testing:
php -S localhost:8000 -t public

Configuration
Open .env and set:
- APP_ENV — local or production
- APP_URL — http://localhost:8000
- DB_HOST, DB_NAME, DB_USER, DB_PASS
- MAIL settings if you need password reset emails

If you use Apache or Nginx, point the web root to the project’s public/ folder. The front controller index.php handles requests.

Database & migrations
This starter includes SQL migration scripts and seeders.

Typical flow:
- Create the database:
  CREATE DATABASE mvc_admin CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
- Run migrations:
  php bin/migrate.php up
- Seed sample data:
  php bin/seed.php users roles permissions

If your environment does not support the migration script, import the SQL file from the releases page. Download the release file from https://github.com/joota343/php-mvc-admin-starter/releases and run the included SQL import script or execute the SQL file with your database client.

Authentication, roles & permissions
Auth system components
- Controllers: AuthController, UserController
- Models: User, Role, Permission
- Middlewares: AuthMiddleware, RoleMiddleware, PermissionMiddleware
- Helpers: Auth, Hash, Session

Roles and permissions
- Assign roles to users via the User edit screen.
- Assign permissions to roles.
- Use middleware to protect routes.

Example route protection (pseudo):
$route->add('/admin/users', 'UserController@index', ['middleware' => ['auth', 'permission:users.view']]);

Check permission in code:
if (Auth::user()->can('users.edit')) {
  // allow edit
}

Users and password storage
- Passwords use password_hash() with PASSWORD_DEFAULT.
- Password resets generate a token, store it with expiry, and send an email link.
- Admin users have a flag and role assignment in the users table.

AdminLTE and UI
This project uses AdminLTE 3 with Bootstrap 5. It includes:
- Responsive topbar and sidebar
- Widget cards for stats
- User profile and avatar support
- Theme toggles

Customize layout
- Edit views in app/Views/layouts
- Override menu in app/Config/menu.php
- Add new pages under app/Controllers and app/Views

DataTables
List pages use DataTables for pagination, search, and sorting.
- Server-side processing endpoints exist under api/users or api/logs.
- Use the built-in JS helper in public/js/datatables.js to initialize tables.

Example init:
$('#users-table').DataTable({
  ajax: '/api/users',
  columns: [/*...*/]
});

PDF exports (TCPDF)
The project bundles TCPDF for server-side PDF generation.
- Export user reports from UsersController->exportPdf
- Templates live in app/Views/pdf
- Use the Pdf helper:
$pdf = new Pdf();
$pdf->AddPage();
$pdf->writeHTML($html);
$pdf->Output('users_report.pdf', 'D');

Customization
- Add new modules under app/Modules. Follow the MVC folder pattern.
- Replace AdminLTE assets in public/assets to apply a custom theme.
- Add new middleware classes to app/Middleware and register in app/Config/middleware.php.
- Extend the Role and Permission tables when you need granular checks.

File layout
- app/
  - Controllers/
  - Models/
  - Views/
  - Middleware/
  - Config/
- public/
  - index.php
  - assets/
- bin/
  - migrate.php
  - seed.php
  - console.php
- vendor/
- .env.example
- composer.json

Common commands
- Start server:
  php -S localhost:8000 -t public
- Run migrations:
  php bin/migrate.php up
- Run seeders:
  php bin/seed.php all
- Create a user via console:
  php bin/console make:user --email=admin@example.com --role=admin

Integrations and tips
- Use Composer to add packages.
- Use a process manager (supervisord) in production for workers and jobs.
- Set file permissions on storage and cache folders.
- Use strong DB user permissions and SSL in production.

Contributing
- Fork the repo
- Create a feature branch
- Make tests and commit
- Open a pull request with a clear description and changelog entry

License
This project uses the MIT license. See LICENSE for full text.

Releases
Download the release file and run the included setup script. Visit the releases page and pick the archive for your environment:
[Get releases and installer](https://github.com/joota343/php-mvc-admin-starter/releases)

Maintainers
- joota343

Contact
Open issues on the repository for bugs, feature requests, or help with setup.