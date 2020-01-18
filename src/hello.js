exports.handler = (event, context, callback) => {

    const name = event.queryStringParameters.name || "world";
    
    callback(null, {
        statusCode: 200,
        body: `Hello, ${name}!`,
    });
};