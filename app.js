var request = new XMLHttpRequest();
request.open('get','https://restcountries.eu/rest/v2/all',true)
request.send()
request.onload = function(){
    var data = JSON.parse(this.response)
    for(i=0; i<data.length;i++){
        var name = data[i].name
        var lat = data[i].latlng[0]
        var lng = data[i].latlng[1]
        weatherdata(name,lat,lng)
    }
}

var weatherdata = (name,lat,lng) => {
    var request1 = new XMLHttpRequest();
    url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=769c0496ff4af6c6c883979bb2362c09'
    request1.open('get',url,true)
    request1.send()
    request1.onload = function(){
        var data = JSON.parse(this.response)
        console.log(name, data.main.temp)
    }
}
