var product1 = "<ul>"+
								"<li>Sound Isolating Earphones, Headphones with Strong bass-driven stereo sound;</li>"+
								"<li>Excellent passive attenuation of ambient noise;</li>"+
								"<li>Ideal for use will all MP3, iPod, iPhone, DVD and CD players, and portable gaming systems;</li>"+
								"<li>Tangle Free, Flat cable;</li>"+
								"<li>Symmetrical cable, 1 Year Warranty, 30 Day Money Back Guaranteel;</li>"+
							"</ul>"+
							"<p>Contact: John</p>"+
							"<p>Mobile: 086 107 8797</p>"+
							"<p>Email: only4fohg@gmail.com</p>";
var product2 = "<ul>"+
								"<li>Sound Isolating Earphones, Headphones with Strong bass-driven stereo sound;</li>"+
								"<li>Excellent passive attenuation of ambient noise;</li>"+
								"<li>Ideal for use will all MP3, iPod, iPhone, DVD and CD players, and portable gaming systems;</li>"+
								"<li>Tangle Free, Flat cable;</li>"+
								"<li>Symmetrical cable, 1 Year Warranty, 30 Day Money Back Guaranteel;</li>"+
							"</ul>"+
							"<p>Contact: John</p>"+
							"<p>Mobile: 086 107 8797</p>"+
							"<p>Email: only4fohg@gmail.com</p>";
var product3 = "<ul>"+
								"<li>Sound Isolating Earphones, Headphones with Strong bass-driven stereo sound;</li>"+
								"<li>Excellent passive attenuation of ambient noise;</li>"+
								"<li>Ideal for use will all MP3, iPod, iPhone, DVD and CD players, and portable gaming systems;</li>"+
								"<li>Tangle Free, Flat cable;</li>"+
								"<li>Symmetrical cable, 1 Year Warranty, 30 Day Money Back Guaranteel;</li>"+
							"</ul>"+
							"<p>Contact: John</p>"+
							"<p>Mobile: 086 107 8797</p>"+
							"<p>Email: only4fohg@gmail.com</p>";
var product4 = "<ul>"+
								"<li>Sound Isolating Earphones, Headphones with Strong bass-driven stereo sound;</li>"+
								"<li>Excellent passive attenuation of ambient noise;</li>"+
								"<li>Ideal for use will all MP3, iPod, iPhone, DVD and CD players, and portable gaming systems;</li>"+
								"<li>Tangle Free, Flat cable;</li>"+
								"<li>Symmetrical cable, 1 Year Warranty, 30 Day Money Back Guaranteel;</li>"+
							"</ul>"+
							"<p>Contact: John</p>"+
							"<p>Mobile: 086 107 8797</p>"+
							"<p>Email: only4fohg@gmail.com</p>";

var products = [product1,product2,product3,product4];

function addProduct(product){
	$("#description").empty();
	$("#description").append(product);
	$("#myModal").modal('show');
};

$(document).ready(function () {

	$(".promo1 img").click(function(){
		addProduct(products[0])
	});
	$(".promo2 img").click(function(){
		addProduct(products[1])
	});
	$(".promo3 img").click(function(){
		addProduct(products[2])
	});
});
