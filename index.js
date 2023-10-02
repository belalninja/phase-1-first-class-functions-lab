// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  const newArray = [...array.slice(0, 2)];
  return newArray;
};

const returnLastTwoDrivers = function (array) {
  const newArray = [...array.slice(-2)];
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function (num) {
    return fare * num;
  };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(fare)(2);
};

const fareTripler = function (fare) {
  return createFareMultiplier(fare)(3);
};

function selectDifferentDrivers(array, fun) {
  return fun(array);
}
