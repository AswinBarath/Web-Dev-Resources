import { createServer } from 'http';

const server = createServer((req, response) => {
    // console.log('header', req.headers);
    console.log('method', req.method);
    console.log('url', req.url);

    const user = {
        name: 'John',
        hobby: 'Skating'
    }
    // response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
})

server.listen(3000);