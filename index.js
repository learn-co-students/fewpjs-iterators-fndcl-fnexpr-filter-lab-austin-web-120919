// Code your solution here
function findMatching(drivers, name){
    let matchingDrivers = drivers.filter(function(driver){
        return driver.toLowerCase() === name.toLowerCase();
    });
    return matchingDrivers;
}

function fuzzyMatch(drivers, name){
    let matchingFirstLetterNames = drivers.filter(function(driver){
        return driver.charAt(0) === name.charAt(0);
    });
    return matchingFirstLetterNames;
}

function matchName(drivers, name){
    let matchingDriverNames = drivers.filter(function(driver){
        return driver.name ===  name;
    })
    return matchingDriverNames;
}