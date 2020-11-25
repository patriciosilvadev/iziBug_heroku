let config = {
    ambiente: "dev",
    mongodb: {
        host: 'cluster0.oib74.mongodb.net',
        user: 'iziBug',
        pass: 'amizade123',
        db: 'iziBug',
        urlAdd: '?retryWrites=true&w=majority'
    },
    server:{
        porta: 4000
    },
}

module.exports = config;

mongodb+srv://iziBug:<password>@cluster0.oib74.mongodb.net/<dbname>?retryWrites=true&w=majority