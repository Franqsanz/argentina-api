[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![API REST](https://img.shields.io/badge/API-REST-yellow.svg)]()
[![API GraphQL](https://img.shields.io/badge/API-GraphQL-ff69b4.svg)](https://graphql.org/)
[![Last Commit](https://img.shields.io/github/last-commit/Franqsanz/argentina-api)](https://github.com/Franqsanz/argentina-api/)

# Argentina API

API RESTful y GraphQL Node.js

> Aqui encontraras todas las provincias de argentina con sus respectivos datos. Ciudad capital, Coordenadas, Población, Superficie Km², Año de fundación, Fundador, Rango y Región Geográfica.

- **Si encuentras algún error o crees que algo esta mal, no dudes en escribir un [inssue](https://github.com/Franqsanz/argentina-api/issues). 😊**

### Clonar el repositorio

```sh
$ git clone https://github.com/Franqsanz/argentina-api.git
```

### Comandos

Instala todas las dependecias

```sh
$ npm install

# o con yarn
$ yarn install
```

Ejecutar la API en local

```sh
$ npm run dev

$ yarn dev
```

Importar los datos

> Asegúrate de tener instalado MongoDB.

```sh
$ npm run data

$ yarn data
```

## Introducción

Esta documentación lo ayudará a familiarizarse con los recursos de Argentina API y le mostrará cómo hacer diferentes consultas.

### REST

La URL base contiene información sobre todos los recursos de API disponible. Todas las solicitudes son `GET`. Todas las respuestas devolverán datos en `json`.

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

### Esquema de provincias

❗ **Todos los campos son requeridos**. ❗

| Key               | Type   | Description                       |
| ----------------- | ------ | --------------------------------- |
| \_id              | Number | ID de la provincia                |
| capital           | String | Nombre de la capital              |
| rank              | Number | Rango de la provincia             |
| latitude          | Number | Latitud de la provincia           |
| longitude         | Number | Longitud de la provincia          |
| populations       | String | Población total de la provincia   |
| province          | String | Nombre de la provincia            |
| surface           | String | Superficie Km² de la provincia    |
| foundation        | Number | Año de fundación de la provincia  |
| founder           | String | Fundador de la provincia          |
| geographic_region | String | Región geográfica de la provincia |

### Provincias

Hay un total de `23` provincias y la ciudad autónoma de buenos aires, ordenadas por `id`.

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
    "capital": "La Plata",
    "rank": 1,
    "latitude": -34.92088,
    "longitude": -57.949651,
    "populations": "15771581",
    "province": "Buenos Aires",
    "surface": "307571",
    "foundation": 1882,
    "founder": "Dardo Rocha",
    "geographic_region": "Pampa Húmeda y Pampa Seca"
  },
  {
    "_id": 2,
    "capital": "Córdoba",
    "rank": 2,
    "latitude": -31.4217247,
    "longitude": -64.1858136,
    "populations": "3384649",
    "province": "Córdoba",
    "surface": "165321",
    "foundation": 1573,
    "founder": "Jerónimo Luis de Cabrera",
    "geographic_region": "Pampa Húmeda, Sierras Pampeanas y Chaqueña"
  }
  // ...
]
```

### Consigue una sola provincia

Puede obtener una sola provincia agregando el `id` como parametro: `/provinces/20`.

_Sample request_

```
http://localhost:33528/api/v1/provinces/20
```

```json
[
  {
    "_id": 20,
    "capital": "La Rioja",
    "rank": 20,
    "latitude": -29.414796,
    "longitude": -66.860263,
    "populations": "343765",
    "province": "La Rioja",
    "surface": "89680",
    "foundation": 1591,
    "founder": "Juan Ramírez de Velazco",
    "geographic_region": "Cuyo y Sierras Pampeanas"
  }
]
```

### Filtrado de provincias

También puede incluir filtros en la URL incluyendo parámetros de consulta adicionales. Para iniciar el filtrado agregue un `?` seguido por la consulta `<Query>=<valor>`. Por ejemplo si desea verificar cuantas capitales contienen la letra `Y`, simplemente agregue `?capital=y`.

Parámetros disponibles:

- `capital`: filtrado por capital.

_Sample request_

```
http://localhost:33528/api/v1/provinces?capital=y
```

```json
[
  {
    "_id": 13,
    "capital": "San Salvador de Jujuy",
    "rank": 13,
    "latitude": -24.186427,
    "longitude": -65.299451,
    "populations": "685870",
    "province": "Jujuy",
    "surface": "53219",
    "foundation": 1593,
    "founder": "Francisco de Argañaráz",
    "geographic_region": "NOA"
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
    capital
    province
    founder
  }
}
```

> ¿Qué es [GraphQL](https://graphql.org/learn/)?

---

<!-- - Puedes encontrar esta misma documentación en el [Sitio Web](https://provincesargentinaapi.netlify.app/#documentacion). -->

## Licencia

[MIT](LICENSE)

**Aún en Desarrollo...**
