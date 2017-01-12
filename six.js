const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();

server.connection({ port: 8000 });

server.register(require('inert'), () => {
    
    // long
    /*server.route({
        method: 'GET',
        path: '/hapi.png',
        handler: function(request, reply) {
            var path = Path.join(__dirname, 'public/hapi.png');
            reply.file(path);
        }
    });*/
    
    // short
    /*server.route({
        method: 'GET',
        path: '/hapi.png',
        handler: {
            file: Path.join(__dirname, 'public/hapi.png')
        }
    });*/
    
    // General
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    });
    
    server.start(() => console.log(`Started at: ${server.info.uri}`));
});

