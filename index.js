/* @flow */

var fs = require("fs")
var path = require("path")
var express = require("express")
var jade = require("jade")

module.exports = function(pathToWorkingDir){
	var app = express()
	app.locals.path = pathToWorkingDir
	app.locals.config = require(path.resolve(app.locals.path, "config.js"))

	app.use(express.static(app.locals.path))


	// this function provides the HTML code, which one will be displayed to the page
	app.html = function() {
		var videoPath = path.resolve(app.locals.path, app.locals.config.file)
		return ""
	}

	// here we can return LESS css, which will only effect the page HTML code
	app.less = function(){
		return ""
	}


	return app
}
