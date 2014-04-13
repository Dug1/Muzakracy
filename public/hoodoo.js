R.ready(function() {
    R.authenticate();
});
var displayResults = function(results){
    for(var i = 0; i < results.length; i++){
       var result = '<div class="search-result" id = search-result>' +
            '<div class="search-icon" id="search-icon' + i + '">' + 
            '<a href="#"><img src="' + results[i].icon + '" class="album-thumb"></a>' + '</div>' +
            '<div class ="search-text"><ul>' +
                '<li>Title: ' + results[i].name + '</li>' +
                '<li>Artist: ' + results[i].artist + '</li>' + 
                '<li>Album: ' + results[i].album + '</li>' +
            '</ul></div>' +
            '<script>' +
                '$("#search-icon' + i + '").click(function(){' +
                    'R.player.play({source: "' + results[i].key +'"});' +
                    '$(".search-result").remove();'+
                    '$("#search-results").modal(\'hide\');' +
                '});' +
            '</script>' + '<br /></div>' ;
        $('.modal-body').append(result);
    }
}

$(function(){    
    $("#submit-search").click(function(){
        $(".search-result").remove();
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
                    $("#search-results").modal('show');
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
