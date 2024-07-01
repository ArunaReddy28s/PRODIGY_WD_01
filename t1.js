window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(34, 34, 34, 0.9)';
        navbar.style.transform = 'scale(0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
        navbar.style.transform = 'scale(1)';
    }
  });
  
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.color = '#333';
        this.style.backgroundColor = '#ffeb3b';
    });
    item.addEventListener('mouseout', function() {
        this.style.color = 'white';
        this.style.backgroundColor = 'transparent';
    });
  });