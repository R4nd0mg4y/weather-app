var search = document.querySelector('.seach')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body=document.querySelector('body')


let input = document.getElementById("id");
input.addEventListener('keypress',function(e){
	if (e.code ==='Enter'){
		
		changeWeatherUI();
	}
});
async function changeWeatherUI(){
	let CapitalSearch=document.getElementById("id").value
	let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${CapitalSearch}&appid=25b4d97f9a0284c18fec91f199561da6`
	let data = await fetch(apiURL).then(res=> res.json())
	if(data.cod==200){
		content.classList.remove('hide')
		city.innerText=data.name
		country.innerText = data.sys.country
		visibility.innerText=data.visibility+'m'
		wind.innerText=data.wind.speed +'m/s'
		sun.innerText=data.main.humidity +'%'
		let tmp=Math.round(data.main.temp- 272.15)
		value.innerText=tmp
		shortDesc.innerText=data.weather[0].main
		let date = new Date((data.dt)*1000);
        time.innerText = date.toString(); 
		
		body.setAttribute('class','hot')
		if(tmp < 30){
			body.setAttribute('class','warm')
		}
		if(tmp < 25){
			body.setAttribute('class','cool')
		}
		if(tmp<19){
			if(tmp < 25){
				body.setAttribute('class','cold')
			}
		}
		
		
		} else {
			content.classList.add('hide')
		}
	
		console.log(data)
	}
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fc4bbf4091msh2c09d4cd6967219p1b5b48jsn67969fb275b9',
// 		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
// 	}
// };

// fetch('https://shazam.p.rapidapi.com/search?term=kisstherain&locale=en-US&offset=0&limit=5', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
	


