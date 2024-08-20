document.addEventListener("DOMContentLoaded", function() {
    const list1 = document.getElementById("list1");
    const list2 = document.getElementById("list2");
    const items = Array.from(list1.children);

    if (items.length > 5) {
        const extraItems = items.slice(5);
        extraItems.forEach(item => list2.appendChild(item));
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar_toggle');
    const navbarLinks = document.querySelector('.navbar__links');

    navbarToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});
