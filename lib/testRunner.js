class testRunner {
    greetings(event) {
        return {
            message: 'Your CI/CD Build Passed Woo!',
            input: event
        };
    }
}
    
module.exports = testRunner;