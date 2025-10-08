function userScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 45) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-sticky');
        }
        else {
            navbar.classList.remove('bg-dark');
            navbar.classList.add('navbar-stickt');
        }
    })
}

/*→ Sayfa tamamen yüklenince userScroll() fonksiyonunu çalıştırır. */
document.addEventListener('DOMContentLoaded', userScroll);