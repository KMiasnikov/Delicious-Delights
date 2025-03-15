const goToTopButton = document.createElement("button");
goToTopButton.innerText = "Go to the top of the page";
goToTopButton.id = "go-to-top";
document.body.appendChild(goToTopButton);

goToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});