let config = {
    ambiente: "dev",
    mongodb: {
        host: 'cluster0.oib74.mongodb.net',
        user: 'iziBug',
        pass: 'amizade123',
        db: 'Project 0',
        urlAdd: '?retryWrites=true&w=majority'
    },
    server:{
        porta: 4000
    },
}

module.exports = config;

