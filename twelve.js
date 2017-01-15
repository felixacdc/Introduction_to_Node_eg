const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8001 });

server.state('hello', {
                ttl: 60 * 60 * 1000,
                isHttpOnly: true,
                encoding: 'iron',
                password: 'eyJpdiI6IlpJemhUdVYxc0JWaVBmVVRvSXZ'
            });

server.route({
    method: "GET",
    path: '/',
    config: {
        handler: function(request, reply) {
            let hello = request.state.hello.name;
            reply(`Cookies! ${hello}`)
            .state('hello', { name: 'felix' });
        }  
    }
});

/*server.route({
    method: "GET",
    path: '/',
    config: {
        handler: function(request, reply) {
            let hello = request.state.hello;
            reply(`Cookies! ${hello}`)
            .state('hello', 'world', {
                ttl: 60 * 60 * 1000,
                isHttpOnly: true,
                encoding: 'iron',
                password: 'eyJpdiI6IlpJemhUdVYxc0JWaVBmVVRvSXZ'
            });
        }  
    }
});*/
    
server.start(() => console.log(`Started at: ${server.info.uri}`));

