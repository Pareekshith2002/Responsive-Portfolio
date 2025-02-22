const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () =>{

    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(()=>  {
        header.classList.add('active');
    }, 0);

    navLinks.forEach(link =>{
        link.classList.remove('active');
    });

    sections.forEach(section =>{
        section.classList.remove('active');
    });
}
navLinks.forEach((link,idx) => {
    link.addEventListener('click',() => {
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(()=> {
                sections[idx].classList.add('active');
            },0);
        }
    });
});

logoLink.addEventListener('click',()=>{
    if (!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(()=> {
            sections[0].classList.add('active');
        },0);
    }
});

const resumeBtns = document.querySelectorAll('.about-btn');
resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.about-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');
    
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuIcon.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    // Smooth scroll and section activation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.remove('active');
            // Add your section activation logic here
        });
    });
});