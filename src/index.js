const weatherView = (function() {

    function render() {
        console.log("weather added to the html");
    }
    return {
        render: render
    };
}) ();

const weatherController =(function() {
    let weathers = [];
    function getWeather(){
        console.log("getting weather");
        addWeather();
    }
    function addWeather() {
        console.log("weathers.push(item)");
    }

    return {
        getWeather: getWeather
    };

}) ();

function weatherReport(city, description, time) {

    const getWeather = () => {
        console.log(`the city of ${city}, is going to be ${description} at ${time}`)
    }


    return {
        getWeather: getWeather,
        city,
        description,
        time
    };

}

let b = document.createElement("button");
b.innerHTML = "render weather";
b.onclick = function() {
    weatherView.render();
    weatherController.getWeather();
}
document.body.appendChild(b);




/*let weather = new Vue({
    el: "#list",
    data: {
        
        items: [
            {text: "noice", gender: "b"},
            {text: "noice", gender: "g"},
            {text: "noice", gender: "b"}
        ],
        methods: [
            function sayItem() {
                console.log(this.list);
            }
        ]

    }

})*/