var firstIndex=0;
function automaticSlider(){
      setTimeout(automaticSlider,3000);
      var pics;
      const img=document.getElementsByClassName('slide');
      for(pics=0; pics<img.length; pics++){
            img[pics].style.display="none";
      }
      firstIndex++;
      if(firstIndex >img.length){
            firstIndex =1;
      }
      img[firstIndex -1].style.display="block";
}
automaticSlider();