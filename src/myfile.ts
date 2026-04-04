const computer = document.querySelector('#container');
let i: number = 0;

const increment = (e: Event) => {
   e.preventDefault();
   i++;
   const span = computer?.querySelector('span');
   if(span){
      span.innerText = i.toString();
   }
}

computer.addEventListener('click', increment)

class Human<T>{
   // Les class en type scrip se font comme dans le language 
   // Java. 
   private vie; 

   constructor( private items: T[]){
         
   }
   
}