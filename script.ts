
let events:Array<any>=[];
let sightsArray:Array<any>=[];
let restaurantsArray:Array<any>=[];
let eventsArray:Array<any>=[];

class loc{
	city="";
	zipcode="";



	constructor(city, zipcode){
		this.city = city;
		this.zipcode = zipcode;
	}

	showInfo(){
		return `The City is ${this.city}, Zipcode is ${this.zipcode}.`;
	}

}

var loc1 = new loc("Vienna", "1010");
var loc2 = new loc("Vienna", "1020");
	
/*function showloc1(){
	document.getElementById("properties").innerHTML= loc1.showInfo();
}
function showloc2() {
document.getElementById("properties").innerHTML= loc2.showInfo();
}
*/

class Sights extends loc{
	address; image; 
	/*type; km; seats; fuel;*/

	constructor(city, zipcode, address, image){
		super(city, zipcode);
		this.address = address;
		this.image = image;
		sightsArray.push(this);
		console.table(sightsArray);

	}

	showInfo(){
		return `${super.showInfo()} It's a ${this.address} which has ${this.image}, has ${this.zipcode} and fueled with ${this.city}.<br>`;
	}

}


class Restaurants extends Sights{
	type; phone;
	/*type; km; seats; fuel;*/

	constructor(city, zipcode, address, image, type, phone){
		super(city, zipcode, address, image);
		this.type = type;
		this.phone = phone;
		restaurantsArray.push(this);
		console.table(restaurantsArray);

	}

	showInfo(){
		return `${super.showInfo()} It's a ${this.address} which has ${this.image}, has ${this.zipcode} and fueled with ${this.city}.<br>`;
	}

}

class Events extends Sights {
	eventDate; eventTime;

	constructor(city, zipcode, address, image, eventDate, eventTime) {
		super(city, zipcode, address, image);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		eventsArray.push(this);
		console.table(eventsArray);
	}
	showInfo(){
		return `${super.showInfo()} It's a ${this.city} which has ${this.zipcode}, has ${this.address} and fueled with ${this.image} and ${this.eventDate} and ${this.eventTime}.<br>`;
	}

}
var sights1 = new Sights("Vienna", "1020", "Riesenradplatz 1", "https://www.wien.info/media/images/41220-stephansdom-haas-haus-panorama-1to1.jpeg",);
var sights2 = new Sights("Vienna", "1010", "Stephansplatz 3", "https://www.wien.info/media/images/41220-stephansdom-haas-haus-panorama-1to1.jpeg",);



for (let i = 0; i<sightsArray.length; i++) {
		document.getElementById("properties").innerHTML+= '<button type="button" onclick="sightsinfo(' +i +')">ShowInfo</button><br />';
	
}


var restaurants1 = new Restaurants("Vienna", "1020", "Schachgasse 2", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Illuminated_facade_of_a_3-storey_restaurant_with_Japanese_signs_and_red_paper_lanterns%2C_Chiyoda%2C_Tokyo.jpg/800px-Illuminated_facade_of_a_3-storey_restaurant_with_Japanese_signs_and_red_paper_lanterns%2C_Chiyoda%2C_Tokyo.jpg", "Asian", "0699909090");
var restaurants2 = new Restaurants("Vienna", "1010", "Friedrich Müller Weg 3", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Indisches_Restaurant_Osnabr%C3%BCck.jpg/800px-Indisches_Restaurant_Osnabr%C3%BCck.jpg", "Indian", "0664606060");

console.table(restaurantsArray)
for (let i = 0; i<restaurantsArray.length; i++) {
		document.getElementById("properties").innerHTML+= '<button type="button" onclick="restaurantsinfo(' +i +')">ShowRestaurant</button><br />';
	
}
var events1 = new Events("Vienna", "1120", "Klausgasse 3", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/INC_en_directo_en_la_sala_Rep%C3%BAblica_%28Valencia%29_3.jpg/1920px-INC_en_directo_en_la_sala_Rep%C3%BAblica_%28Valencia%29_3.jpg", "03.02.2021", "17:00");
var events2 = new Events("Vienna", "1140", "Friedrichsallee 5", "https://upload.wikimedia.org/wikipedia/commons/2/23/Ormskirk_Music_Society_in_concert.jpg", "03.04.2021", "19:00");

console.table(eventsArray)
for (let i = 0; i<eventsArray.length; i++) {
		document.getElementById("properties").innerHTML+= '<button type="button" onclick="eventsinfo(' +i +')">ShowEvent</button><br />';
	
}

function sightsinfo(x){
	let y = sightsArray[x];
	let city = y.city;
	let zipcode = y.zipcode;
	let address = y.address;
	let image = y.image;
	document.getElementById("displayproperties").innerHTML += 'Info is' +city +zipcode +address +'<img src=' +image+'>';
	
}


function restaurantsinfo(x) {

	let city = restaurantsArray[x].city;
	let zipcode = restaurantsArray[x].zipcode;
	let address = restaurantsArray[x].address;
	let image = restaurantsArray[x].image;
	let type = restaurantsArray[x].type;
	let phone = restaurantsArray[x].phone;
	document.getElementById("displayproperties").innerHTML += 'Info is' +city +zipcode +type +address +phone +'<img src=' +image+'>';	
}

function eventsinfo(x){
	let y = eventsArray[x];
	let city = y.city;
	let zipcode = y.zipcode;
	let address = y.address;
	let image = y.image;
	let eventDate = y.eventDate;
	let eventTime = y.eventTime;
document.getElementById("displayproperties").innerHTML += 'Info is' +city +zipcode +address +eventDate + eventTime +'<img src=' +image+'>';

}
// ab hier der Restaurants-Array-Code
