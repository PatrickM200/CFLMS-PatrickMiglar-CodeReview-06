interface destinations {
  render(): string;
}

class locations implements destinations {
  protected name: string;
  protected city: string;
  protected zipcode: number;
  protected address: string;
  protected image: any;

  constructor(
    name: string,
    city: string,
    zipcode: number,
    address: string,
    image: any
  ) {
    this.name = name;
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.image = image;
  }
  //------------HTML INPUT---------//
  render() {
    return `
        
		<div class="bg-secondary col-lg-3 col-md-6 col-sm-12">
  		<div class="content">
  		<hr>
    	<a href="#">
      	<img class="d-none d-md-block" src="${this.image}">
    	</a>
    	<hr>
  		</div>
  		<div class="contetText col-lg-12 col-md-1 col-sm-12">
        <h4 class="contentTitle">${this.name}</h4>
        <p><b>City:</b> ${this.city}</p>
        <p><b>ZIP-Code:</b> ${this.zipcode}</p>
        <p><b>Address:</b> ${this.address}</p>
    	  <hr>
  		</div>
		</div>
		`;
  }
}
class restaurants extends locations {
  protected telefon: string;
  protected art: string;
  protected website: string;

  constructor(
    name: string,
    city: string,
    zipcode: number,
    address: string,
    image: any,
    telefon: string,
    art: string,
    website: string
  ) {
    super(name, city, zipcode, address, image);
    this.telefon = telefon;
    this.art = art;
    this.website = website;
  }
  render() {
    return `
		<div class="bg-secondary col-lg-3 col-md-6 col-sm-12">
  		<div class="content">
  		<hr>
    	<a href="#">
      	<img class="d-none d-md-block" src="${this.image}">
    	</a>
    	<hr>
  		</div>
  		<div class="contetText col-lg-12 col-md-1 col-sm-12">
        <h4 class="contentTitle">${this.name}</h4>
        <p><b>City:</b> ${this.city}</p>
        <p><b>ZIP-Code:</b> ${this.zipcode}</p>
        <p><b>Address:</b> ${this.address}</p>
        <hr>
        <p><b>Time:</b> ${this.telefon}</p>
        <p><b>Date:</b> ${this.art}</p>
        <p><b>Date:</b> ${this.website}</p>
    	  <hr>
  		</div>
		</div>
		`;
  }
}
class events extends locations {
  protected time: string;
  protected date: string;

  constructor(
    name: string,
    city: string,
    zipcode: number,
    address: string,
    image: any,
    time: string,
    date: string
  ) {
    super(name, city, zipcode, address, image);
    this.time = time;
    this.date = date;
  }
  render() {
    return `
		<div class="bg-secondary col-lg-3 col-md-6 col-sm-12">
  		<div class="content">
  		<hr>
    	<a href="#">
      	<img class="d-none d-md-block" src="${this.image}">
    	</a>
    	<hr>
  		</div>
  		<div class="contetText col-lg-12 col-md-1 col-sm-12">
        <h4 class="contentTitle">${this.name}</h4>
        <p><b>City:</b> ${this.city}</p>
        <p><b>ZIP-Code:</b> ${this.zipcode}</p>
        <p><b>Address:</b> ${this.address}</p>
        <hr>
        <p><b>Time:</b> ${this.time}</p>
        <p><b>Date:</b> ${this.date}</p>
    	  <hr>
  		</div>
		</div>
		`;
  }
}
//-----------DATA INPUT------------//
const data: destinations[] = [
  new locations("Dome Disco", "Wien", 1010, "Domstraße 16", "/img/loca1.jpg"),
  new locations(
    "Nightlife",
    "Wiener Neustadt",
    2700,
    "Granzer Straße 10",
    "/img/loca2.jpg"
  ),
  new locations(
    "Metalbar",
    "Bromberg",
    2540,
    "Wiener Straße 2",
    "/img/loca3.jpg"
  ),
  new locations("Brotherhood", "Rust", 2310, "Rust-Weg 12", "image"),

  new restaurants(
    "Dome Wirt",
    "Wien",
    1010,
    "Dome Weg 2",
    "/img/rest4.jpg",
    "+43 645 56 56",
    "Wirt",
    "www.wirt1.at"
  ),
  new restaurants(
    "Stagl",
    "Wiener Neustadt",
    2900,
    "Grazerstraße 5",
    "/img/rest2.png",
    "+43 235 23 34",
    "Chinese",
    "www.wirt2.at"
  ),
  new restaurants(
    "Tahler",
    "Bromberg",
    2700,
    "Wiener Weg 6",
    "/img/rest3.jpg",
    "+43 646 45 45",
    "Wirt",
    "www.wirt3.at"
  ),
  new restaurants(
    "City Stüberl",
    "Wiener Neustadt",
    2350,
    "Wiener Straße 12",
    "/img/rest4.jpg",
    "+43 34 23 64",
    "Kaffeehaus",
    "www.wirt4.at"
  ),

  new events(
    "Novarock",
    "Österreich",
    2800,
    "Burgenland 1",
    "/img/event1.jpg",
    "10:00:00",
    "28.09.2021"
  ),
  new events(
    "Rock am Ring",
    "Deutschland",
    23562,
    "Kempten 2",
    "/img/event2.jpg",
    "09:00:00",
    "23.10.2021"
  ),
  new events(
    "Wacken",
    "Deutschland",
    28141,
    "Berlin 3",
    "/img/event3.jpg",
    "08:00:00",
    "03.05.2021"
  ),
  new events(
    "Ozora",
    "Ungarn",
    29811,
    "Sopron 4",
    "/img/event4.jpg",
    "17:00:00",
    "06.06.2021"
  ),
];
// -------------FILTER---------------//
let filterRest = (obj: destinations) => {
  return obj instanceof restaurants;
};
let filterLoca = (obj: destinations) => {
  return (
    obj instanceof locations &&
    obj instanceof restaurants === false &&
    obj instanceof events === false
  );
};
let filterEven = (obj: destinations) => {
  return obj instanceof events;
};

const list = ["Locations", "Restaurants", "Events"];
list.forEach((item) => {
  let filteredList: destinations[];
  if (item === "Location") {
    filteredList = data.filter(filterLoca);
  } else if (item === "Restaurantes") {
    filteredList = data.filter(filterRest);
  } else {
    filteredList = data.filter(filterEven);
  }
  let text = `<div class="mainTitle col-12 bg-dark text-light m-2 h3 text-center">${item}</div>`;
  filteredList.forEach((filteredListItem) => {
    text += filteredListItem.render();
  });
  document.querySelector("main").innerHTML += text;
});
