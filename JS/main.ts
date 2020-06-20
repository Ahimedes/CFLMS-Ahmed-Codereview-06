let arr = []                //create arrays for later use  
let arr2 = []

class Locate {              //create data model for location
    City: string;
    Zipcode: number;
    Address: string;
    teaser: any;
    constructor(City: string, Zipcode: number, Address: any, teaser: any) {
        this.City = City;
        this.Zipcode = Zipcode;
        this.Address = Address;
        this.teaser = teaser;
        
    }
    display() {
        return ``;          //empty string where the actual display function is going to be added
    }
}

class Museum extends Locate {   //extension with data of museums
    title: string;
    entryfee: any;
    telephonenumber: number;
    type: string;
    webaddress: string;

    constructor(title: string, City: string, Zipcode: number, Address: any, teaser: any, entryfee: any, telephonenumber: number, type: string, webaddress: string) {
        super(City, Zipcode, Address, teaser);
        this.title = title;
        this.entryfee = entryfee;
        this.telephonenumber = telephonenumber;
        this.type = type;
        this.webaddress = webaddress;
        
    }
    display() {         //display function with divs, structure and object-info
        return `
        ${super.display()}
		<div class="col-lg-3 col-md-6 col-sm-12">
  		<div>
      	<img style="width:22vw" src="${this.teaser}">
    	<hr>
  		</div>
  		<div class="col-lg-12 col-md-1 col-sm-12">
    	<h4>${this.title}</h4>
    	<p><b>City:</b> ${this.City}</p>
    	<p><b>ZIP-Code:</b> ${this.Zipcode}</p>
        <p><b>Address:</b> <br>${this.Address}</p>
        <p><b>Fee:</b> ${this.entryfee}</p>
    	<p><b>Tel.:</b>${this.telephonenumber}</p>
    	<p><b>Exhibit: </b>${this.type}</p>
    	<p><b>Website: </b><a href="${this.webaddress}"$</a>${this.title}</p>
  		</div>
		</div>
        `;
    }

}

class Exhibition extends Locate {   //extension with data of tours
    title: string;
    entryfee: any;
    eventdate: string;
    eventtime: string;

    constructor(title: string, City: string, Zipcode: number, Address: any, teaser: any, entryfee: any, eventdate: string, eventtime: string) {
        super(City, Zipcode, Address, teaser);
        this.title = title;
        this.entryfee = entryfee;
        this.eventdate = eventdate;
        this.eventtime = eventtime;
        
    }
    display() {         //display function with divs, structure and object-info
        return `
        ${super.display()}
		<div class="col-lg-3 col-md-6 col-sm-12">
  		<div>
      	<img style="width:22vw" src="${this.teaser}">
    	<hr>
  		</div>
  		<div class="col-lg-12 col-md-1 col-sm-12">
    	<h4 class="">${this.title}</h4>
    	<p><b>City:</b> ${this.City}</p>
    	<p><b>ZIP-Code:</b> ${this.Zipcode}</p>
        <p><b>Address:</b> <br>${this.Address}</p>
        <p><b>Fee:</b> ${this.entryfee}</p>
    	<p><b>Date: </b>${this.eventdate}</p>
    	<p><b>Time: </b>${this.eventtime}</p>
  		</div>
		</div>
        `;
    }

}

//put new objects in the two existing arrays

arr[0] = new Museum("Bestattungsmuseum", "Vienna", 1110, "Simmeringer Hauptstraße 234", "img/bestattung.jpg", "6€", 0o65055555, "Funeral", "https://www.bestattung.at");
arr[1] = new Museum("Brennpunkt", "Vienna", 1120,  "Malfattigasse 4", "img/brennpunkt.jpg", "5€", 0o6124556, "Curiosities", "https://www.wien.gv.at/english/culture/museums/brennpunkt/museum.html");
arr[2] = new Museum("Foltermuseum", "Vienna", 1060,  "Fritz-Grünbaum-Platz 1", "img/foltermuseum.jpg", "6€", 0o6124546, "Torture", "https://www.foltermuseum.at");

arr2[0] = new Exhibition("The third man tour - Sewer tour", "Vienna", 1010, "Karlsplatz-Girardipark", "img/thirdman.jpg", "10€", "THU–SUN", "Every full hour from 10am–8pm");
arr2[1] = new Exhibition("Hotrod daylight tour", "Vienna", 1010, "Judengasse 4", "img/hotrod.jpg", "99€ incl. helmet, walkie talkie and guide", "Daily", "Every two hours from 10am-6pm");
arr2[2] = new Exhibition("Vienna's ugly tour", "Vienna", 1020, "Obere Augarten Strasse 1", "img/uglytour.jpg", "No information", "11.06.2020", "10am-1pm");

//for-loop in order to display all data

function displayrestaurants() {
	for (let i in arr) {
        document.getElementById("museum").innerHTML += arr[i].display();
	}
}
function displaytours() {
	for (let j in arr2) {
        document.getElementById("event").innerHTML += arr2[j].display();
	}
}

//add event listener, so that the functions are executed, once the page is loaded, otherwise nothing will be displayed

document.addEventListener("DOMContentLoaded", function(){
	displayrestaurants();
    displaytours();
});
