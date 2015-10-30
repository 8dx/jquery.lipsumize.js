$(function() {
	$("#wordsPerSentence").noUiSlider({
		start: [8,25],
		connect: false,
		format: wNumb({
			decimals: 0
			}),
		range: {
			min: 3,
			max: 50
		}
	}).Link('lower').to($("#wps_low")).
	Link('lower').to($("#wpl")).
	Link('upper').to($('#wps_hi')).
	Link('upper').to($('#wph'))
	String.prototype.parseInt = function() {
		return parseInt(this);
	}
	$("#sentencesPerParagraph").noUiSlider({
		start: [5,10],
		connect: false,
		format: wNumb({
			decimals: 0
			}),
		range: {
			min: 3,
			max: 20
		}
	}).Link("lower").to($("#spp_low")).
	Link("lower").to($("#spl")).
	Link('upper').to($('#spp_hi')).
	Link('upper').to($('#sph'));
	$("#generate").on("submit", function(e) {
		e.preventDefault();	
		var wps = [$("#wps_low").val().parseInt(), $("#wps_hi").val().parseInt()];
		var spp = [$('#spp_low').val().parseInt(), $("#spp_hi").val().parseInt()];
		console.dir(wps);
		console.dir(spp);
		
		paragraphs = $("#paragraphs").val();
		$("#lipsum-text").animate({height: 'toggle'},800, 'swing', function() {	
			$(this).addClass("bottom-border");	
			$(this).lipsumize(
				{
					paragraphs: paragraphs,
					wordsPerSentence: wps,
					sentencesPerParagraph: spp	
				}
			)
			$(this).delay(800).animate({height: 'toggle'},800);
		});
	})
	$("#generate").submit();
})
