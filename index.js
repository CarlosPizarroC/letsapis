const https = require('https');

let city
let catchPhrase
var url = `https://jsonplaceholder.typicode.com/users/${userId}`;

for (var userId=1; userId<=10; userId++){
    url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            var user = JSON.parse(data);
            if (user.name == "Clementina DuBuque"){
                city = user.address["city"];
                catchPhrase = user.company["catchPhrase"];
                console.log(`City: ${city}`);
                console.log(`CatchPhrase: ${catchPhrase}`);
            }
        });
    }).on('error', (err) => {
        console.log(`Error: ${err.message}`);
    });
}





