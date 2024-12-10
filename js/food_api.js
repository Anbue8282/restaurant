
function toggleFilter() {
    const filter = document.getElementById('filter');
    const mainContent = document.getElementById('main-content');
    filter.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
}

async function getFoodList(tag = 'all') {
    const container = document.getElementById('dish-list');
    container.innerHTML = ''; // Clear previous content

    let url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20';
    if (tag !== 'all') {
        url += `&tags=${tag}`;
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fcb9dc4e14msh8e85a2c1001d2f9p1d7118jsn8267b87e811d',
            'x-rapidapi-host': 'tasty.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.results.forEach(element => {
            container.appendChild(renderFoodCard(element));
        });
    } catch (error) {
        console.error(error);
    }
}

function renderFoodCard(food) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = food.thumbnail_url;
    img.alt = 'Card image cap';

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = food.name;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = food.description;

    const cardLink = document.createElement('a');
    cardLink.href = '#';
    cardLink.className = 'btn btn-primary';
    cardLink.textContent = 'View details';
    cardLink.onclick = function() {
        localStorage.setItem('foodDetail', JSON.stringify(food));
        window.location.href = '../html/detail.html';
    };

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardLink);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
}

function filterFood(tag) {
    getFoodList(tag);
}

getFoodList();