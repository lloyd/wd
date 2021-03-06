// Generated by CoffeeScript 1.3.3
(function() {
  var should, wd;

  should = require('should');

  wd = require('../common/wd-with-cov');

  describe("wd", function() {
    return describe("local", function() {
      return describe("browser init tests", function() {
        describe("default init", function() {
          return it("should open firefox browser", function(done) {
            var browser;
            this.timeout(15000);
            browser = wd.remote();
            browser.defaultCapabilities.should.eql({
              browserName: 'firefox',
              version: '',
              javascriptEnabled: true,
              platform: 'ANY'
            });
            return browser.init(function(err) {
              should.not.exist(err);
              return browser.sessionCapabilities(function(err, capabilities) {
                should.not.exist(err);
                capabilities.browserName.should.equal('firefox');
                return browser.quit(function(err) {
                  should.not.exist(err);
                  return done(null);
                });
              });
            });
          });
        });
        describe("browser.defaultCapabilities", function() {
          return it("should open chrome browser", function(done) {
            var browser;
            this.timeout(15000);
            browser = wd.remote();
            browser.defaultCapabilities.browserName = 'chrome';
            browser.defaultCapabilities.javascriptEnabled = false;
            browser.defaultCapabilities.should.eql({
              browserName: 'chrome',
              version: '',
              javascriptEnabled: false,
              platform: 'ANY'
            });
            return browser.init(function(err) {
              should.not.exist(err);
              return browser.sessionCapabilities(function(err, capabilities) {
                should.not.exist(err);
                capabilities.browserName.should.equal('chrome');
                return browser.quit(function(err) {
                  should.not.exist(err);
                  return done(null);
                });
              });
            });
          });
        });
        describe("desired only", function() {
          return it("should open chrome browser", function(done) {
            var browser;
            this.timeout(15000);
            browser = wd.remote();
            browser.defaultCapabilities.should.eql({
              browserName: 'firefox',
              version: '',
              javascriptEnabled: true,
              platform: 'ANY'
            });
            return browser.init({
              browserName: 'chrome'
            }, function(err) {
              should.not.exist(err);
              return browser.sessionCapabilities(function(err, capabilities) {
                should.not.exist(err);
                capabilities.browserName.should.equal('chrome');
                return browser.quit(function(err) {
                  should.not.exist(err);
                  return done(null);
                });
              });
            });
          });
        });
        return describe("desired overiding defaultCapabilities", function() {
          return it("should open firefox browser", function(done) {
            var browser;
            this.timeout(15000);
            browser = wd.remote();
            browser.defaultCapabilities.browserName = 'chrome';
            browser.defaultCapabilities.should.eql({
              browserName: 'chrome',
              version: '',
              javascriptEnabled: true,
              platform: 'ANY'
            });
            return browser.init({
              browserName: 'firefox'
            }, function(err) {
              should.not.exist(err);
              return browser.sessionCapabilities(function(err, capabilities) {
                should.not.exist(err);
                capabilities.browserName.should.equal('firefox');
                return browser.quit(function(err) {
                  should.not.exist(err);
                  return done(null);
                });
              });
            });
          });
        });
      });
    });
  });

}).call(this);
