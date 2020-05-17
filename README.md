[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# Provinces Argentina API

API RESTful y GraphQL Node.js

> Aqui encontraras todas las provincias de argentina con sus respectivos datos. Ciudad capital, Coordenadas, Población, Año de fundación, Fundador y Rango.

### Comandos

Instala todas las dependecias

```sh
$ npm install

$ yarn install
```

Ejecutar la API en local

```sh
$ npm run dev

$ yarn dev
```


Importar los datos
<!-- _Asegúrate de tener instalado MongoDB._ -->
> Asegúrate de tener instalado MongoDB.

```sh
$ npm run data

$ yarn data
```

## Introducción

Esta documentación lo ayudará a familiarizarse con los recursos de la API de Provincias Argentina y le mostrará cómo hacer diferentes consultas.

### REST

La URL base contiene información sobre todos los recursos de API disponible. Todas las solicitides son `GET`. Todas las respuestas devolverán datos en `json`.

```
http://localhost:33528/api/v1/
```

```json
{
  "provinces": "http://localhost:33528/api/v1/provinces/"
}
```

Actualmente hay un recurso disponible.

- **Provincias**: se usa para obtener todas las provincias.

### Provincias

Hay un total de `23` provincias ordenadas por `id`.

### Consigue todas las provincias

Puede acceder a la lista de provincias utilizando el endpoint `/provinces`.

_Sample request_

```
http://localhost:33528/api/v1/provinces/
```

```json
[
  {
    "_id": 1,
    "capitalCity": "La Plata",
    "rank": 1,
    "latitude": -31.4217247,
    "longitude": -64.1858136,
    "populations": "15771581",
    "province": "Buenos Aires",
    "foundation": 1882,
    "founder": "Dardo Rocha"
  },
  {
    "_id": 2,
    "capitalCity": "Córdoba",
    "rank": 2,
    "latitude": -31.4217247,
    "longitude": -64.1858136,
    "populations": "3384649",
    "province": "Córdoba",
    "foundation": 1573,
    "founder": "Jerónimo Luis de Cabrera"
  }
  // ...
];
```

### Consigue una sola provincia

Puede obtener una sola provincia agregando el `id` como parametro: `/provinces/2`.

_Sample request_

```
http://localhost:33528/api/v1/provinces/2
```

```json
[
  {
    "_id": 2,
    "capitalCity": "Córdoba",
    "rank": 2,
    "latitude": -31.4217247,
    "longitude": -64.1858136,
    "populations": "3384649",
    "province": "Córdoba",
    "foundation": 1573,
    "founder": "Jerónimo Luis de Cabrera"
  }
]
```

### GraphQL

Sample Query:

```graphql
query {
  provinces {
    _id
    province
    foundation
    founder
  }
  province(id: 5) {
    _id
    capitalCity
    province
    founder
  }
}
```

> ¿Qué es [GraphQL](https://graphql.org/)?

---

<!-- - Puedes encontrar esta misma documentación en el [Sitio Web](https://provincesargentinaapi.netlify.app/#documentacion). -->

## Licencia

[MIT](LICENSE)

**Aún en Desarrollo...**
