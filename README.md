# IDBS-kds
Este proyecto ha sido desarrollado usando vite, para poder correrlo localmente se necesita:
- npm install
- npm run dev

En consola se mostrará el enlace donde se estará corriendo el proyecto, usualmente es la ruta: http://localhost:5173/

# Descripción:
- El sistema muestra una lista de órdenes cuya información ha sido generada aleatoriamente. 
- Se dispone de un navbar que incluye tanto el nombre de la empresa como algunos filtros para ordenar mejor lás órdenes.
- Todas las cards se ordenan según el tiempo estimado de entrega, las más urgentes aparecen primero.
- Cuando se ordenan por "En proceso", aparecerán dos tipos de card: las de sombreado amarillo, cuyo tiempo de entrega está siendo retrazado. Y las de sombreado azul, aquellas que aun no se pasan de la hora.
- Las de estado "pendiente" no tienen tiempo de inicio, por lo que solo se iniciará el conteo cuando se le de a "empezar".
