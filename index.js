// Code your solution in this file!
const logDriverNames = function(list) {
  list.forEach(function(driver) {
    console.log(driver.name)
  });
};

const logDriversByHometown = function(list, loc) {
  list.forEach(function(driver){
    if(driver.hometown === loc){
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(list) {
  return list.slice().sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  });
};

const driversByName = function(list) {
  return list.slice().sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
};

const totalRevenue = function(list) {
  return list.reduce(function(sum, el){
    return el.revenue + sum;
  }, 0);
};

const averageRevenue = function(list) {
  return totalRevenue(list) / list.length;
};
