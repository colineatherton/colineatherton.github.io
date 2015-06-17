//GLOBAL VARIABLES
var costSites = ""; // cost of sites
var costFeeds = ""; // cost of feeds
var perMonth = "";
var costSetup = ""; // cost of setup
var grandTotal = "0"; // total to display in calculator
var freeFeeds = ""; // the amount of free feeds
var free = document.getElementById("free");
var displayTotal = document.getElementById("grandTotal");
var SitesSetup = ""; // the amount of sites, used to work out set up fees
////////

//UPDATE THE CALCULATOR
function updateCalculator(){
free.innerHTML = "Your first " + freeFeeds + " Data Feeds are Free";//DISPLAY ON CALC THE AMOUNT OF FREE FEEDS
//if (costSites == "call us mon") {
	//grandTotal = "just give us a call mon";
	//} else {
		grandTotal = (((costSites + costFeeds) * 12) + costSetup);//TOTAL THE GRAND MONTHLY SPEND
		displayTotal.innerHTML = "£" + grandTotal;//DISPLAY THE MONTHLY COST ON THE CALCULATOR
//	};
}
////////

//CALL US MON!
//function callusmon() {
//	displayTotal.innerHTML = "Just give us a call mon!";
//}
////////

//WHEN CHOICE OF SETUP IS MADE
function getSetup() {
	//LOCAL VARIABLES
	var setupCalc = document.getElementById("setUpTotal");// WHERE THE COST OF THE SETUP IS SHOWN ON THE CALCULATOR
	var howMuch = document.getElementById("costSetup");// WHERE THE COST OF THE SETUP IS SHOWN IN THE BODY
	var yesNo = document.getElementById("setUp_yesNo");//WHERE THE CHOICE OF SET UP (YES/NO) IS SHOWN ON CALCULATOR
	var setUp = "";//HOLDS THE VALUE OF THE SET UP CHOICE AS A STRING
	if (document.getElementById("option1").checked == true) {//IF YES IS CHOSEN AS THE SET UP OPTION DO THIS...
    	costSetup = (SitesSetup * 50);//STORE THE INT 50 TO THIS GLOBAL VARIABLE
    	setUp = "Yes";//STORE THE CHOICE AS THE STRING - YES
    }
    else if (document.getElementById("option2").checked == true) {//HOWEVER, IF NO IS CHOSEN AS THE SET UP OPTION DO THIS...
        costSetup = 0;//STORE THE INT 0 TO THIS GLOBAL VARIABLE
        setUp = "No";//STORE THE CHOICE AS THE STRING - YES
    }
    else {//OTHER WISE DON'T DO ANYTHING
        // DO NOTHING
    }
    howMuch.innerHTML = costSetup;//DISPLAY IN THE BODY, THE COST OF THE SETUP
    yesNo.innerHTML = setUp;//DISPLAY IN THE CALCULATOR IF SET UP WAS CHOSEN, YES OR NO
    //setupCalc.innerHTML = costSetup;//DISPLAY IN THE CALCULATOR THE COST OF THE SET UP(NO LONGER IN HTML)
    updateCalculator();//UPDATE THE CALCULATOR WITH CURRENT TOTAL
}
////////

