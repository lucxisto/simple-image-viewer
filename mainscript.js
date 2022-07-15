document.addEventListener("DOMContentLoaded", function(){
    showImg();
    filterOption();
    const percentage = document.getElementById('percentage');
    percentage.addEventListener('change', applyFilter);
});
function showImg(){
    const divImages = document.getElementById('imageoption');
    const images = divImages.querySelectorAll('img');
    for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', openImage)
    }
}
function openImage(event){
    const imageViewer =  document.getElementById('imgview');
    imageViewer.src = `./images/${event.target.id}.jpg`;
}
function filterOption(){
    
    const filterList = document.getElementById('filtermenu');
    const filter = filterList.querySelectorAll('button');
    
    for(let i = 0; i < filter.length; i++){
        filter[i].addEventListener('click', applyFilter);
    }
}
function applyFilter(event){
    const imageViewer = document.getElementById('imgview');
    const percentage = document.getElementById('percentage');
    const targetId = event.target.id;
    let currentFilter = imageViewer.style.filter;
    if(targetId === 'percentage'){
        currentFilter = currentFilter.split('(')[0];    
    }else{
        currentFilter = event.target.id;
    }

    let varPercent = percentage.value;
    if(currentFilter == 'none'){
        imageViewer.style.filter = 'none';
    }else{
        imageViewer.style.filter = `${currentFilter}(${varPercent}%)`;
    }
}

