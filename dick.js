(function($) {

	$.fn.prefixCSS = function(prop, val) {
		var prefixes = ['Webkit', 'Moz', 'Ms', 'O'],
			obj = {};
		
		for(var doNotNeedThisVariable in prefixes) {
			obj[prefixes + (prop.charAt(0).toUpperCase() + prop.substr(1))] = val;
		}
		
		return this.css(obj);
	};
	
	//  Don't be a dick.
	$.dick = function(options) {
		var iframe = '<iframe width="560" height="315" src="http://www.youtube.com/embed/*?fs=1&autoplay=1&loop=1" style="position: absolute; left: -999em; top: -999em; visibility: hidden; -webkit-user-select: none; -webkit-user-drag: none;" frameborder="0" allowfullscreen></iframe>',
		
			//  Our good king, Rick Astley
			rick = 'oHg5SJYRHA0',
			
			//  A list of the annoying videos
			videos = ['Prhzzqc0aFQ', 'UwB9m4FslO4', 'LH5ay10RTGY', 'DkQ83yLqpJE', 'T6j4f8cHBIM', 'kffacxfA7G4', 'RFzyYYZsxGc', 'v20jRHL492Y', 'Z8bpeeuHDOA', 'KHy7DGLTt8g', '_6-KspZegsE', 'l12Csc_lW0Q'],
			
			//  Baby, let's make our move
			moves = {
			
				//  Show a random youtube video and hide it
				hiddenVideos: function(url) {
					//  Grab a random video
					var video = url ? url : videos[Math.round((Math.random() * (videos.length - 1)))];
					
					return this.append(iframe.replace('*', video));
				},
				
				//  I've dropped a lot of pranks, but I'm never going to give you up.
				rick: function() {
					return moves.hiddenVideos(rick);
				},
				
				//  Hide random elements on hover
				vanishingElements: function() {
					return $('h1,h2,h3,p,div:not(.timber),input,header,footer,section').hover(function() {
						if(Math.random() > .75) {
							$(this).css('opacity', $(this).css('opacity') == 0 ? 1 : 0);
						}
					});
				},
				
				fallingScrollbar: function() {
					var h = $(window).height() + 30,
						html = '<div class="timber" style="-webkit-transform-origin:50% 100%;-moz-transform-origin:50% 100%;-ms-transform-origin:50% 100%;-o-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-transition:-webkit-transform .8s;-moz-transition:-moz-transform .8s;-ms-transition:-ms-transform .8s;-o-transition:-o-transform .8s;transition:transform .8s;position:fixed;right:0;bottom:0;overflow:scroll;width:14px;height:' + h + 'px">' + new Array(80).join('<br>') + '</div>',
						
						me = this.css('overflow', 'hidden').append(html),
						rot = 'rotate(-100deg)';
					
					setTimeout(function() {
						me.children('.timber').prefixCSS('transition', '.8s').css({
							right: -23,
							bottom: 7,
						});
					}, 250);
				},
				
				questionTime: function() {
					var q = ['Are ya ready, kids?', 'I can\'t hear ya!', 'Ohhhhh, who lives in a pineapple under the sea?', 'Absorbent and yellow and pourous is he', 'If nautical nonsense be somethin\' ya wish.', 'Then drop on the deck and flop like a fish.'],
						a = 'Spongebob Squarepants. Spongebob Squarepants.';
						
					for(var i in q) {
						window.prompt(q[i]);
					}
					
					for(var t = 0; t < 4; t++) {
						alert(a);
					}
				},
				
				//  I can hack a site!
				h4xx0r: function() {
					this[0].contentEditable = true;
					return document.designMode = 'on';
				},
				
				//  This don't work with the falling scrollbar.
				//  TODO: fix this
				upsideDown: function() {
					body.prefixCSS('');
				}
			},
			
			body = $('body');
		
		//  Check we've got options	
		if(options) {
			for(i in options) {
				if(options[i] && moves[i]) {
					moves[i].call(body);
				}
			}
		} else { //  If not, call in Mr. Astley
			return moves['rick'].call(body);
		}
	};

})(jQuery);