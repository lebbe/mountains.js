/*!
 * Mountains.js is made by Lars-Erik Bruce 2016 for the use on his homepage.
 *
 * http://liberalisten.net
 *
 * Copyright Lars-Erik Bruce.
 *
 * MIT License.
 */
(function() {
	'use strict'

	const gr = 1.618033896
	const maxAspectRatio = 0.8

	/*
	 * Machinery for making beautiful art.
	 */
	function placeTriangles(w, h) {
		w = w || window.innerWidth
		h = h || window.innerHeight

		const elems = ['blue', 'green', 'red', 'yellow', 'purple']
		.map(a => '.triangle-' + a)
		.map(a => document.querySelector(a))
		.sort(() => Math.random() - 0.5 )



		var triangleHeight = h / gr
		const triangleWidth = w / gr

		const placementCenter = w / 5
		var iterPlacementCenter = -triangleWidth / 4

		// Contain mountain height within a certain aspect ratio
		if(triangleHeight / triangleWidth > maxAspectRatio) {
			triangleHeight = triangleWidth * 0.8
		}

		const maxUpDown = triangleHeight / 5 // Magic number

		const bottomPlacements = [
			0,
			-maxUpDown * 2,
			(maxUpDown / 2) - maxUpDown,
			-maxUpDown - (maxUpDown / 2),
			-maxUpDown
		].sort(() => Math.random() - 0.5)

		const borderWidth = [0, triangleWidth / 2, triangleHeight, triangleWidth / 2]
			.map(d => parseInt(d) + 'px').join(' ')

		elems.forEach((elem, i) => {
			elem.style.bottom = parseInt(bottomPlacements[i]) + 'px'
			elem.style.borderWidth = borderWidth
			elem.style.left = parseInt(iterPlacementCenter) + 'px'
			iterPlacementCenter += placementCenter
		})
	}

	window.onload = window.onresize = function() {placeTriangles()}

	/*
	 * Machinery for creating CSS fallbacks.
	 */
	window.mountainsComputeFallbackCss = function(resolutions) {
		resolutions = resolutions || '320,480,860,1024,1280,1920'
		var lastWidth

		function printCss(width, height) {
			var b = []
			if(lastWidth) {
				b.push('@media (min-width:')
				b.push(lastWidth)
				b.push('px) {')
			}

			document.querySelectorAll('.triangle').forEach(function(e){
				b.push(' .' + e.classList[1] + ' {')
				b.push('bottom: ' + e.style.bottom + '')
				b.push('border-width: ' + e.style.borderWidth + '')
				b.push('left: ' + e.style.left + '')
				b.push('}')
			})
			if(lastWidth) {
				b.push('}')
			}
			lastWidth = width
			return b.join('')
		}

		var css = resolutions.split(',')
			.map(parseInt)
			.map(width => {
				// Common screen aspect ratio, but should we
				// assume portrait or landscape orientation?
				var height = parseInt(width * (9 / 16))
				placeTriangles(width, height)
				return printCss(width)
			})

		placeTriangles()

		return css.join('\n')
	}
})()