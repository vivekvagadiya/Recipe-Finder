let recipe = [
    {
        id:1,
        title: 'Vadapav',
        ingredients: ['besan', 'pav', 'Oil'],
        instructions: 'coock and fry in oil',
        detailedInstruction: 'Add water, milk, yeast, 1/3 cup (71 g) butter, flour, salt and sugar to a bowl of a stand mixer.Punch the dough down and knead the dough on a lightly floured surface for 2 minutes.  ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdk0yigvWXGWXm9QgBOscZOiBE1uMa-HNqA&s'
    },
    {
        id:2,
        title: 'Pavbhaji',
        ingredients: ['pav', 'Vegitable', 'Oil', 'butter'],
        instructions: 'Eat pav with bhaji',
        detailedInstruction: 'आलू, टमाटर, मटर जैसी सब्जियों को मैश करके मसाले और नींबू का रस डालकर तैयार की गई भाजी को मक्खन वाले पाव के साथ सर्व किया जाता है',
        image: 'https://priyafoods.com/cdn/shop/files/PAVBHAJIMASALA_2.jpg?v=1701947643'
    },
    {
        id:3,
        title: 'Pani Puri',
        ingredients: ['Pani', 'Puri', 'Potato', 'onion'],
        instructions: 'Eat puri filled with potato and pani',
        detailedInstruction: 'Boil the potatoes till they are cooked completely.Peel them and then chop them,puris (hollow, crispy fried bread), boiled potatoes, chickpeas, and a flavorful water (pani) made with tamarind, mint, cilantro, spices, and water, along with chutneys and other toppings',
        image: 'https://media.istockphoto.com/id/1292640617/photo/sev-puri-is-a-famous-midday-snack-in-india-served-over-a-rustic-wooden-background-selective.jpg?s=612x612&w=0&k=20&c=PP2WC5Z-ri3QmneP8PWu99ic4-j9x3LGlUUKMYos42U='
    },
    {
        id:4,
        title: 'Burger',
        ingredients: ['pav', 'tikki', 'Oil,vagetable'],
        instructions: 'insert tikki in burger and then eat',
        detailedInstruction:'Divide the ground beef. Divide the ground beef into 4 or 6 portions, depending on the number of burgers you would like to make.Preheat an outdoor grill for high heat and lightly oil grate.Whisk egg, salt, and pepper together in a medium bowl.',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg'
    },
    {
        id:5,
        title: 'Pizza',
        ingredients: ['mendo', 'vagetable', 'cheeze','onion','paneer'],
        instructions: 'bake pizza and put some cheeze',
        detailedInstruction:'Start with a crust. Add a sauce.Add some veggies, such as: Try some fruit on your pizza.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'
    },
    {
        id:6,
        title: 'Fruit salad',
        ingredients: ['fruit', 'vagetable', 'salad','onion','paneer','cheeze'],
        instructions: 'Fry fruit with salads with milk and cheeze or paneer',
        detailedInstruction:'Start with a crust. Add a sauce.Add some veggies, such as: Try some fruit on your pizza.',
        image: 'https://media.istockphoto.com/id/511622035/photo/heallthy-organic-fruit-salad.jpg?s=612x612&w=0&k=20&c=Nl3vuD8QLVCWCzFqiHBvRQzeoY2p0chmhzuPsW2hNBA= '
    }
]


function renderRecipeCard(recipe) {
    let html = '';

    recipe.map((item, index) => {
        html += `
        <div onclick="showClickCard(${item.id})" class="recipe-card" data-recipe-item=${item.id}>
            <img src="${item.image}" alt="vadapav">
            <p><b>${item.title}</b></p>
            <p><b>ingredients:</b>${item.ingredients}</p>
            <p><b>instructions:</b>${item.instructions}</p>
        </div>
        `
    })

    document.querySelector('.parent').innerHTML = html;
    // document.querySelectorAll('.recipe-card').classList.add('recipe-card-add');

}

renderRecipeCard(recipe);
renderInput();
//<label for="search-item">Search Item</label>

function renderInput() {
    let html = '';
    html += `
        <input type="text" placeholder="search item">
        <button onclick="handlesearch()">Search</button>
    `
    document.querySelector('.search-area').innerHTML=html;
}

function handlesearch(){
    let input=document.querySelector('.search-area input').value;
    console.log(input);

    let filterRecipe=recipe;
    filterRecipe=filterRecipe.filter((item)=>{
        let matchingItem=false;

        item.ingredients.forEach((keyword)=>{
            if(keyword.toLowerCase().includes(input.toLowerCase())){
                matchingItem=true;
            }
        })

        return matchingItem|| item.title.toLowerCase().includes(input.toLowerCase());
    })
    console.log(filterRecipe)
    renderRecipeCard(filterRecipe)
}

function showClickCard(id){
    // let getRecipeId=dataset.recipeItem;
    let getRecipeId=id;
    // console.log(typeof getRecipeId)
    
    let matchingItem;
    recipe.forEach((item)=>{
        // console.log(typeof item.id.toString())
        // console.log(typeof getRecipeId)
        // console.log(item.id.toString()===getRecipeId)
        if(item.id===getRecipeId){
            matchingItem=item;
        }
    })
    console.log(matchingItem)
    
    document.querySelector('.click-card').innerHTML=`
    <button class="close-card-btn" onclick="removeCard()">close</button>
    <img src="${matchingItem.image}" alt="vadapav">
    <p><b>${matchingItem.title}</b></p>
    <p><b>ingredients: </b>${matchingItem.ingredients}</p>
    <p><b>instructions:  </b>${matchingItem.instructions}</p>
    <p><b>recipe:  </b>${matchingItem.detailedInstruction}</p>
    `
    document.querySelector('.parent').classList.add('hide-back')
    document.querySelector('.search-area').classList.add('hide-back')
    document.querySelector('.click-card').classList.add('click-card-style')
}
function removeCard(){
    document.querySelector('.click-card').innerHTML='';
    document.querySelector('.search-area').classList.remove('hide-back')
    document.querySelector('.parent').classList.remove('hide-back')
    document.querySelector('.click-card').classList.remove('click-card-style')

}
// document.querySelectorAll('.recipe-card').forEach((item)=>{
//     item.addEventListener('click',()=>{
//     })
// })

