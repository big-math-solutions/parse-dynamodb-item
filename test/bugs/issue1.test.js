const assert = require('assert');

const parse = require('../../parse');

describe('test to parse', () => {
    it('should parse a string', () => {
        const parsed = parse({ L: [ { S: 'a-string' } ] });
        assert(parsed[0] === 'a-string');
    });
});
