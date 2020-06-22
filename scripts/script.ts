interface destinations {
  render(): string;
}

class locations implements destinations {
  protected name: string;
  protected city: string;
  protected zipcode: number;
  protected address: string;
  protected image: any;
  protected dates: any;

  constructor(
    name: string,
    city: string,
    zipcode: number,
    address: string,
    image: any,
    dates: any,
  ) {
    this.name = name;
    this.city = city;
    this.zipcode = zipcode;
    this.address = address;
    this.image = image;
    this.dates = dates;
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
        <p><b>Create:</b> ${this.dates.toLocaleString('de-AT')}</p>
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
    website: string,
    dates: any,
  ) {
    super(name, city, zipcode, address, image, dates);
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
        <p><b>Telefon:</b> ${this.telefon}</p>
        <p><b>Type:</b> ${this.art}</p>
        <p><b>Web:</b> ${this.website}</p>
        <p><b>Create:</b> ${this.dates.toLocaleString('de-AT')}</p>
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
    date: string,
    dates: any,
  ) {
    super(name, city, zipcode, address, image, dates);
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
        <p><b>Create:</b> ${this.dates.toLocaleString()}</p>
    	  <hr>
  		</div>
		</div>
		`;
  }
}
//-----------DATA INPUT------------//
const data: destinations[] = [
  new locations(
    "Dome Disco",
    "Wien im Zentrum",
    1010,
    "Domstraße 16",
    "img/loca1.jpg",
    new Date(2008, 1, 2, 50, 45)
  ),
  new locations(
    "Nightlife",
    "Wiener Neustadt",
    2700,
    "Granzer Straße 10",
    "img/loca2.jpg",
    new Date(2009, 1, 2, 40, 45)
  ),
  new locations(
    "Metalbar",
    "Bromberg",
    2540,
    "Wiener Straße 2",
    "img/loca3.jpg",
    new Date(2010, 1, 2, 50, 25)
  ),
  new locations(
    "Brotherhood",
    "Rust am See",
    2310,
    "der-lange-Weg 12",
    "img/loca4.jpg",
    new Date(2008, 1, 2, 40, 12)
  ),

  new restaurants(
    "Dome Wirt",
    "Wien",
    1010,
    "Dome Weg 2",
    "img/rest4.jpg",
    "+43 645 56 56",
    "Tavern",
    "www.wirt1.at",
    new Date(2010, 1, 2, 30, 23)
  ),
  new restaurants(
    "Stagl",
    "Wiener Neustadt",
    2900,
    "Grazerstraße 5",
    "img/rest2.png",
    "+43 235 23 34",
    "Chinese",
    "www.wirt2.at",
    new Date(2009, 1, 2, 20, 13)
  ),
  new restaurants(
    "Tahler",
    "Bromberg",
    2700,
    "Wiener Weg 6",
    "img/rest3.jpg",
    "+43 646 45 45",
    "Tavern",
    "www.wirt3.at",
    new Date(2011, 1, 2, 60, 43)
  ),
  new restaurants(
    "City Stüberl",
    "Wiener Neustadt",
    2350,
    "Wiener Straße 12",
    "img/rest4.jpg",
    "+43 34 23 64",
    "Coffee house",
    "www.wirt4.at",
    new Date(2017, 1, 2, 5, 29)
  ),

  new events(
    "Novarock",
    "Österreich",
    2800,
    "Burgenland 1",
    "img/event1.jpg",
    "10:00:00",
    "28.09.2006",
    new Date(2015, 1, 2, 30)
  ),
  new events(
    "Rock am Ring",
    "Deutschland",
    23562,
    "Kempten 2",
    "img/event2.jpg",
    "09:00:00",
    "23.10.2004",
    new Date(2014, 3, 9, 40)
  ),
  new events(
    "Wacken",
    "Deutschland",
    28141,
    "Berlin 3",
    "img/event3.jpg",
    "08:00:00",
    "03.05.2003",
    new Date(2013, 4, 6, 25),
  ),
  new events(
    "Ozora",
    "Ungarn",
    29811,
    "Sopron 4",
    "img/event4.jpg",
    "17:00:00",
    "06.06.2001",
    new Date(2012, 5, 2, 40),
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
  if (item === "Locations") {
    filteredList = data.filter(filterLoca);
  } else if (item === "Restaurants") {
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
