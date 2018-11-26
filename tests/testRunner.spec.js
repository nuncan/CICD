
/*
    Complex Test
*/
const testRunner = require('../handler').Index;
describe('testRunner', () => {
    var event = {};
    var context = {};
    var resp = {};
    
    it('should call the Lambda Handlers main function with success', (done) => {
        var callback = (ctx, data) => {
            console.log(data);
            resp = data;
            done();
        }
        testRunner(event, context, callback);
        expect(resp.statusCode).toBe(200);
    });
});

/*
    Simple Test
*/
const test = require('../lib/testRunner');
describe('greetings', () => {
    var event = {};
    var hello = new test();

    it('should call greetings and return our message', () => {
        expect(hello.greetings(event).message).toBe('Your CI/CD Build Passed Woo!');
    });
});