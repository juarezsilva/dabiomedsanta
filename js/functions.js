// Sessão publicações
document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src'); 
    }            
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

// Sessão Palestrantes

const servicosItens = document.querySelector('.itens-servicos');
const popup = document.querySelector('.popup-box');
//const popupCloseBtn = popup.querySelector('.popup-close-btn');
const popupCloseIcon = popup.querySelector('.popup-close-icon');

servicosItens.addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase() == 'button'){
        const item = event.target.parentElement;
        const h3 = item.querySelector('h3').innerHTML;
        const maisConteudo = item.querySelector('.mais-conteudo').innerHTML;
        popup.querySelector('h3').innerHTML = h3;
        popup.querySelector('.popup-body').innerHTML = maisConteudo;
        popupBox();
    }
})

//popupCloseBtn.addEventListener('click', popupBox);
popupCloseIcon.addEventListener('click', popupBox);

popup.addEventListener('click', function(event){
    if(event.target == popup){
        popupBox();
    }
})

function popupBox(){
    popup.classList.toggle('open');
}

// Máscara Celular e CPF

$(function(){

    //Plugin Mask
    $('input[name=Telefone]').mask('(99)99999-9999');
    $('input[name=CPF]').mask('999.999.999-99');  

});



	

        
        
        
        







