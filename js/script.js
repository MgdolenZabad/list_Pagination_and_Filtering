/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

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






showPage(studentList, 1);
appendPageLinks(studentList);



// Remember to delete the comments that came with this file, and replace them with your own code comments.