// Glatko skrolanje na vrh
document.getElementById("back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sakrij gumb dok korisnik ne skrola malo dolje
window.onscroll = function() {
    let btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
};
