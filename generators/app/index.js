'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var cheerio = require('cheerio');
var fs = require('fs');

module.exports = yeoman.Base.extend({
    prompting: function () {
        var done = this.async();

        var controls = [
            {
                name: 'Grid',
                value: 'grid'
            }, {
                name: 'Hierarchical Grid',
                value: 'hgrid'
            }, {
                name: 'Tree Grid',
                value: 'tgrid'
            }, {
                name: 'Pivot Grid',
                value: 'pgrid'
            }, {
                name: 'Pivot Grid',
                value: 'pgrid'
            }, {
                name: 'Data Chat',
                value: 'datachart'
            }, {
                name: 'Doughnut Chart',
                value: 'doughnutchart'
            }, {
                name: 'Funnel Chart',
                value: 'fchart'
            }, {
                name: 'Radial Gauge',
                value: 'rgauge'
            }, {
                name: 'Sparkline',
                value: 'sline'
            }, {
                name: 'Bullet Graph',
                value: 'bgraph'
            }, {
                name: 'Linear Gauge',
                value: 'lgauge'
            }, {
                name: 'Map',
                value: 'map'
            }, {
                name: 'Barcode',
                value: 'bcode'
            }, {
                name: 'Zoombar',
                value: 'zbar'
            }
        ]

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the well-made ' + chalk.red('generator-igniteui') + ' generator!'
            ));

        var prompts = [
            {
                name: 'pageName',
                message: 'What do you want the html\'s filename to be?',
                default: "index.html"
            },
            {
                type: 'checkbox',
                message: 'What controls do you want to include in your project?',
                name: 'controls',
                choices: controls
            }
        ];

        this.prompt(prompts, function (props) {
            this.props = props;
            done();
        }.bind(this));
    },

    writing: function () {
        // this.fs.copy(
        //     this.templatePath('index.html'),
        //     this.destinationPath(this.props.pageName)
        // );
        
        var $ = cheerio.load(this.fs.read(this.templatePath('index.html')));

        if (this.props.controls.indexOf("grid") > -1) {
            $('.sample-container').append('<h2>Sample <a href="http://igniteui.com/grid/overview" title="Learn More" target="_blank">Ignite UI Data Grid</a></h2> <div id="igniteGrid"></div>');

            $('body').append(this.fs.read(this.templatePath('grid.html')));
        }
        if (this.props.controls.indexOf("hgrid") > -1) {
            $('.sample-container').append('<h2>Sample <a href="http://www.igniteui.com/hierarchical-grid/overview" title="Learn More" target="_blank">Ignite UI Hierarchical Grid</a></h2> <div id="igniteHGrid"></div>');

            $('body').append(this.fs.read(this.templatePath('hgrid.html')));
        }

        this.fs.write(this.destinationPath('index.html'), $.html());

    },

    install: function () {
        //this.installDependencies();
        //this.log(yosay('Html file created; time to get the Ignite UI files!'));
        //this.npmInstall(['igniteui']); Soooooooon when this gets better.
    }
});