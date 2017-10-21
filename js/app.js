'use strict';

document.addEventListener('DOMContentLoaded', function() {
    
    // Zadanie 1

    var forDropdown = document.querySelector('.for-dropdown');
    var dropdownMenu = document.querySelector('.dropdown');
  
    forDropdown.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });

    forDropdown.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none';
    });


    // Zadanie 2

    var buttons = document.querySelectorAll('.read-more');
    
    function showHide() {
    
        var textArea = this.previousElementSibling;
       
        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
          textArea.style.display = 'none';
          this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
    }
    
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }   
     
      

    // Zadanie 3

    var menu = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        menu.style.borderBottom = '1px solid #7f7f7f';
    });
    
});