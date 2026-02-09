// let heading = document.querySelector("#heading");
// console.log(heading);
// heading.addEventListener("click", function(){
//     alert("Heading Clicked");
// })

// let formObj = {
//     title:"",
//     date:"",
//     category:"",
//     description:""
// }

// function event(event){
//     console.log(event.target.title.value);
//     console.log(event.target.date.value);
//     console.log(event.target.category.value);
//     console.log(event.target.description.value);

//     formObj.title = event.target.title.value;
//     formObj.date = event.target.date.value;
//     formObj.category = event.target.category.value;
//     formObj.description = event.target.description.value;

//     console.log(formObj);

//     const eachCard = document.createElement("div");
//     eachCard.classList.add("eachCard");
//     eachCard.innerHTML = `<h3>${formObj.title}</h3>
//     <p>${formObj.date}</p>
//     <p>${formObj.category}</p>
//     <p>${formObj.description}</p>
//     <button class="delete-btn">Delete</button>`;
//     document.querySelector(".cards-container").appendChild(eachCard);

//     // Card.append(eachCard);
// }