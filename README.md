# PoliFront

Aplicación frontend en Angular para el proyecto Poligran.

## Resumen

Este repositorio contiene la aplicación de interfaz (frontend) desarrollada con Angular (v20) y SCSS. Incluye una estructura modular por características (`features`) y una carpeta `core` con servicios y modelos compartidos. Los activos estáticos (imágenes, iconos, slider) se almacenan en la carpeta `public`.

## Tecnologías

- Angular 20
- TypeScript
- SCSS
- Bootstrap 5
- RxJS
- SweetAlert2

## Requisitos

- Node.js (>= 18 recomendado)
- npm (>= 9) o pnpm/yarn
- Angular CLI (opcional, se instala localmente como dependencia de dev)

## Instalación

1. Clonar el repositorio:

   git clone <repositorio>
   cd PoliFront

2. Instalar dependencias:

   npm install

3. Levantar el servidor de desarrollo:

   npm start

El servidor por defecto usa la configuración `development` definida en `angular.json`.

## Scripts disponibles

Extraídos de `package.json`:

- `npm start` — Ejecuta `ng serve` (servidor de desarrollo).
- `npm run build` — Construye la aplicación para producción (`ng build`).
- `npm run watch` — Construcción en modo watch para desarrollo.
- `npm test` — Ejecuta pruebas con Karma/Jasmine.

## Estructura del proyecto (resumen)

- `src/` — Código fuente de la aplicación.
  - `app/` — Módulos y componentes principales.
    - `core/` — Servicios, modelos y layout compartidos (header/footer).
    - `features/` — Carpetas por características (home, auth, admin, ...).
  - `main.ts`, `index.html`, `styles.scss` — Entradas principales.
- `public/` — Activos estáticos que se copian al build (imágenes, slider).
- `angular.json` — Configuración del build y serve.
- `package.json` — Scripts y dependencias.

## Diagramas y arquitectura

La documentación de arquitectura con diagramas (Mermaid) está en `docs/ARCHITECTURE.md`. Ahí encontrarás:

- Diagrama de la arquitectura general (cliente, app, backend).
- Diagrama resumido de la estructura de carpetas.
- Flujo de autenticación (login) como secuencia.


## Cómo contribuir

1. Crear una rama descriptiva: `git checkout -b feat/nombre-cambios`.
2. Hacer commits pequeños y descriptivos.
3. Abrir un pull request hacia `main` cuando esté listo para revisión.

## Quick Start (rápido)

1. Clonar el repositorio y entrar en la carpeta:

    git clone <repositorio>
    cd PoliFront

2. Instalar dependencias:

    npm install

3. Iniciar en modo desarrollo:

    npm start

Visita http://localhost:4200.

## Workflow de desarrollo recomendado

- Branches:
   - `main` — rama estable y desplegada.
   - `develop` (opcional) — integración de features antes de PR a main.
   - `feat/<descripcion>` — nuevas funcionalidades.
   - `fix/<descripcion>` — correcciones.

- Commits:
   - Mensajes en inglés o español claros: `feat: agregar validación de email`.
   - Haz commits pequeños y atómicos.

- Pull Requests:
   - Incluye descripción, screenshots y pasos para probar.
   - Asigna reviewers y etiqueta el tipo de cambio (feature/bugfix/docs).

## Variables de entorno (ejemplo)

Este frontend debe apuntar a una API; evita hardcodear URLs. Ejemplo de `.env` o `src/environments`:

```
API_BASE_URL=https://api.ejemplo.com
AUTH_TOKEN_EXPIRY=3600
```

En Angular, es habitual tener `src/environments/environment.ts` y `src/environments/environment.prod.ts` con la propiedad `apiUrl`.

## Testing

- Unit tests (Karma + Jasmine):

   npm test

- Recomendación: añadir tests para servicios críticos (auth, user service) y componentes con lógica.

## Build y despliegue

- Producción:

   npm run build

   El contenido de `dist/` puede servir desde Nginx, Apache o servicios estáticos (Netlify, S3).

- Consideraciones:
   - Configura CORS en el backend si es necesario.
   - Para rutas con SPA, configura el servidor para redirigir 404 a `index.html`.


## Notas adicionales

- La configuración del build está en `angular.json`. La configuración por defecto de `serve` usa `development`.
- Para producción, ejecutar `npm run build` y desplegar el contenido de `dist/` en el servidor web.

---

Si quieres, puedo generar documentación adicional (archivo de arquitectura, setup detallado y guía de pruebas). ¿Deseas que lo haga? 
# link de despliegue
[polifront.netlify.app](https://polifront.netlify.app/)


# Poligran

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# PoliFront
