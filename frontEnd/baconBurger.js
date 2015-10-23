$(document).ready(function(){

	// Template stuff first

	var template      = $('#template').html();
	var errorTemplate = $('#errorTemplate').html();


	function twitterSearch(hashTag){
		if(hashTag.length<3)
			return Bacon.once([]);
		return Bacon.fromPromise($.get(window.location.href+hashTag));
	}

	var text = $("#search")
			.asEventStream('keydown')
			.debounce(300)
			.map(function(event){
				return encodeURIComponent(event.target.value);
			})
			.skipDuplicates();

	var searchResults = text.flatMapLatest(twitterSearch).mapError('Search Fail');

	searchResults.onValue(function(results){

		if(results == 'Search Fail'){
			var renderedData = Mustache.to_html(errorTemplate,{});
			$('#display').html(renderedData);
		}else{
			var data = {data:results};
			console.log(data);
			var renderedData = Mustache.to_html(template,data);
			$('#display').html(renderedData);		
		}
	})	
});
