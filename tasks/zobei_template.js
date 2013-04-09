/*
 * grunt-zobei-template
 * https://github.com/Administrator/tcompile
 *
 * Copyright (c) 2013 bubusy
 * Licensed under the MIT license.
 */'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('zobei_template', 'template compile', function() {
		grunt.log.writeln(this.target + ': ' + this.data.files['test/test.js']);
		grunt.file.defaultEncoding = 'utf8';
		var files = this.data.files;
		var os = require('os');
		var reg = new RegExp(os.EOL, 'g');
		for (var f in files) {
			grunt.log.writeln(f + ': ' + files[f]);
			var tpl = grunt.file.read(files[f]);
			tpl = tpl.replace(reg, '\\n');
			tpl = tpl.replace(/"/g, '\\"');
			tpl = 'define([], function(){\n return {"template":"' + tpl + '"};\n});';
			grunt.log.writeln(tpl);
			grunt.file.write(f, tpl);		}

	});

};
