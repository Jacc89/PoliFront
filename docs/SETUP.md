# Guía de instalación y ejecución

Este documento explica cómo configurar, ejecutar y hacer build del proyecto en un entorno local.

## Requisitos previos

- Node.js (recomendado >= 18)
- npm (>= 9) o alternativa compatible (pnpm/yarn)
- Git (para clonar el repositorio)

## Instalación local

1. Clonar el repositorio y entrar en la carpeta del proyecto:

   git clone <repositorio>
   cd PoliFront

2. Instalar dependencias:

   npm install

Si usas `pnpm` o `yarn` reemplaza `npm install` por `pnpm install` o `yarn`.

## Desarrollo

- Ejecutar servidor de desarrollo:

  npm start

  Esto lanza `ng serve` y sirve la app en `http://localhost:4200/` por defecto.

- Build en modo watch (reconstruye al cambiar archivos):

  npm run watch

## Pruebas

- Ejecutar pruebas unitarias con Karma/Jasmine:

  npm test

## Producción

- Construir para producción:

  npm run build

  El contenido generado se sitúa en `dist/` y puede desplegarse en cualquier servidor web estático (Netlify, Surge, Nginx, Apache, S3, etc.).

## Variables de entorno y APIs

- Este repositorio es sólo el frontend. La configuración de la URL de la API y variables sensibles deben centralizarse (por ejemplo en `environments/` si se agrega) y no deben incluirse en el control de versiones.

### Ejemplo: `src/environments/environment.ts`

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Ejemplo: `src/environments/environment.prod.ts`

```ts
export const environment = {
  production: true,
  apiUrl: 'https://api.mi-dominio.com/api'
};
```

Coloca estos archivos en `src/environments/` y usa `environment.apiUrl` desde tus servicios.

## Instrucciones específicas para Windows

- Usando Git Bash/WSL (bash): los comandos `git clone`, `npm install` y `npm start` funcionan igual que en Linux/Mac.
- Usando PowerShell (recomendado en Windows nativo): abre PowerShell como usuario normal (no es necesario admin) e instala Node.js. Luego:

```powershell
git clone <repositorio>
cd PoliFront
npm install
npm start
```

- Si tienes problemas con permisos en `node_modules`, elimina `node_modules` y vuelve a ejecutar `npm install`.

## Configuración de proxy para APIs en desarrollo

Si tu API está en otro puerto y quieres evitar problemas CORS en desarrollo, puedes usar el proxy de Angular creando `proxy.conf.json` en la raíz:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}
```

Y arrancar `ng serve` con:

```bash
ng serve --proxy-config proxy.conf.json
```

O agrega la opción en tu `package.json` script si lo prefieres.


## Resolución de problemas comunes

- Error de compatibilidad de Node: usa la versión recomendada y reinstala `node_modules` eliminando `node_modules/` y `package-lock.json`.
- Puertos ocupados: verifica que `4200` esté libre o usa `ng serve --port <otro-puerto>`.

## Notas para despliegue

- Si el backend está en otro dominio, asegúrate de configurar CORS en el servidor.
- Para hosting estático, copia el contenido de `dist/` al servidor.
