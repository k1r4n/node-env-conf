'use strict';

var expect = require('chai').expect;
var envToConfig = require('../index');

describe('#envToConfig', function() {
    it('should convert upper case letters in variables', function() {
        var result = envToConfig(['FIRST NAME=Lionel']);
        expect(result).to.eql({ firstName: 'Lionel' });
    });
    
    it('should convert lower case letters in variables', function() {
        var result = envToConfig(['last name=Andres Messi']);
        expect(result).to.eql({ lastName: 'Andres Messi' });
    });
    
    it('should convert mixed case letters in variables', function() {
        var result = envToConfig(['PlaYiNg pOsitIoN=Right Wing Forward']);
        expect(result).to.eql({ playingPosition: 'Right Wing Forward' });
    });
    it('should convert number value', function() {
        var result = envToConfig(['Jersey NumBer=10']);
        expect(result).to.eql({ jerseyNumber: '10' });
    });
    it('should trim variables and values', function() {
        var result = envToConfig(['           cLub      =         FC Barcelona     ']);
        expect(result).to.eql({ club: 'FC Barcelona' });
    })
    it('should convert text array', function() {
        var result = envToConfig([
            'FIRST NAME=Lionel',
            'last name=Andres Messi',
            'PlaYiNg pOsitIoN=Right Wing Forward',
            
            'Jersey NumBeR=10',
            
            '           cLub      =         FC Barcelona     '
        ]);
        expect(result).to.eql({
            firstName: 'Lionel',
            lastName: 'Andres Messi',
            playingPosition: 'Right Wing Forward',
            jerseyNumber: '10',
            club: 'FC Barcelona'
        });
    })
});
