/*
 * grunt-cmv-git-subtree
 * https://github.com/liaodrake/grunt-cmv-git-subtree
 *
 * Copyright (c) 2014 Christopher Vachon
 * Licensed under the MIT license.
 */

'use strict';

var shell  = require('shelljs');
var _silenceGit = true;

module.exports = function(grunt) {

	function git_isDirty() {
		var _command = "git status --porcelain";
		grunt.log.debug(_command);
		var sresult  = shell.exec(_command, { silent: _silenceGit });
		return ((sresult.output.length === 0)?false:true);
	}

  grunt.registerMultiTask('git_subtree_add', 'A grunt task to work with adding git subtrees', function() {
		var _defaults = {
      source: "",
      branch: "master",
      target: "",
      squash: true
		};
		var _options = this.options(_defaults);

    // Ensure we can proceed...
    if (_options.source.length === 0) {
      grunt.fail.fatal("Invalid Source Repository name set in Options");
    }
    if (_options.target.length === 0) {
      grunt.fail.fatal("Invalid Target Dir set in Options");
    }
    if (_options.branch.length === 0) {
      grunt.fail.fatal("Invalid Branch name set in Options");
    }

    // Ensure we have a clean repo
    if (git_isDirty()) {
      grunt.fail.fatal("Git found some uncommited files. Commit or Stash git files to proceed");
    }

		grunt.log.oklns("Adding Git Subtree");

    var _command = "git subtree add --prefix=" + _options.target + " " + _options.source + " " + _options.branch;
    if (_options.squash) { _command += " --squash"; }
    grunt.log.debug(_command);

    var sresult = shell.exec(_command, { silent: _silenceGit });
    grunt.log.debug(JSON.stringify(sresult, null, "\t"));
		if (sresult.code === 1) { grunt.log.errorlns("subtree already exists"); }
    else if (sresult.code !== 0) { grunt.fail.fatal(sresult.output); }
  });

};
