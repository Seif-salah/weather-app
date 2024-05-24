console.log("js worked");

let weather={
    apiKey:"0a5f878a0e9246d914cfd82a00dc0a7b",
    fetchWeather :function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    +city+
    "&units=metric&appid="
    +weather.apiKey
    
    ).then( (response) => response.json() )
    .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name }=data;
        const { icon,description }=data.weather[0];
        const {main}=data.weather[0];
        const {temp, humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,main);
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp>span").innerHTML=temp;
        document.querySelector(".humidity").innerHTML="humidity  "+humidity+" %";
        document.querySelector(".wind").innerHTML="wind speed:  "+speed+" km/h";
        // this my way by making style inline i tye style.disply but it doen't override
        // his methode by remove .loading from class list
        //document.querySelector(".wather").classList.remove("loafing")
        document.querySelector(".wather.loading").style.setProperty("display","block");

        // changing backgroung image
        document.body.style.background="url('https://source.unsplash.com/1600x900/?"+description+"')"
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

const searchedFor=document.querySelector(".search button");
searchedFor.addEventListener("click",function(){
    weather.search();
});

const onEnter=document.querySelector(".search-bar");
onEnter.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        weather.search();
    }
})

