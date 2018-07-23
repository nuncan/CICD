
const helloNike = require('../handler').HelloNike;
describe('helloNike', () => {
    var event = {};
    var context = {};
    var resp = {};
    
    it('should call the helloNike function with success', (done) => {
        var callback = (ctx, data) => {
            console.log(data);
            resp = data;
            done();
        }
        helloNike(event, context, callback);
        expect(resp.statusCode).toBe(200);
    });
});

const HelloNike = require('../lib/hello-Nike');
describe('greetings', () => {
    var event = {};
    var hello = new HelloNike();

    it('should call sayHello and return message', () => {
        expect(hello.greetings(event).message).toBe(`Go Serverless v1.0! Your function executed successfully! Event: ${JSON.stringify(event)}`);
    });
});