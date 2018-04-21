// Write your solution in this file!
driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}

const oneTwoThree = [1, 2, 3]
const sevenEightNine = [7, 8, 9]

[4, 5, 6, ...oneTwoThree, ...sevenEightNine]
