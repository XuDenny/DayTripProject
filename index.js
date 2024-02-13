//Array variables
const destinations = ["Catalina Island", "Las Vegas", "San Diego", "Solvang", "Malibu", "Palm Springs", "Joshua Tree"];
const restaurants = ["Sushi", "Shabu-Shabu", "Korean BBQ", "Pho", "Burritos", "Pasta"];
const transportations = ["Car", "Plane", "Boat", "Bike", "Scooter", "Bus"];
const entertainments = ["Movies", "Stargaze", "Paint", "Hike", "Concert", "Shop"];

//Random function
function getRandom(item) {
    return item[Math.floor(Math.random() * item.length)];
}

//Day trip generator
function generateDayTrip() {
    const destination = getRandom(destinations);
    const restaurant = getRandom(restaurants);
    const transportation = getRandom(transportations);
    const entertainment = getRandom(entertainments);
    return {
        destination: destination,
        restaurant: restaurant,
        transportation: transportation,
        entertainment: entertainment
    };
}

function displayTrip(dayTrip) {
    let message = `Your day trip has been generated! \n\nWhere we going?: ${dayTrip.destination}\nWhat we eating?: ${dayTrip.restaurant}\nWhat we riding?: ${dayTrip.transportation}\nWhat we doing?: ${dayTrip.entertainment}`;
    alert(message);
}

//Confirmation
function confirmTrip(dayTrip) {
    let confirm = prompt(`Your day trip is :\n\nDestination: ${dayTrip.destination}\nRestaurant: ${dayTrip.restaurant}\nTransportation: ${dayTrip.transportation}\nEntertainment: ${dayTrip.entertainment}\n\nAre you happy with the choices? Type 'yes' or 'no'`);
    return confirm.toLowerCase() === 'yes';
}

//Main Function
function runGenerateDayTrip() {
    let dayTrip = generateDayTrip();
    let confirm = false;

    do {
        confirm = confirmTrip(dayTrip);

        if (!confirm) {
            let unhappySelection = prompt('Which item would you like to regenerate?\n1. Destination\n2. Restaurant\n3. Transportation\n4. Entertainment.');

            switch (unhappySelection) {
                case "1":
                    dayTrip.destination = getRandom(destinations);
                    break;
                case "2":
                    dayTrip.restaurant = getRandom(restaurants);
                    break;
                case "3":
                    dayTrip.transportation = getRandom(transportations);
                    break;
                case "4":
                    dayTrip.entertainment = getRandom(entertainments);
                    break;
                default:
                    alert('Invalid input. Please enter a number from 1 to 4.');
            }
        }
    } while (!confirm);

    displayTrip(dayTrip);
}

//*Run//
runGenerateDayTrip();
