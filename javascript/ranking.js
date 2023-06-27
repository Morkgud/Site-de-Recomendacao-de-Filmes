var isAltered = false; // Variável de controle para rastrear o estado atual

    function toggleColorsAndImage() {
      var body = document.body;
      var header = document.querySelector('header');
      var footer = document.querySelector('footer');
      var menuItems = document.querySelectorAll('.menu li a');

      if (isAltered) {
        // Restaurar cores e imagens originais
        body.style.backgroundColor = '#221a3f';
        body.style.color = '#fff';
        header.style.backgroundColor = '#221a3f';
        header.style.borderBottomColor = '#c31dd2';
        footer.style.backgroundColor = '#221a3f';
        footer.style.borderTopColor = '#c31dd2';
        body.style.backgroundImage = 'url(https://images5.alphacoders.com/100/1001614.jpg)';

        // Restaurar cores do menu
        for (var i = 0; i < menuItems.length; i++) {
          menuItems[i].style.color = '#fff';
        }
        // Alterar as cores
        } else {
        
        body.style.backgroundColor = '#f1f1f1';
        body.style.color = '#000';
        header.style.backgroundColor = '#FF6C11';
        header.style.borderBottomColor = '#000000';
        footer.style.backgroundColor = '#FF6C11';
        footer.style.borderTopColor = '#000000';
        footer.style.color = '#fff';
        body.style.backgroundImage = 'url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU6B8gq7_LO1Vlvvv1jIjpWtR1Z0fHif91oWGr9H-SQfAf-1ogM2QTsC93v4jPeFOwbADNZrJHXWZGL7zLAxLo5hXhYkc32R4CuTkZYw72ldm9nMtImjh8BE_C2pI8YnF-rg38Kg7nr-27XVK2LNEMmiLHl5nacXoP1w1qHxppAPuIGCVW7SmGaiHUbQ/s0/synth-sunset-lake-162023.png)';
      }

      isAltered = !isAltered; // Alternar o estado da variável de controle
    }