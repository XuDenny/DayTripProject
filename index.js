//*array variables//
let destinations = ["Catalina Island", "Las Vegas", "San Diego", "Solvang", "Malibu", "Palm Springs", "Joshua Tree" ];
let restaurant = ["Sushi", "Shabu-Shabu", "Korean BBQ", "Pho", "Burritos", "Pasta"];
let transportation = ["Car", "Plane", "Boat", "Bike", "Scooter", "Bus"];
let entertainment = ["Movies", "Stargaze", "Paint", "Hike", "Concert", "Shop"];

//*Random function//
function getRandom(item){
    return item[Math.floor(math.random() * item.length)];
}


//*day trip generator//
function generateDayTrip(){
    let destination = getRandom(destinations);
    let restaurant = getRandom(restaurant);
    let transportation = getRandom(transportation);
    let entertainment = getRandom(entertainment);
    return {
        destination: destination,
        restaurant: restaurant,
        transportation: transportation,
        entertainment: entertainment
    };
}

function displayTrip(dayTrip) {
    let message = 'Your day trip has been generated! \n\nWhere we going?: ${dayTrip.destination}\n Where we eating?: ${dayTrip.restaurant}\n What we riding?: ${dayTrip.transportation}\n What we doing?: ${dayTrip.entertainment}';
    alert(message)
}

//* confirmation//
function confirmTrip(dayTrip) {
    let confirmation = prompt('Your day trip is :\n\nDestionation: ${daytip.destination)\nRestauraunt: ${dayTrip.restaurant}\nTransportation: ${dayTrip.transportation}\nEntertainment: ${dayTrip.entertainment}\n\n Are you happy with the choices? Type `yes` or `no`.');
    return confirmation.toLowerCase() === 'Yes';
}

//*Reselection//
function reselectItem(type){
    let reselectItem = getRandom(eval(type));
    return reselectItem;
}

//*Main Function
function runGenerateDayTrip(){
    let dayTrip;
    let confirm= false;

    do{
        dayTrip = generateDayTrip();
        confirm = confirmTrip(dayTrip);

        if(!confirm){
            let reselectItem = prompt('Which item would you like to regenerate?\n1. Destination\n2.Restaurant\n3. Transportation\n4. Entertainment.');
            switch (reselectItem) {
                case "1":
                    dayTrip.destination = reselectItem("destination");
                    break;
                case "2":
                    dayTrip.restaurant = reselectItem("restaurant");
                    break;
                case "3":
                    dayTrip.transportation= reselectItem("transportation");
                    break;
                case "4":
                    dayTrip.entertainment= reselectItem("entertainment");
                    break;
                default:
                    alert('Invalid input. Please enter a number form 1 to 4"')
            }

        }
    } while (!confirm);

    displayTrip(dayTrip)
}

//*Run//
runGenerateDayTrip();