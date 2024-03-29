
## Descripcion

### Prueba tecnica Backend developer

## Instalacion

```bash
$ npm install
```

## Correr la aplicacion
Primero levante una base de datos local o en un contenedor Docker
```bash
  docker run --name mi-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mi-contraseña -d postgres
```
### Luego configure la coneccion de su base de datos en el AppModule

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
