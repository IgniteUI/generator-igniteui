'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var IgniteuiGenerator = module.exports = function IgniteuiGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	// this.on('end', function () {
	//   this.installDependencies({ skipInstall: options['skip-install'] });
	// });

	// because we use the ES6 delimiters in Ignite UI, we need to disable them from being used in the generator
	// for more info: https://github.com/lodash/lodash/issues/399
	this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(IgniteuiGenerator, yeoman.generators.Base);

IgniteuiGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [{
		name: 'pageName',
		message: 'What do you want the page filename to be (we\'ll add .html extension if you don\'t specify one)?'
	}];

	this.prompt(prompts, function (props) {
  		this.pageName = props.pageName;

		cb();
	}.bind(this));
};

IgniteuiGenerator.prototype.page = function() {
	this.template('_index.html', this.pageName + (this.pageName.indexOf('.') === -1 ? '.html' : ''));
};

