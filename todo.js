//  var h = document.createElement('h1');
//  var myvalue = document.createTextNode("Hello World!")
//  h.appendChild(myvalue)
//  console.log(h)
//  document.querySelector('h1').appendChild(h)

var ul =document.getElementById('list')
var li;
var addbutton = document.getElementById('add');
addbutton.addEventListener( 'click' , additem)

var removebutton = document.getElementById('Remove');
removebutton.addEventListener('click' , removeitem)

function additem(){
    
     var input = document.getElementById('input')
     var item =input.value
     ul = document.getElementById('list')
     var textnode= document.createTextNode(item)

     if(item === ''){
         return false
         // add a p tag and assign "Enter your TODO"
     }else{
         // create li
         li=document.createElement('li')

         // create checkbox
         var checkbox= document.createElement('input')
         checkbox.type='checkbox';
         checkbox.setAttribute('id' , 'check')

         //create label
         var label=document.createElement('label')
         label.setAttribute('for', 'item')

         //add these element on web page
         ul.appendChild(label)
         li.appendChild(checkbox)
         label.appendChild(textnode)
         li.appendChild(label)
         ul.insertBefore(li , ul.childNodes[0]);
         

         setTimeout (()=>{
            li.className='visual'
         } , 3)

         input.value='';
     }
}

function removeitem(){
     li=ul.children
     for (let index = 0; index < li.length; index++) {
        //  const element = li[index];
        //  console.log(element)
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
     }

}