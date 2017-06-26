let expect = require('expect');

const {getMessageObject} = require('./message');

describe('getMessageObject', () => {
  it('Should get Valid Message Object', () => {
    var from = 'Sukesh';
    var text = 'Hi from Sukesh!!';
    var message = getMessageObject(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    expect(message.from).toBeA('string');
    expect(message.text).toBeA('string');
  });
});


