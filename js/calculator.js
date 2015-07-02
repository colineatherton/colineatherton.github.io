//GLOBAL VARIABLES
var costSites = ""; // cost of sites
var costFeeds = ""; // cost of feeds
var perMonth = "";
var costSetup = ""; // cost of setup
var grandTotal = "0"; // total to display in calculator
var freeFeeds = ""; // the amount of free feeds
var displayTotal = document.getElementById("grandTotal");
var totalSitesSmall = document.getElementById("totalSitesSmall");
var totalSitesInline = document.getElementById("totalSitesInline");
var totalFeedsSmall = document.getElementById("totalFeedsSmall");
var totalFeedsInline = document.getElementById("totalFeedsInline");
var setUp_yesNoSmall = document.getElementById("setUp_yesNoSmall");
var setUp_yesNoInline = document.getElementById("setUp_yesNoInline");
var displayTotalSmall = document.getElementById("grandTotalSmall");
var displayTotalInline = document.getElementById("grandTotalInline");
var SitesSetup = ""; // the amount of sites, used to work out set up fees
var overTen = "no";
var overFifty = "no";
var callUsSites = document.getElementById("call-us-sites");
var callUsFeeds = document.getElementById("call-us-feeds");
////////

//UPDATE THE CALCULATOR
function updateCalculator(){
	if (overTen == "yes") {
		grandTotal = "Please Call";//TOTAL THE GRAND MONTHLY SPEND
		callUsFeeds.innerHTML = "";
		callUsSites.innerHTML = "You have entered 10 or more sites.<br />Please call us for an accurate quote.<br />We will register your account for you.<br /><strong>+44 203 108 9365</strong><br /><br />";
		displayTotal.innerHTML = grandTotal;//DISPLAY THE MONTHLY COST ON THE CALCULATOR
		displayTotalSmall.innerHTML = grandTotal;// update small calculator
		displayTotalInline.innerHTML = grandTotal;// update small calculator
	} else if (overFifty == "yes") {
		grandTotal = "Please Call";//TOTAL THE GRAND MONTHLY SPEND
		callUsSites.innerHTML = "";
		callUsFeeds.innerHTML = "You have entered 50 or more feeds.<br />Please call us for an accurate quote.<br />We will register your account for you.<br /><strong>+44 203 108 9365</strong><br /><br />";
		displayTotal.innerHTML = grandTotal;//DISPLAY THE MONTHLY COST ON THE CALCULATOR
		displayTotalSmall.innerHTML = grandTotal;// update small calculator
		displayTotalInline.innerHTML = grandTotal;// update small calculator
	}
	else {
		grandTotal = (((costSites + costFeeds) * 12) + costSetup);//TOTAL THE GRAND ANNUAL SPEND
		callUsSites.innerHTML = "";
		callUsFeeds.innerHTML = "";
		displayTotal.innerHTML = "£" + grandTotal;//DISPLAY THE MONTHLY COST ON THE CALCULATOR
		displayTotalSmall.innerHTML = "£" + grandTotal;// update small calculator
		displayTotalInline.innerHTML = "£" + grandTotal;// update small calculator
	}
}
////////

