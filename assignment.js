// https://github.com/Roy-Susmita/JS_Assignment
// Problem 1-kilometerToMeter
function kilometerToMeter(kiloMeter) {
    if (kiloMeter < 0) {
        return "Distance can not be negative";
    }
    else {
        var Meter = 1000 * kiloMeter;
        return Meter;
    }
}

//var convert = kilometerToMeter(-5);
//var convert = kilometerToMeter(25);
//console.log(convert);

// Problem 2-budgetCalculator
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Negative value is not acceptable";
    }
    else {
        var totalBudget = watch * 50 + mobile * 100 + laptop * 500;
        return totalBudget;
    }
}

//var total = budgetCalculator(5, 2, -1);
//console.log(total);

// Problem 3-hotelCost
function hotelCost(stayingDays) {
    var totalCost = 0;
    if (stayingDays < 0) {
        return "Day can not be negative";
    }
    else if (stayingDays <= 10) {
        totalCost = stayingDays * 100;
    }
    else if (stayingDays <= 20) {
        var firstTenDays = 10 * 100;
        var daysRemain = stayingDays - 10;
        var secondTenDays = daysRemain * 80;
        totalCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var daysRemain = stayingDays - 20;
        var restDays = daysRemain * 50;
        totalCost = firstTenDays + secondTenDays + restDays;

    }
    return totalCost;
}

//var cost = hotelCost(41);
// console.log(cost);

// Problem 4-megaFriend
function megaFriend(friendsName) {
    var nameLength = 0;
    if (friendsName == 0) {
        return "There is no name";
    }
    else {
        for (var i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length > nameLength) {
                nameLength = friendsName[i].length;
                var megaName = friendsName[i];
            }
        }
    }
    return megaName;
}
//var Name = megaFriend(["Susmi", "Susmita", "Lee min ho", "park shin hye"]);
//console.log(Name);