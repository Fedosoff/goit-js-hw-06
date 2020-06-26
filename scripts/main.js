"use strict";

import users from "./users.js";


const getUserNames = users => {
    return users.map(user => user.name);
};

console.log(getUserNames(users));


const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue")); 
const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, "male")); 
const getInactiveUsers = users => {
    return users.filter(user => user.isActive);
};

console.log(getInactiveUsers(users)); 

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); 
console.log(getUserWithEmail(users, "elmahead@omatom.com")); 



const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));




const calculateTotalBalance = users => {
    return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users)); 



const getUsersWithFriend = (users, friendName) => {
    return users
        .filter(user => user["friends"].includes(friendName))
        .map(user => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); 
console.log(getUsersWithFriend(users, "Goldie Gentry")); 



const getNamesSortedByFriendsCount = users => {
    const sortByNumOfFriends = (userOne, userTwo) =>
        userOne["friends"].length - userTwo["friends"].length;
    return users.sort(sortByNumOfFriends);
};

console.log(getNamesSortedByFriendsCount(users));






const getSortedUniqueSkills = users => {
    
    let skillsNotUnique = users
    .reduce((acc, {skills}) => [...acc, ...skills], []);

    skillsNotUnique = skillsNotUnique.sort();

    return [...new Set(skillsNotUnique)];
};

console.log(getSortedUniqueSkills(users));