//WHEN CHOICE OF SETUP IS MADE
function getSetup() {
	//LOCAL VARIABLES
	var setupCalc = document.getElementById("setUpTotal");// WHERE THE COST OF THE SETUP IS SHOWN ON THE CALCULATOR
	var howMuch = document.getElementById("costSetup");// WHERE THE COST OF THE SETUP IS SHOWN IN THE BODY
	var yesNo = document.getElementById("setUp_yesNo");//WHERE THE CHOICE OF SET UP (YES/NO) IS SHOWN ON CALCULATOR
	var setUp = "No";//HOLDS THE VALUE OF THE SET UP CHOICE AS A STRING
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
    //howMuch.innerHTML = costSetup;//DISPLAY IN THE BODY, THE COST OF THE SETUP
    yesNo.innerHTML = setUp;//DISPLAY IN THE CALCULATOR IF SET UP WAS CHOSEN, YES OR NO
    setUp_yesNoSmall.innerHTML = setUp; //Display in small calc
    setUp_yesNoInline.innerHTML = setUp; //Display in small calc
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
	var numFeeds = feeds.value; // THE AMOUNT OF FEEDS
	////////

	//WHEN FEEDS ENTERED DO THIS...
	totalFeeds.innerHTML = numFeeds; //UPDATE THE CALC TO SHOW HOW MANY FEEDS IN PLAN
	totalFeedsSmall.innerHTML = numFeeds; // display in small calc
	totalFeedsInline.innerHTML = numFeeds; // display in small calc
	numFeeds = (Number(numFeeds)); //TURN THE AMOUNT OF FEEDS INTO A NUMBER
	numFeeds = (numFeeds - freeFeeds); //TAKE AWAY ANY FREE FEEDS THAT COME WITH SITES AND LEAVE BILLABLE FEEDS
	if ((numFeeds + freeFeeds) >= 50) { //IF THERE ARE 50 OR MORE FEEDS DO THIS...
		overFifty = "yes";
		perMonth = ""; //DON'T SET ANYTHING IN THIS VARIABLE
		//callusmon();
	} else if (numFeeds > 0) {//HOWEVER, IF THERE ARE BEWTEEN 1 AND 49 FEEDS DO THIS..
		overFifty = "no";
		costFeeds = (numFeeds * 3);//SET THE COST OF FEEDS AS THE AMOUNT OF BILLABLE FEEDS X £3.00
		perMonth = " Per Month";//SET PER MONTH MESSAGE
		} else {//OTHER WISE, IF THERE ARE NO BILLABLE FEEDS DO THIS...
		overFifty = "no";
		costFeeds = 0;//SET THE COST OF SITES AS INT ZERO
		perMonth = "";//SET NOTHING IN THIS VARIABLE
	};
	updateCalculator();//UPDATE THE CALCULATOR WITH CURRENT TOTAL
}
////////

//WHEN AMOUNT OF SITES ARE ENTERED
function getSites() {
	//LOCAL VARIABLES
	var sites = document.getElementById("sites"); //WHERE THE SITES ARE ENTERED
	var totalSites = document.getElementById("totalSites"); //WHERE AMOUNT OF SITES ARE SHOWN ON CALCULATOR
	var numSites = sites.value; // THE AMOUNT OF SITES
	var billSites = ""; //THE AMOUNT OF BILLABLE SITES
	////////

	//WHEN SITES ENTERED DO THIS...
	totalSites.innerHTML = numSites; //UPDATE THE CALC TO SHOW HOW MANY SITES IN PLAN
	totalSitesSmall.innerHTML = numSites; //UPDATE THE SMALLCALC TO SHOW HOW MANY SITES IN PLAN
	totalSitesInline.innerHTML = numSites; //UPDATE THE SMALLCALC TO SHOW HOW MANY SITES IN PLAN
	numSites = (Number(numSites)); //TURN THE AMOUNT OF SITES INTO A NUMBER
	if (numSites >= 10) { //IF THERE ARE 10 OR MORE SITES DO THIS...
		overTen = "yes"; //SET THE COST OF SITES AS A MESSAGE TO CALL US
	} else if (numSites >= 4) {//HOWEVER, IF THERE ARE BEWTEEN 4 AND 9 SITES DO THIS...
		overTen = "no";
		billSites = (numSites - 0);//3);//SET THE AMOUNT OF BILLABLE SITES AS THE NUMBER OF SITES MINUS 3
		costSites = (billSites * 20);//SET THE COST OF SITES AS THE AMOUNT OF BILLABLE SITES X £20.00
		perMonth = " Per Month";//SET PER MONTH MESSAGE
	} else {//OTHER WISE, IF THERE ARE LESS THAN 4 SITES DO THIS...
		overTen = "no";
		costSites = 0;//SET THE COST OF SITES AS INT ZERO
		perMonth = "";//SET NOTHING IN THIS VARIABLE
	};
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
	var noTick = document.getElementById("no-tick");
	var isPlanUnderstood = document.getElementById("understood").checked;
	if (isPlanUnderstood == true) {
		noTick.innerHTML = "";
		alert("submit this form!");
	} else {
		noTick.innerHTML = "Please tick to show you have understood your price plan."
	}
}
////////

//When the user ticks the box
function clearNoTickMsg() {
	var noTick = document.getElementById("no-tick");
	noTick.innerHTML = "";
}
////////