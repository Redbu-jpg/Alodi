const estrellas = document.querySelectorAll(".valoracion span");

estrellas.forEach((estrella, indice) => {

    estrella.addEventListener("click", () => {

        estrellas.forEach((e, i) => {

            if(i <= indice){

                e.classList.add("activa");

            }else{

                e.classList.remove("activa");

            }

        });

    });

});