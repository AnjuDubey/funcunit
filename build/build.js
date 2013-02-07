load("steal/rhino/rhino.js");
steal('steal/build/pluginify',
function (pluginify) {

	/**
	 * Build CanJS and test files for a given library
	 *
	 * @param lib
	 */
	var buildLibrary = function () {
		var outFile = 'funcunit/dist/funcunit.js',
			buildFile = 'funcunit/build/make.js',
			options = {
				out : outFile,
				onefunc : true,
				compress : false,
				skipAll : true,
				exclude : ["jquery", "jquery/jquery.js"],
				wrapInner : ['(function(window, $, undefined) {\n', '\n})(this, jQuery);']
			};

		steal.build.pluginify(buildFile, options);
	};
	buildLibrary();
});
