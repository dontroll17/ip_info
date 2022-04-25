const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const get_ip = async (ip = '127.0.0.1') => {
    try{
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        const data = {
            '#IP': response.data.query,
            "#Int prov": response.data.isp,
            "#Org": response.data.org,
            "#Country": response.data.country,
            "#Region name": response.data.regionName,
            "#City": response.data.city,
            "#ZIP code": response.data.zip,
            "#Lat": response.data.lat,
            "#Lon": response.data.lon
        }
        const ctx = Object.entries(data).join('\n').replace(/,/g, ": ");
        return ctx;
    }catch(e) {
        console.error(e);
    }
}

rl.question('Enter ip: ', async (ip) => {
    const data = await get_ip(ip)
    console.log(data);
    rl.close();
});


