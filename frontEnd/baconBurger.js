$(document).ready(function(){

	// Template stuff first

	var template = $('#template').html();


	function twitterSearch(hashTag){
		if(hashTag.length<3)
			return Bacon.once([]);
		return Bacon.fromPromise($.get(window.location.href+hashTag));
	}

	var text = $("#search")
			.asEventStream('keydown')
			.debounce(300)
			.map(function(event){
				return event.target.value
			})
			.skipDuplicates();

	var searchResults = text.flatMapLatest(twitterSearch);

	searchResults.onValue(function(results){
		var data = {data:results};
		console.log(data);
		var renderedData = Mustache.to_html(template,data);
		$('#display').html(renderedData);		
	})	
});
