const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should error non-string values', () => {
    var res = isRealString(7);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('v');
    expect(res).toBe(true);
  });
});
