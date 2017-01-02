const Hapi = require('hapi');
const Boom = require('boom');

const server = new Hapi.Server();

server.connection({ port: 8000 });

let goodOptions = {
    reporters: {
        console: [
            {
                module: 'good-console',
                args: [{ log: '*', response: '*' }]
            },
            'stdout'
        ]
    }
};

server.register({
    register: require('good'),
    options: goodOptions
}, err => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            server.log('error', 'Oh no!');
            server.log('info', 'replying');
            reply('hello hapi');
        }
    });
    
    server.route({
        method: 'GET',
        path: '/video4',
        handler: (request, reply) => {
            /*reply(null, 'hello world');
            reply('hello world');
            reply({ hello: 'hello world'});
            reply(Promise.resolve('hello world'));
            reply(require('fs').createReadStream(__filename));
            reply(new Error('oops'));*/
            reply(Boom.notFound());
        }
    })

    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => {
            reply(`hello ${request.params.name}`);
        }
    });
    
    server.start(() => console.log(`Started at: ${server.info.uri}`));
});



/*function handler(request, reply) {
    reply(request.params);
}*/

/*server.route({
    method: 'GET',
    path: '/users/{userId}',
    handler: handler
});*/

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