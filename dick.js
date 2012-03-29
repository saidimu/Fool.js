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
					return $('h1,h2,h3,p,div,input,header,footer,section').hover(function() {
						if(Math.random() > .75) {
							$(this).css('visibility', 'hidden');
						}
					});
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