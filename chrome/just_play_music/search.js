// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
	confirm("showing "+response);
    //var responseString = JSON.stringify(response, '', 2);
    //document.getElementById('response').innerHTML += response;//String;
	var resp = document.getElementById('response');
	//confirm("working after get element by id");
	resp.insertAdjacentHTML('afterbegin', response);
	confirm("at end of show response");
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    //confirm("client api loaded load");
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad());
	//confirm("youtube api finished loading");
	//onYouTubeApiLoad();
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
	//confirm("before setting api key");
    gapi.client.setApiKey('AIzaSyCOkpe0mey3oJdJpLrQoTOEKw0TIdvwIQc');
	//confirm("youtube api key set");
	showResponse("loaded youtube api and set key");
    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
	confirm("inside search function");
    var request = gapi.client.youtube.search.list({
		q: 'jayz',
        part: 'id'
		//key: 'AIzaSyCOkpe0mey3oJdJpLrQoTOEKw0TIdvwIQc'
    });
    confirm("before execute request");
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
	confirm("in onSearchResponse");
    showResponse(response);
}


