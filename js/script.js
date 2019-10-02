/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   


//variables to get the student list from the document and set the student want to show in one page 
const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;




//hide all of the student in the list except for the ten we want to show

function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   for (let i = 0; i < studentList.length; i += 1){
      if (i >= startIndex && i < endIndex){
         studentList[i].style.display = 'block';
      } else {
         studentList[i].style.display = 'none';
      }
   }
}


const container = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = ('pagination');
   container.appendChild(div);


//dynamically create the pagination list and append it to the body and add functionality to the pagination buttons

function appendPageLinks(list) {
   div.innerHTML='';
   const numberOfPages = Math.floor(list.length / itemsPerPage);
   const ul = document.createElement('ul');
   for (let i = 0; i < numberOfPages; i+= 1) {
      const li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      const pageNumber = a.textContent = i+1;
      li.appendChild(a);
      ul.appendChild(li);
      div.appendChild(ul);

      ul.firstElementChild.firstElementChild.className = "active" ;

      //adding event listener on the pagination links 
      a.addEventListener('click', (e) => {         
         for(let i=0 ; i < ul.children.length; i++){
            ul.children[i].firstElementChild.className = '';
         }
         e.target.className = "active";
         showPage(studentList, pageNumber);
      });
   }
   
  
   
}

//dynamically creating searh bar 
const header = document.querySelector('.page-header');
const searchDiv = document.createElement("div");
searchDiv.className = "student-search";
const input = document.createElement("input");
input.placeholder = "Search for students...";
const button = document.createElement("button");
button.textContent = "Search";

searchDiv.appendChild(input);
searchDiv.appendChild(button);
header.appendChild(searchDiv);



//display the student that match on the page or print error message if not 
function searchFunc (searchInput, studentsItems){
     const query = searchInput.value.toLowerCase();
     const searchResult = [];
     
     studentsItems.forEach(item =>{
     const itemText = item.children[0].children[1].textContent.toLowerCase()
     
     if(isMatch(itemText,query)){
      item.style.display = 'block';
      searchResult.push(item);   
   } else {
      item.style.display = 'none';       
   } 
     
   })

   //dynamically creatting div element that has the error message 
   const messageDiv = document.createElement('div');
   const h2 = document.createElement('h2');
   messageDiv.appendChild(h2);
   container.appendChild(messageDiv);

   //checking the search result array and set either the alert function or pagiation according to the array length
   if (searchResult.length == 0) {
      div.innerHTML='';
      messageDiv.textContent = 'no result found';
   }
   else {
      appendPageLinks(searchResult);

   }

   }

  



   
   //search function to find the matching student
   function isMatch( itemText, query ){
     if (query.length >= 0) {
   return itemText.indexOf(query) >= 0;
     }
     return false
     
   }
   
//event Listener to the submit button
button.addEventListener('click', () => {
searchFunc(input, studentList);

});
 
//event listener to search when we start writting 
 input.addEventListener('keyup', () => {
   searchFunc(input, studentList);

});



// //calling the functions 
showPage(studentList, 1);
appendPageLinks(studentList);