load('steal/rhino/rhino.js');

steal('steal/build', 'steal/build/scripts', function() {

	steal.build('funcunit/scripts/build.html', {
		to: 'funcunit/dist',
		compressor: 'uglify'
	});

});