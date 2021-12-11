import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (request,response) => {

  if(request.url === '/result4/') {
    let data = '';
    
    response.writeHead(200,{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
    });
    
    await request.on('data', (chunk) => {
      data += chunk;
      }).on('end', () => {
    });
    
    response.write(JSON.stringify({
      "message": "itmo286434",
      "x-result": request.headers["x-test"],
      "x-body": data
    }));
  }
  
  response.end();
});


server.listen(PORT, () => {});