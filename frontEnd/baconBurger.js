$(document).ready(function(){

	// Template stuff first

	var template      = $('#template').html();
	var errorTemplate = $('#errorTemplate').html();


	function twitterSearch(hashTag){
		//if(hashTag.length<3)
			//return Bacon.once([]);
		return Rx.Observable.fromPromise($.get(window.location.href+hashTag));
	}

	var text2 = Rx.Observable.fromEvent($('#search'),'keydown')
			.debounce(500)
			.map(function(e){
				return encodeURIComponent(e.target.value);	
			})
			.flatMapLatest(twitterSearch);
		

	text2.subscribe(function(results){
			var data = {data:results};
			var renderedData = Mustache.to_html(template,data);
			$('#display').html(renderedData);	
	})


	//	if(results == 'Search Fail'){
	//		var renderedData = Mustache.to_html(errorTemplate,{});
	//		$('#display').html(renderedData);
	//	}else{
	//		var data = {data:results};
	//		console.log(data);
	//		var renderedData = Mustache.to_html(template,data);
	//		$('#display').html(renderedData);		
});
