# Arquitectura del frontend

Este documento resume la arquitectura de la aplicación Angular incluida en este repositorio.

## Visión general

La aplicación sigue una arquitectura modular por características (feature modules) y una capa `core` para lógica compartida. Los activos estáticos están en `public/` y son servidos/copied al `dist/` durante el build.

Objetivos:
- Separación clara entre presentación, lógica de negocio y servicios.
- Reutilización mediante servicios y modelos en `core`.
- Estructura por características para facilitar escalabilidad.

## Carpetas principales

- `src/app/core/` — Contiene servicios, modelos y componentes de layout reutilizables.
  - `layout/` — Header y footer (componentes compartidos).
  - `services/` — Servicios como `auth-service.ts`, `user.service.ts`.
  - `models/` — Modelos TypeScript (usuarios, login, servicios).

- `src/app/features/` — Implementaciones por característica:
  - `home/` — Páginas de inicio, hero, contacto, servicios, etc.
  - `auth/` — Login, registro y recuperación de contraseña.
  - `admin/` — Vistas y herramientas administrativas (gestión de usuarios y servicios).

- `src/` — Entradas como `main.ts`, `index.html`, `styles.scss`.
- `public/` — Imágenes y recursos estáticos (copiados al build según `angular.json`).

## Flujo de datos y servicios

- La comunicación con APIs externas se realiza típicamente mediante servicios en `core/services`. Estos servicios usan `HttpClient` (no incluido explícitamente en este repo, pero estándar en Angular) para hacer peticiones REST.
- Los componentes consumen servicios a través de inyección de dependencias y reciben datos en forma de Observables (RxJS). La UI se suscribe o utiliza el pipe `async` para consumir dichos Observables.

## Convenciones

- Estilos: SCSS para componentes y estilos globales en `src/styles.scss`.
- Nombres: Las carpetas de características usan nombres en plural (`features`, `services`).
- Tests: Archivos `.spec.ts` acompañan varios componentes y servicios para pruebas unitarias con Karma/Jasmine.

## Build y despliegue

- El build está configurado en `angular.json`. Los assets en `public/` se incluyen automáticamente.
- Para crear una versión de producción ejecutar `npm run build` — el resultado se encuentra en `dist/`.

## Extensiones y mejoras sugeridas

- Añadir un módulo compartido (`shared/`) para componentes y pipes reutilizables.
- Implementar manejo centralizado de errores en un interceptor HTTP.
- Añadir documentación de las API (por ejemplo OpenAPI) y un servicio genérico para llamadas a la API.
