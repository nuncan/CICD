class HelloNike {
    greetings(event) {
        return {
            message: `Go Serverless v1.0! Your function executed successfully! Event: ${JSON.stringify(event)}`,
            input: event
        };
    }
}
    
module.exports = HelloNike;