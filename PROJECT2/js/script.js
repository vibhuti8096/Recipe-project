const recipe = () => {
    fetch('https://dummyjson.com/recipes')
        .then(Response => Response.json())
        .then(data => {
            const recipeList = data.recipes;
            const recipe = document.getElementById("recipeModel");
            console.log(data.recipes);

            recipeList.forEach(item => {
                const col = document.createElement('div');
                col.classList.add('col-12', 'col-sm-6', 'col-md-3', 'd-flex', 'mt-4');

                col.innerHTML = `
                    <div class="card flex-fill d-flex flex-column" style="cursor: pointer;">
                        <img src="${item.image}" class="card-img-top " alt="${item.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${item.name}</h5>
                            <h6>Meal-Type : ${item.mealType}</h6>
                            <div class="d-flex  justify-content-between">
                                <span><i class="fa-solid fa-star"></i>${item.rating}</span>
                                <span>Review: ${item.reviewCount}</span>
                            </div>
                            <a href="#" class="btn btn-primary mt-auto">Click for more Details</a>
                        </div>
                    </div>
                `;
                
                col.querySelector('.card').addEventListener('click', () => {
                    const modalContent = document.getElementById("modalContent"); 
                    modalContent.innerHTML = `
                       <img src="${item.image}" class="img-fluid mb-3" alt="${item.name}" style="max-width: 300px; height: auto;">
                        <h4>${item.name}</h4>
                        <p><b>Ingredients:</b> ${item.ingredients}</p>
                        <p><b>Instructions:</b> ${item.instructions}</p>
                    `;

                    const modal = new bootstrap.Modal(document.getElementById('recipeModal')); 
                    modal.show(); 
                });

                recipe.appendChild(col);
            });
        });
}


recipe();
