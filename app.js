const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');
const button = document.querySelectorAll('button');
const question = document.querySelectorAll('.question-section');
const text = document.querySelectorAll('.text-section');


button.forEach(function(btn, index){

    btn.addEventListener('click', function(){
            text.forEach(function(item, text_index){
                
                if(index !== text_index){
                    if(item.classList.contains('show')){
                        item.classList.remove('show');
                        question[text_index].lastElementChild.firstElementChild.classList.remove('unshow');
                        question[text_index].lastElementChild.lastElementChild.classList.remove('show');
                    }
                }
                else if(index === text_index){
                    item.classList.toggle('show');
                    minus[index].classList.toggle('show');
                    plus[index].classList.toggle('unshow');
                }
        });
    });
});