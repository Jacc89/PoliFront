# Contribuir al proyecto PoliFront

Gracias por querer contribuir. Estas son las normas recomendadas para facilitar revisiones y mantener la calidad del código.

## Flujo de trabajo (branches)

- `main`: rama estable y desplegable.
- `develop` (opcional): rama de integración.
- `feat/<descripcion>`: nuevas funcionalidades.
- `fix/<descripcion>`: correcciones de bugs.
- `chore/<descripcion>`: tareas de mantenimiento.

Antes de empezar, sincroniza tu rama con `main`:

```bash
git fetch origin
git checkout -b feat/mi-cambio
```

## Commits

- Usa mensajes descriptivos y en formato corto + cuerpo opcional.
- Ejemplos:
  - `feat: agregar validación de email en login`
  - `fix: corregir error en carga de imagenes`

## Pull Request (PR)

Incluye en la descripción:

- Resumen del cambio.
- Issue relacionado (si aplica).
- Pasos para probar localmente.
- Capturas de pantalla si afectan UI.

Checklist mínima para PRs:

- [ ] Código compilable y sin errores TypeScript.
- [ ] Tests añadidos o actualizados si aplica.
- [ ] Documentación actualizada (README/docs) si aplica.

## Estilo de código

- SCSS para estilos (seguir la convención del proyecto).
- Mantén componentes pequeños y con responsabilidad única.

## Issues

- Abre un issue para bugs o mejoras con título claro y pasos para reproducir.

## Código de conducta (resumen)

Sé respetuoso, constructivo y profesional en discusiones y revisiones.
