const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 8000 });

// one method
/*server.route({
    method: ['POST', 'PUT'],
    path: '/',
    handler: function(request, reply) {
        reply(request.payload)
    }
});*/

server.route({
    method: ['POST', 'PUT'],
    path: '/',
    config: {
        payload: {
            output: 'data',
            parse: false, // no envio los datos en formato json
            allow: 'application/json' // indica que la aplicacion tiene que devolver un json si parse es false tira un error
        }  
    },
    handler: function(request, reply) {
        reply(request.payload)
    }
});

// ejecucion
/*http -v POST localhost:8000 fname=felix lname=mendez
http -v PUT localhost:8000 fname=felix lname=mendez
http -v --form PUT localhost:8000 fname=felix lname=mendez*/

server.start(() => console.log(`Started at: ${server.info.uri}`));

