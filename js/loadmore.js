
var pageno=1;

$("#loadMore").click(function(){
        var request=new XMLHttpRequest();
        var url="api/"+pageno;
        request.open('GET',url,true)
        request.onload = function() {
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                data.images.forEach(imgsource => {
                   myfunc(imgsource); 
                });
            }
        }
})(jQuery);