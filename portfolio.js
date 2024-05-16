const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('Me');
        }else{
            entry.targer.classList.remove('Me');
        }
    });
});

const hiddenElements = document.querySelectorAll('.AM-content > p')
hiddenElements.forEach((el) => observer.observe(el));