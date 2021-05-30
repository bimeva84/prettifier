const prettifierController = require('../controllers/prettifierController')

test('Should validate if its a number',()=>{
    let resp = prettifierController.prettifyingNumber("String");
    let respExp = {
        status: 400,
        body: "Request isn't a number"
    }
    expect(resp).toEqual(respExp);
})

test('Validate under a million',()=>{
    let resp = prettifierController.prettifyingNumber(532);
    let respExp = {
        status: 200,
        body: "532"
    }
    expect(resp).toEqual(respExp);
})

test('Validate a million',()=>{
    let resp = prettifierController.prettifyingNumber(1000000);
    let respExp = {
        status: 200,
        body: "1M"
    }
    expect(resp).toEqual(respExp);
})

test('Validate with decimals',()=>{
    let resp = prettifierController.prettifyingNumber(2500000.34);
    let respExp = {
        status: 200,
        body: "2.5M"
    }
    expect(resp).toEqual(respExp);
})

test('Validate a billion',()=>{
    let resp = prettifierController.prettifyingNumber(1123456789);
    let respExp = {
        status: 200,
        body: "1.1B"
    }
    expect(resp).toEqual(respExp);
})

test('Validate a trillion',()=>{
    let resp = prettifierController.prettifyingNumber(1123456789012);
    let respExp = {
        status: 200,
        body: "1.1T"
    }
    expect(resp).toEqual(respExp);
})

test('Validate a out of range',()=>{
    let resp = prettifierController.prettifyingNumber(11234567890123456);
    let respExp = {
        status: 400,
        body: "The number specified its out of range"
    }
    expect(resp).toEqual(respExp);
})

test('Should parse the response object',()=>{
    let resp = prettifierController.setResponse(200, "this is a test");
    let respExp = {
        status: 200,
        body: "this is a test"
    }
    expect(resp).toEqual(respExp);
})

test('Should get the truncade of the number',()=>{
    let resp = prettifierController.getTruncadeNumber("1234567", "M");
    let respExp = "1.2M"
    expect(resp).toEqual(respExp);
})