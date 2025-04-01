const details = document.querySelectorAll('details');

details.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    const openItem = document.querySelector('details[open]');
      
    if (openItem) openItem.open = false;
    
    if (openItem !== item) item.open = true 
  })
})



let blockBefore = document.getElementById("block_before");
let blockAfter = document.getElementById("block_after");
let blockBeforeChilds = blockBefore.children;


if( window.innerWidth <= 960 ){
	blockAfter.append(blockBeforeChilds[1]);

}


