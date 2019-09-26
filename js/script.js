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



//dynamically create the pagination list and append it to the body and add functionality to the pagination buttons

function appendPageLinks(list) {
   const container = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = ('pagination');
   container.appendChild(div);
  

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


      a.addEventListener('click', (e) => {         
         for(let i=0 ; i < ul.children.length; i++){
            ul.children[i].firstElementChild.className = '';
         }
         e.target.className = "active";
         showPage(studentList, pageNumber);
      });
   }
   
   return container;
   
}





//calling the functions 
showPage(studentList, 1);
appendPageLinks(studentList);



