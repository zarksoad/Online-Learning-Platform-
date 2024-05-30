# Online Learning Platform (O.L.P)

## Documento del proyecto
Enlace del documento del proyecto: [Proyecto OLP Grupo6](https://docs.google.com/document/d/13r3BQd9PYCIBlERMNlIMPHhYPDaHPW-JxItki-8Q9W4/edit?usp=sharing)

## Resumen Ejecutivo

### Título del Proyecto
Online Learning Platform (O.L.P)

### Descripción
O.L.P es un sistema de aprendizaje interactivo diseñado para la formación de trabajadores en diversas áreas. Este proyecto se enfoca en enseñar una variedad de habilidades y conocimientos a través de un enfoque lúdico que facilita el aprendizaje. Los trabajadores se motivarán mediante un sistema de puntos por cada módulo completado, y podrán visualizar los puntos de otros participantes para fomentar una competencia saludable.

### Objetivos del Proyecto
- Mejorar los tiempos de capacitación del personal.
- Fomentar una competencia sana entre los trabajadores para incrementar la motivación y el compromiso.
- Proveer una plataforma robusta con recursos educativos, retos y herramientas integradas.

## Equipo de Desarrollo

### Desarrolladores y Roles
- **Christian Camilo Pabón**: UX, Front End
- **Daniel Alejandro Sánchez Ángel**: Back End
- **Harold Medrano Emiliani**: Back End, Organizador de requerimientos
- **Hernán Darío Vergara Viana**: UI, Front End
- **Rafael Eduardo Meza San Martín**: Back End, Front End

## Planteamiento del Problema
Al avanzar en RIWI, tenemos trabajos semanales, sin embargo, necesitamos buscar ejercicios similares para practicar los conocimientos que aprendemos diariamente. Nos hemos visto obligados a usar IA para encontrar ejercicios similares a los propuestos en las clases, con el fin de mantenernos al día y mejorar nuestro dominio de lo aprendido. Usar la O.L.P de RIWI nos permitirá practicar de manera más fácil cada módulo que vayamos cursando o incluso adelantarnos al siguiente, para tener una mejor idea de lo que se va a realizar. No tendremos que buscar en otras fuentes ejercicios, ya que los tendremos como una herramienta interna.

## Alcance del Proyecto

### Corto Plazo
- Implementación de la estructura de navegación (barra lateral y barra de navegación).
- Desarrollo de rutas de aprendizaje básicas y retos iniciales.
- Integración del foro para discusión en cada módulo.

### Mediano Plazo
- Creación de vistas para retos diarios, semanales y mensuales.
- Introducción de la visualización de rutas y módulos.

### Largo Plazo
- Integración completa del sistema de auditoría y respaldo de información.
- Desarrollo de la herramienta de compilador integrada.
- Implementación de roles específicos y retos realizados por los administradores.

### Actividades Fuera de Alcance
- Integración con plataformas de terceros para recursos educativos adicionales.
- Desarrollo de aplicaciones móviles nativas.

## Requisitos Funcionales/Historias de Usuario

### Requisitos Funcionales
- **Navegación y Acceso:** Barra lateral y barra de navegación accesibles e intuitivas.
- **Gestión de Rutas de Aprendizaje:** Entidades claras y bien definidas para rutas, lenguajes y módulos.
- **Interactividad:** Vista de retos con funcionalidad de desbloqueo de premios.
- **Visualización:** Representación gráfica de rutas y módulos.

### Requisitos No Funcionales
- **Seguridad:** Auditoría completa de acciones de los usuarios, renovación de contraseñas periódica, copias de seguridad regulares.
- **Rendimiento:** Respuesta rápida y eficiente en todas las funcionalidades.
- **Usabilidad:** Interfaz amigable y accesible para todos los usuarios.
- **Escalabilidad:** Sistema diseñado para manejar un gran número de usuarios y datos.

## Tablero de Actividades
Enlace al Tablero de Azure: [Tablero de Azure](https://dev.azure.com/group-6-olp-ritchie/OLP-Ritchie-Grupo6)

## Diseño Prototipo
Enlace al Prototipo en Figma: [Prototipo en Figma](https://www.figma.com/proto/lt1hM9bEW1kjm7UOH8Z2Ky/Grupo-6?node-id=4-4&t=3wfLS0PFjM2X2wYT-1&scaling=scale-down&page-id=4%3A2)

## Cronograma del Proyecto

### Fases del Proyecto

#### Fase 1: Planificación
- Reunión inicial del equipo.
- Definición de requerimientos y alcance.

#### Fase 2: Diseño
- Creación de wireframes y prototipos.
- Diseño de la arquitectura del sistema.

#### Fase 3: Desarrollo
- Implementación de la estructura de navegación.
- Desarrollo de rutas de aprendizaje y retos.
- Integración del foro y clasificación.

#### Fase 4: Pruebas
- Pruebas unitarias y de integración.
- Pruebas de usabilidad y rendimiento.

#### Fase 5: Despliegue
- Configuración del entorno de producción.
- Despliegue de la plataforma.

#### Fase 6: Mantenimiento
- Monitoreo y soporte continuo.
- Actualizaciones y mejoras.

## Configuración del Entorno

### Tecnologías Utilizadas
- HTML
- CSS
- JavaScript
- Node.js
- PostgreSQL

### Método de Implementación
- Single Page Application (SPA)

### Inicialización del Proyecto
- Clonar el repositorio del proyecto.
- Ejecutar `npm install` en las carpetas de backend y frontend.
- Ejecutar `npm start` en cada carpeta para iniciar el servidor backend y el servidor frontend.

## Conclusión
El proyecto O.L.P representa una herramienta para transformar la manera en que los trabajadores se capacitan, practican y se motivan. Con un enfoque interactivo, buscamos no solo enseñar habilidades extras, sino también inspirar a la próxima generación de trabajadores a través de la competencia y la práctica.


# Estructura General de la aplicacion

## Descripción

En este proyecto, se implementa un dashboard de una aplicación web de una sola página (SPA) utilizando Webpack y Babel. El dashboard consta de varias escenas, como la vista principal, la vista de inicio, la vista de informes y la vista de configuración. Cada escena contiene componentes reutilizables, como la barra

de navegación, el menú lateral y el formulario de inicio de sesión. El proyecto está estructurado de acuerdo con las mejores prácticas de desarrollo web y utiliza tecnologías modernas para optimizar el rendimiento y la eficiencia del código.

## Estructura del proyecto Front-end
```txt
ritchie-olp-2024-1-js-ms/
│
├── dist/                       # Carpeta de salida de archivos generados por Webpack
│
├── app/                        # Carpeta de código fuente
│   ├── api/    
│   │   └── api.js
│   ├── assets/                 # Imágenes, fuentes, etc.
│   │   ├── img/
│   │   │   ├── estrellas.webp
│   │   │   └── favicon.ico
│   ├── components/             # Componentes reutilizables globales
│   │   ├── custom-component-example/
│   │   │   └── custom-component-example.js
│   │   ├── form-components/
│   │   │   ├── form-validator.js
│   │   │   └── handle-errors.js
│   │   ├── layout/
│   │   │   └── index.js
│   │   ├── link/
│   │   │   └── link.js
│   │   ├── navigation-bar/
│   │   │   ├── navigation-bar.js
│   │   │   └── navigation-bar.css
│   │   └── sidebar-menu/
│   │       ├── sidebar-menu.js
│   │       └── sidebar-menu.css
│   ├── helpers/                # Ayudantes
│   │   ├── fetch-apis.js
│   │   ├── form-validator.js
│   │   ├── handle-error.js
│   │   ├── index.js
│   │   ├── log-out.js
│   │   ├── props.js
│   │   └── router.js
│   ├── scenes/                 # Diferentes escenas para la aplicación
│   │   ├── private/            # Escenas privadas
│   │   │   ├── aprendizaje/
│   │   │   │   ├── aprendizaje.css
│   │   │   │   ├── index.js
│   │   │   │   └── aprendizaje.js
│   │   │   ├── audit/
│   │   │   │   ├── audit.css
│   │   │   │   ├── index.js
│   │   │   │   └── audit.js
│   │   │   ├── challenges/
│   │   │   │   ├── challenge-by-id.js
│   │   │   │   ├── challenge.css
│   │   │   │   ├── challenge.js
│   │   │   │   ├── create-challenge.js
│   │   │   │   └── index.js
│   │   │   ├── forum/
│   │   │   │   ├── forum.css
│   │   │   │   ├── index.js
│   │   │   │   └── forum.js
│   │   │   ├── games/
│   │   │   │   ├── games.css
│   │   │   │   ├── index.js
│   │   │   │   └── games.js
│   │   │   ├── home/
│   │   │   │   ├── home.css
│   │   │   │   ├── index.js
│   │   │   │   └── home.js
│   │   │   ├── modules/
│   │   │   │   ├── module-create.js
│   │   │   │   ├── index.js
│   │   │   │   ├── modules.js
│   │   │   │   └── module-form.js
│   │   │   ├── posts/
│   │   │   │   ├── post.css
│   │   │   │   ├── utils.js
│   │   │   │   └── post.js
│   │   │   ├── profile/
│   │   │   │   ├── profile.css
│   │   │   │   ├── index.js
│   │   │   │   └── profile.js
│   │   │   ├── settings/           # Escena de Settings dentro del dashboard
│   │   │   │   ├── settings.css
│   │   │   │   ├── settings.js
│   │   │   │   └── components/
│   │   │   ├── reports/            # Escena de Reports dentro del dashboard
│   │   │   │   ├── reports.css
│   │   │   │   └── reports.js
│   │   │   └── showcases/          # Escena de Showcases dentro del dashboard
│   │   │       ├── showcase.css
│   │   │       ├── showcase.js
│   │   │       └── img/
│   │   │           └── mi-image.jpg
│   │   ├── public/             # Escenas públicas
│   │   │   ├── about-us/
│   │   │   │   ├── index.js
│   │   │   │   └── about-us.js
│   │   │   ├── login/
│   │   │   │   ├── components/
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── login.js
│   │   │   │   └── index.js
│   │   │   ├── profile/
│   │   │   │   ├── profile.css
│   │   │   │   └── profile.js
│   │   │   └── register/
│   │   │       ├── register.css
│   │   │       └── register.js
│   │   └── users/              # Escena de Users dentro del dashboard
│   │       ├── user.css
│   │       └── user.js
│   ├── styles/                 # Estilos globales
│   │   └── global.css
│   ├── App.js                  # Archivo principal de nuestra app SPA
│   ├── index.js                # Archivo principal de JavaScript
│   └── Router.js               # Archivo de configuración de rutas de nuestra app SPA
│
├── .babelrc                    # Archivo de configuración de Babel
├── .gitignore                  # Archivo de ocultar archivos/directorios a Git
├── backend-requests.http       # Archivo de ejemplo para realizar solicitudes HTTP
├── index.html                  # Archivo principal de HTML
├── package-lock.json           # Dependencias del proyecto con versiones exactas
├── package.json                # Dependencias del proyecto y scripts
├── webpack.config.js           # Archivo de configuración de Webpack
├── README.md                   # Documentación del proyecto
│
├── db.json                     # Archivo de base de datos JSON
│
├── learning-tips/              # Consejos de aprendizaje
│   ├── img/
│   ├── babel.md
│   ├── env.md
│   ├── fetch-apis.md
│   ├── folder-structure.md
│   ├── helpers.md
│   ├── router.md
│   ├── spa.md
│   ├── web-components.md
│   └── webpack.md
│
└── bundle/
    ├── assets/
    ├── bundle.js
    ├── bundle.js.LICENSE.txt
    ├── index.html
    └── main.302707f0304b4b3c3942.css
                # Documentación del proyecto
```

## Estructura de directorios Back-end

```txt
ritchie-olp-2024-1-js-ms/
│
├── learning-tips/                       # Consejos de aprendizaje
│   ├── middlewares.md                   # Explicación de middlewares
│   ├── mvc.md                           # Explicación de la arquitectura MVC (Model-View-Controller)
│   ├── postgresql-commands.md           # Comandos CRUD de PostgreSQL
│   └── status.md                        # Explicación de los códigos de estado HTTP y casos de uso
│
├── src/                                 # Código fuente
│   ├── config/                          # Configuración general (Base de datos, variables de entorno)
│   │   └── database-mysql.js            # Conexión a la base de datos MySQL
│   ├── controllers/                     # Controladores
│   │   ├── auditController.js           # Controlador de auditoría
│   │   ├── challengeController.js       # Controlador de desafíos
│   │   ├── languageController.js        # Controlador de lenguajes
│   │   ├── moduleController.js          # Controlador de módulos
│   │   ├── routeController.js           # Controlador de rutas
│   │   └── userController.js            # Controlador de usuarios
│   ├── helpers/                         # Ayudantes
│   │   ├── hashed_password.js           # Manejo de contraseñas cifradas
│   │   └── unleash-welcome-a-la-nico.js # Archivo de bienvenida
│   ├── middlewares/                     # Middlewares personalizados
│   │   └── authMiddleware.js            # Middleware de autenticación
│   ├── models/                          # Modelos de base de datos
│   │   ├── auditTrailModel.js           # Modelo de auditoría
│   │   ├── challengeModel.js            # Modelo de desafío
│   │   ├── languageModel.js             # Modelo de lenguaje
│   │   ├── moduleModel.js               # Modelo de módulo
│   │   └── userModel.js                 # Modelo de usuario
│   ├── routes/                          # Definición de rutas
│   │   ├── private/                     # Rutas privadas
│   │   │   ├── auditTrailRoutes.js      # Rutas de auditoría
│   │   │   ├── challengeRoutes.js       # Rutas de desafíos
│   │   │   ├── forumRoutes.js           # Rutas de foro
│   │   │   ├── languageRoutes.js        # Rutas de lenguajes
│   │   │   ├── moduleRoutes.js          # Rutas de módulos
│   │   │   ├── routeRoutes.js           # Rutas de rutas
│   │   │   └── userRoutes.js            # Rutas de usuarios
│   │   ├── public/                      # Rutas públicas
│   │   │   └── authRoutes.js            # Rutas de autenticación
│   │   └── router.js                    # Punto de entrada de rutas
│   ├── app.js                           # Configuración y rutas de la aplicación
│   └── server.js                        # Inicio del servidor
│
├── .env                                 # Variables de entorno (como la URL de la base de datos, puerto del servidor, etc.)
├── .gitignore                           # Archivos a ignorar por git
├── package.json                         # Dependencias del proyecto
├── package-lock.json                    # Bloqueo de versiones de las dependencias
├── README.md                            # Documentación del proyecto
└── request.http                         # Archivo de ejemplo para realizar solicitudes HTTP

```

# Basic Node.js API users CRUD back-end

## Descripción

API básica de Node.js con Express y PostgreSQL para realizar operaciones CRUD en una tabla de usuarios y autenticación de usuarios con JWT. Este proyecto tiene como propósito servir de base para proyectos más complejos.

## Pre-requisitos

Los requisitos para ejecutar este proyecto son:

```bash
npm install npm@latest -g
```

## Instalación

1. Clonar el repositorio:

```bash
git clone
```

2. Instalar las dependencias:

```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```env
PORT = 4000
DATABASE_URL=postgres://default:pMGZQUc0h1vt@ep-polished-term-a4mniado-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require
JWT_SECRET=mySecretKey
```

Nota: No hay necesidad de crear la base de datos pues ya esta creada en vercel.

4. Ejecutar el proyecto:

```bash
npm start
```

## Dependencias

- [Express](https://expressjs.com/es/): Framework de Node.js para crear aplicaciones web y APIs.
- [pg](https://node-postgres.com/): Cliente de PostgreSQL para Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Módulo que carga variables de entorno desde un archivo `.env`.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Implementación de JSON Web Tokens (JWT) para Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Librería para encriptar contraseñas.
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS en Express.

## Tecnologías

- Node.js - Entorno de ejecución para JavaScript
- Express - Infraestructura web rápida, minimalista y flexible para Node.js
- PostgreSQL - Sistema de gestión de bases de datos relacional objeto