//WHEN AMOUNT OF DATA FEEDS ARE ENTERED
function getFeeds() {
	//LOCAL VARIBLES
	var feeds = document.getElementById("feeds"); //WHERE THE FEEDS ARE ENTERED
	var totalFeeds = document.getElementById("totalFeeds"); //WHERE AMOUNT OF FEEDS ARE SHOWN ON CALCULATOR
	var howMuch = document.getElementById("costFeeds"); // WHERE THE COST OF THE FEEDS ARE SHOWN IN THE BODY
	//var free = document.getElementById("free");
	var numFeeds = feeds.value; // THE AMOUNT OF FEEDS
	////////

	//WHEN FEEDS ENTERED DO THIS...
	totalFeeds.innerHTML = numFeeds; //UPDATE THE CALC TO SHOW HOW MANY FEEDS IN PLAN
	numFeeds = (Number(numFeeds)); //TURN THE AMOUNT OF FEEDS INTO A NUMBER
	numFeeds = (numFeeds - freeFeeds); //TAKE AWAY ANY FREE FEEDS THAT COME WITH SITES AND LEAVE BILLABLE FEEDS
	if ((numFeeds + freeFeeds) >= 50) { //IF THERE ARE 50 OR MORE FEEDS DO THIS...
		costFeeds = "call us mon"; //SET THE COST OF FEEDS AS A MESSAGE TO CALL US
		perMonth = ""; //DON'T SET ANYTHING IN THIS VARIABLE
		//callusmon();
	} else if (numFeeds > 0) {//HOWEVER, IF THERE ARE BEWTEEN 1 AND 49 FEEDS DO THIS...
		costFeeds = (numFeeds * 3);//SET THE COST OF FEEDS AS THE AMOUNT OF BILLABLE FEEDS X £3.00
		perMonth = " Per Month";//SET PER MONTH MESSAGE
		} else {//OTHER WISE, IF THERE ARE NO BILLABLE FEEDS DO THIS...
		costFeeds = 0;//SET THE COST OF SITES AS INT ZERO
		perMonth = "";//SET NOTHING IN THIS VARIABLE
	};
	howMuch.innerHTML = costFeeds; //+= perMonth;//DISPLAY IN THE BODY, THE COST OF THE FEEDS
	updateCalculator();//UPDATE THE CALCULATOR WITH CURRENT TOTAL
	//free.innerHTML = freeFeeds;
}
////////

//WHEN AMOUNT OF SITES ARE ENTERED
function getSites() {
	//LOCAL VARIABLES
	var sites = document.getElementById("sites"); //WHERE THE SITES ARE ENTERED
	var totalSites = document.getElementById("totalSites"); //WHERE AMOUNT OF SITES ARE SHOWN ON CALCULATOR
	var howMuch = document.getElementById("costSites"); // WHERE THE COST OF THE SITES ARE SHOWN IN THE BODY
	var numSites = sites.value; // THE AMOUNT OF SITES
	var billSites = ""; //THE AMOUNT OF BILLABLE SITES
	////////

	//WHEN SITES ENTERED DO THIS...
	totalSites.innerHTML = numSites; //UPDATE THE CALC TO SHOW HOW MANY SITES IN PLAN
	numSites = (Number(numSites)); //TURN THE AMOUNT OF SITES INTO A NUMBER
	if (numSites >= 10) { //IF THERE ARE 10 OR MORE SITES DO THIS...
		//callusmon();
		costSites = "call us mon"; //SET THE COST OF SITES AS A MESSAGE TO CALL US
		perMonth = ""; //DON'T SET ANYTHING IN THIS VARIABLE
	} else if (numSites >= 4) {//HOWEVER, IF THERE ARE BEWTEEN 4 AND 9 SITES DO THIS...
		billSites = (numSites - 0);//3);//SET THE AMOUNT OF BILLABLE SITES AS THE NUMBER OF SITES MINUS 3
		costSites = (billSites * 20);//SET THE COST OF SITES AS THE AMOUNT OF BILLABLE SITES X £20.00
		perMonth = " Per Month";//SET PER MONTH MESSAGE
	} else {//OTHER WISE, IF THERE ARE LESS THAN 4 SITES DO THIS...
		costSites = 0;//SET THE COST OF SITES AS INT ZERO
		perMonth = "";//SET NOTHING IN THIS VARIABLE
	};
	howMuch.innerHTML = costSites //+= perMonth;//DISPLAY IN THE BODY, THE COST OF THE SITES
	freeFeeds = (numSites * 3);//SET THE AMOUNT OF FREE FEEDS AS 3 X THE AMOUNT OF SITES AND MAKE AVAILABLE GLOBALLY
	updateCalculator();//UPDATE THE CALCULATOR WITH AMOUNT OF FREE FEEDS AND CURRENT TOTAL
	SitesSetup = numSites;
	getFeeds();//RUN THROUGH THE FEEDS FUNCTION IN CASE THE AMOUNT OF FREE METERS HAS CHANGED, EFFECTING THEIR PRICE
	getSetup();
	
}
////////



//WHEN THE USER SUBMITS THE FORM
function planUnderstood() {
	var tickMsg = "";
	var isPlanUnderstood = document.getElementById("understood").checked;
	if (isPlanUnderstood == true) {
		alert("submit this form!");
	} else {
		alert("please tick msg");
		tickMsg = "hello";
		document.getElementById("noTick").innerHTML = tickMsg;
	}
}
////////