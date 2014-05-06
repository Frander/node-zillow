'use strict';

var Zillow         = require('../lib/node-zillow.js'),
    mocha          = require('mocha'),
    chai           = require('chai'),
    expect         = require('chai').expect,
    assert         = require('chai').assert,
    sinon          = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    util           = require('util'),
    env            = require('../environment.json');

// for chai promises
chai.use(chaiAsPromised);

// test constants
var zwsid = env.zwsid;

describe('Zillow', function() {

    describe('constructor', function() {
        it('should be a function', function() {
            expect(typeof Zillow).to.equal('function');
        });
    });
    describe('an instance of', function() {
        it('zillow should be an instanceof Zillow', function() {
            var zillow = new Zillow(zwsid);
            expect(zillow).to.be.an.instanceof(Zillow);
        });
    });
});

describe('getDeepSearchResults', function() {
    var zillow = new Zillow(zwsid);
    var parameters = {
        address: env.address,
        citystatezip: env.citystatezip
    };
    var test = zillow.getDeepSearchResults(parameters);

    it('should return a json object', function() {
        expect(typeof test.then(function(result) {
            result.to.equal('object');
        }));
    });

    it('should return a success message', function() {
        expect(test.then(function(result) {
            result['message']['text'].to.equal
            ('Request successfully processed');
        }));
        expect(test.then(function(result) {
            result['message']['code'].to.equal(0);
        }));
    });
});

describe('getDemographics', function() {
    var zillow = new Zillow(zwsid);
    var params = {
        city: env.city,
        state: env.state,
        zip: env.zip
    };
    var test = zillow.getDemographics(params);

    it('should be a json object', function() {
        expect(typeof test.then(function(result) {
            result.to.equal('object');
        }));
    });

    it('should return a success message', function() {
        expect(test.then(function(result) {
            result['message']['text'].to.equal
            ('Request successfully processed');
        }));
        expect(test.then(function(result) {
            result['message']['code'].to.equal(0);
        }));
    });
})
