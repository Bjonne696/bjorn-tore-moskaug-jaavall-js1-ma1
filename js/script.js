const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1:

const cat = {complain: function() {
    console.log("Meow");
}
};

cat.complain();


// Question 2:

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3:

heading.style.fontSize = "2em";


// Question 4:

heading.className += "subheading";

console.log(heading)


// Question 5:

let paragraphs = document.querySelectorAll("p")

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "Red";
}


// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "Yellow";


// Question 7:

function nameList(list) {

        for (let i = 0; i < list.length; i++) {
            console.log(list[i].name);
        }

    }

nameList(cats);


// Question 8:


function createCats(cats) {
    
    let catName = "";
    let catAge = "";
    let newHTML = "";
  
    for (let i = 0; i < cats.length; i++) {
  
      if (cats[i].age) {
        catName = `<h5>${cats[i].name}</h5>`;
        catAge = `<p>${cats[i].age}</p>`;
      } else {
        catName = `<h5>${cats[i].name}</h5>`;
        catAge = "Age Unknown";
      }
  
      newHTML += `<div>
              ${catName}
              ${catAge}
          </div>`;
    }
    return newHTML;
  }

  const container = document.querySelector (".cat-container");
  container.innerHTML = createCats(cats);const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 1:

const cat = {complain: function() {
    console.log("Meow");
}
};

cat.complain();


// Question 2:

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 3:

heading.style.fontSize = "2em";


// Question 4:

heading.className += "subheading";

console.log(heading)


// Question 5:

let paragraphs = document.querySelectorAll("p")

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "Red";
}


// Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.background = "Yellow";


// Question 7:

function nameList(list) {

        for (let i = 0; i < list.length; i++) {
            console.log(list[i].name);
        }

    }

nameList(cats);


// Question 8:


function createCats(cats) {
    
    let catName = "";
    let catAge = "";
    let newHTML = "";
  
    for (let i = 0; i < cats.length; i++) {
  
      if (cats[i].age) {
        catName = `<h5>${cats[i].name}</h5>`;
        catAge = `<p>${cats[i].age}</p>`;
      } else {
        catName = `<h5>${cats[i].name}</h5>`;
        catAge = "Age Unknown";
      }
  
      newHTML += `<div>
              ${catName}
              ${catAge}
          </div>`;
    }
    return newHTML;
  }

  const container = document.querySelector (".cat-container");
  container.innerHTML = createCats(cats);