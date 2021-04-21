let main = document.getElementById('main');
let age2 = document.getElementById('age');

let age = prompt('Enter Your Age');
let date = new Date();
let year = date.getFullYear();

let dob = year-age;

if (age>120){
    main.innerText = `Your cannot be a human`;
}

else if(dob<0){
    let dob = `${year - age} BC`;
    main.innerText = `Your Year Of Birth is: ${dob}`;
}

else{
    main.innerText = `Your Year Of Birth is: ${dob}`;
    age2.innerText = `Your Age is: ${age}`;
}

