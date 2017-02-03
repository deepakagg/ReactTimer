var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe("Clock", function(){
  it("Should exists", () => {
    expect(Clock).toExist();
  });
});
