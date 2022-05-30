let navbar = new Vue({
    el: "#navbar",
    data: {
        barranavegacion:
            '<a href="index.html"><img src="images/logo.png" alt=""></a><ul><li><a href="index.html">INICIO</a></li><li><a href="productos.html">PRODUCTOS</a></li><li><a href="contacto.html">CONTACTO</a></li></ul>',
    },
});

let footeer = new Vue({
    el: '#footer',
    data: {
        footer: '<div class="row"><div class="footer-col"><h4>ENERGÍA SOLAR</h4><ul><li><p>Producida por la luz o el calor del sol para la generación de electricidad o la producción de calor. Inagotable y renovable</p></li></ul></div><div class="footer-col"><h4><a href="empresa.html" class="link">LA EMPRESA</a></h4><ul><li><a href="#">MISIÓN</a></li><li><a href="#">VISIÓN</a></li><li><a href="#">PREGUNTAS FRECUENTES</a></li></ul></div><div class="footer-col"><h4>¿QUERÉS ENCONTRARNOS?</h4><ul><li><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13048.781789073935!2d-58.740831!3d-35.1517461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3234258d8c6f259!2sEnerg%C3%ADa%20Solar%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1636565399612!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe></li></ul></div><div class="footer-col"><h4>SEGUINOS</h4><div class="social-links"><a href="https://www.facebook.com/energiasolarbuenosaires/" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="https://api.whatsapp.com/send?phone=541136045362&app=facebook&entry_point=page_cta&fbclid=IwAR1W47JprC_zGMrHFOdajKhV21lA6VaUzRlTKSFXgNdnEcrqT1JtAM2bXHs" target="_blank"><i class="fab fa-whatsapp"></i></a><a href="https://www.instagram.com/esba_bs.as/" target="_blank"><i class="fab fa-instagram"></i></a></div></div></div>'
    },
});

// CARROUSEL

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}

setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}