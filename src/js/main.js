const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../src/img/404.png")
            alert("Pokemon no encontrado :(")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data)
            let pokeImg = data.sprites.front_default;
            let pokeH = data.height;
            pokeImage(pokeImg);
            pokeHeight(pokeH);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeHeight = (url) => {
    let pokeHeightElement = document.getElementById("pokeHeight");
    let response = url.toString();
    pokeHeightElement.replace(response)
}