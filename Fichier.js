let ville = 'Marseille';
recevoirTemperature(ville);

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric';
  
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let ville = reponse.name;
        let temperature = reponse.main.temp;
        document.querySelector('#ville').textContent = ville;
        document.querySelector('#temperature_label').textContent = temperature;
      } 
    }
  }
}

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
		"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});