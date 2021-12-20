const { server } = require('./src/server.js');


server.set('port', 3001);

server.listen(server.get('port'), ()=>{
    console.log(`Server on port ${server.get('port')}`);
});
