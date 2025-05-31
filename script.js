// Copyright (c) 2025 Satyam Umrao
// All rights reserved. Unauthorized copying or modification is strictly prohibited.

const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });



//   loaderr



  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hide");
    }, 1000); // 3000ms = 3 seconds
  });



