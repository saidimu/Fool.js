(function($) {
	
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
							$(this).css('visibility', 'hidden');
						}
					});
				},
				
				fallingScrollbar: function() {
					var h = $(window).height() + 30,
						html = '<div class="timber" style="-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0;-webkit-transition:-webkit-transform .8s;-moz-transition:-moz-transform .8s;-ms-transition:-ms-transform .8s;-o-transition:-o-transform .8s;transition:transform .8s;position:fixed;right:0;bottom:0;overflow:scroll;width:14px;height:' + h + 'px">' + new Array(80).join('<br>') + '</div>'
					
					var me = this.css('overflow', 'hidden').append(html);
					
					setTimeout(function() {
						me.children('.timber').css({
							WebkitTransform: 'rotate(90deg)',
							MozTransform: 'rotate(90deg)',
							MsTransform: 'rotate(90deg)',
							OTransform: 'rotate(90deg)',
							transform: 'rotate(90deg)',
							
							right: h,
							bottom: -(h - 14)					
						});
					}, 250);
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