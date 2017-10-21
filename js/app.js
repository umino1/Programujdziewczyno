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
});


