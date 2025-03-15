document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dish-form");
    const resultDiv = document.getElementById("dish-result");
    const resetButton = form.querySelector("input[type='reset']");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedIngredients = Array.from(form.querySelectorAll("input[name='ingredient']:checked"))
            .map(input => input.value);

        const selectedType = form.querySelector("input[name='time']:checked").value;

        const suggestedDish = suggestDish(selectedIngredients, selectedType);

        if(suggestedDish.name === "Unknown Dish") {
            resultDiv.innerHTML = `
                <h2>${suggestedDish.name}</h2>
                <p>${suggestedDish.description}</p>
            `;
        } else {
            resultDiv.innerHTML = `
                <h2>Your Dish: ${suggestedDish.name}</h2>
                <img src="${suggestedDish.image}" alt="${suggestedDish.name}" class="dish-image">
                <p>${suggestedDish.description}</p>
            `;
        }

        resultDiv.classList.remove("hidden");
    });

    resetButton.addEventListener("click", function() {
        resultDiv.classList.add("hidden");
        resultDiv.innerHTML = ""; // Сбрасываем содержимое div с результатом
    });

    function suggestDish(ingredients, type) {
        if (ingredients.includes("pork") && type === "pasta") {
            return {
                image: "../media/Carbonara_2.jpg",
                name: "Spaghetti Carbonara",
                description: "Spaghetti Carbonara is a beloved Italian pasta dish known for its creamy sauce. Its popularity stems from its delicious flavor, ease of preparation, and comforting simplicity, making it a favorite among food enthusiasts worldwide."
            };
        } else if(ingredients.includes("chicken") && type === "rice") {
            return {
                image: "../media/Curry.jpg",
                name: "Chicken Curry",
                description: "Chicken curry is a cherished culinary delight originating from South Asia, celebrated for its aromatic blend of spices and tender chicken pieces simmered in a flavorful sauce."
            };
        } else if((ingredients.includes("beef") || ingredients.includes("pork") || ingredients.includes("chicken")) && type === "none"){
            return {
                image:"../media/Pelmeni.jpg",
                name: "Pelmeni (Dumplings)",
                description: "Pelmeni are Russian dumplings filled with minced meat and spices, boiled and typically served with sour cream or melted butter."
            };
        } else if(ingredients.includes("none") && type === "none"){
            return {
                image:"../media/Khachapuri.jpg",
                name: "Khachapuri Adjaruli",
                description: "Khachapuri Adjaruli is a Georgian specialty renowned for its indulgent combination of gooey cheese, butter, and a perfectly baked bread boat."
            };
        } else {
            return {
                name: "Unknown Dish",
                description: "We couldn't find a suitable dish based on your preferences."
            };
        }
    }
});