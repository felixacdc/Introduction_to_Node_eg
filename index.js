const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: 8000 });

function handler(request, reply) {
    reply(request.params);
}

server.route({
    method: 'GET',
    path: '/users/{userId}',
    handler: handler
});

// route parameters
// opcionales
/*server.route({
    method: 'GET',
    path: '/users/{userId?}',
    handler: handler
});*/
// cantidad de parametros ilimitada
/*server.route({
    method: 'GET',
    path: '/files/{files*}',
    handler: handler
});*/
// cantidad de parametros limitada
/*server.route({
    method: 'GET',
    path: '/files/{files*2}',
    handler: handler
});*/
/*server.route({
    method: 'GET',
    path: '/files/{file}.jpg',
    handler: handler
});*/

server.start(() => console.log(`Started at: ${server.info.uri}`));