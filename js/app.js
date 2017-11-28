var url ='https://crossorigin.me/https://api.darksky.net/forecast/';
var key ='28113b639607f49346658701731ef4b3';
var coords = {
scl: '-33.4488897,-70.6692655',
ccp:'-36.8201352,-73.0443904'
}
 
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
 
var queryParams = ['exclude=[minutely,hourly,daily, alerts,flags]','lang=es', 'units=auto']
 
var image ={
                'clear-day':'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjipO-M977XAhVGw2MKHSF_CigQjRwIBw&url=https%3A%2F%2Ftwitter.com%2Fuberdanger%2Fstatus%2F684727518839074816&psig=AOvVaw2aIWGcGJ_v2cvn7YmWM4-r&ust=1510778609546836',
                'rain':'https://www.google.com/search?rlz=1C1GGRV_enCL751US752&biw=1408&bih=610&tbm=isch&q=dia+lluvioso+dibujo&sa=X&ved=0ahUKEwiM9sHz9r7XAhUM9WMKHaPnBYMQhyYIJg#imgrc=-vpHh3MbfWCyBM:',
}
 
$('#select').on('change', function(){       
$.ajax({
                url: url + key + '/' + coords [$(this).val()] +'?'+ queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
                method:'GET'
}).then(function(data) {
                                console.log(data);
                                                                $('#resumen').text(parseInt(data.currently.temperature) + '°'+ data.currently.summary);
                                                                $('#sensación').text(data.currently.apparentTemperature + '°');
                                                                $('#probabilidad').text(data.currently.precipProbability * 100 + '%');
                                                                $('#humedad').text(data.currently.humidity * 100 + '%');
                                                                $('#img-responsive').attr('src', image[data.currently.icon]);
 
                                                               
});
})
