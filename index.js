const redis = require('redis');
const client = redis.createClient({
    host: "47.100.53.48",
    port: 6379
});
client.on_connect("error", function(err) {
    console.log("error:", err);
});

client.set("name", "Dreamer", redis.print);