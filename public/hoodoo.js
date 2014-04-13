R.ready(function() {
    R.authenticate();
});
var displayResults = function(results){
    for(var i = 0; i < results.length; i++){
       var result = '<div class="search-result"><p>' +
            '<div class="search-icon">' + 
                '<a href="' + results[i].shortUrl + '" target="a"><img src="' + results[i].icon + '"></a>' + '</div>' +
            '<div class ="search-text"><ul>' +
                '<li>Title: ' + results[i].name + '</li>' +
                '<li>Artist: ' + results[i].artist + '</li>' + 
                '<li>Album: ' + results[i].album + '</li>' +
            '</ul></div></p>' +
        '</div><br>';
        $('#search-results').prepend(result);
    }
}
$(function(){
    $("#play").click(function() {R.player.togglePause();});
    
    $("#submit-search").click(function(){
        R.request(
            //Search
            {
                method: "search",
                content: {
                    query: $("#search-query").val(),
                    types: "Track"
                },
                success: function(response){
                    $("#search-query").val("");
                    displayResults(response.result.results);
                },
                error: function(response){
                    console.log(response.message);
                    alert(response.message);
                }
            }
        );
        });
    $("#search-query").keyup(function(event){
        if(event.keyCode == 13){
            $("#submit-search").click();
        }
    });
});