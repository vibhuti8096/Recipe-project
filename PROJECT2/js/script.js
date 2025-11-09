// const recipe = () => {
//     fetch('https://dummyjson.com/recipes')
//         .then(Response => Response.json())
//         .then(data => {
//             const recipeList = data.recipes;
//             const recipe = document.getElementById("recipeModel");
//             console.log(data.recipes);

//             recipeList.forEach(item => {
//                 const col = document.createElement('div');
//                 col.classList.add('col-12', 'col-sm-6', 'col-md-3');

//                 col.innerHTML = `
//                             <div class="card w-100 d-flex flex-column mt-5" style="width: 18rem;">
//                                 <img src="${item.image}" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                     <h5 class="card-title">${item.name}</h5>
//                                     <p class="card-text"><b>Ingredients</b> : ${item.ingredients}</p>
//                                     <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
//                                 </div>
//                             </div>     
//                         `

//                 recipe.appendChild(col)
//             });

//         })
// }

// recipe();



const recipe = () => {
    fetch('https://dummyjson.com/recipes')
        .then(Response => Response.json())
        .then(data => {
            const recipeList = data.recipes;
            const recipe = document.getElementById("recipeModel"); // This should be your card container
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

                // ✅ Corrected modal logic
                col.querySelector('.card').addEventListener('click', () => {
                    const modalContent = document.getElementById("modalContent"); // Correct ID
                    modalContent.innerHTML = `
                       <img src="${item.image}" class="img-fluid mb-3" alt="${item.name}" style="max-width: 300px; height: auto;">
                        <h4>${item.name}</h4>
                        <p><b>Ingredients:</b> ${item.ingredients}</p>
                        <p><b>Instructions:</b> ${item.instructions}</p>
                    `;

                    const modal = new bootstrap.Modal(document.getElementById('recipeModal')); // Correct spelling: bootstrap.Modal
                    modal.show(); // Correct method: modal.show()
                });

                recipe.appendChild(col);
            });
        });
}

recipe();