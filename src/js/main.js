const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../src/img/404.png");
            pokeImage2("../src/img/404-sin-fondo-png");
            pokeInfoName("--");
            pokeHeight("--");
            pokeType("--");
            alert("Pokemon no encontrado :(");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data)
            let pokeImg = data.sprites.front_default;
            let pokeImg2 = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
            let pokeN = data.name;
            let pokeH = data.height;
            let pokeT = data.types[0].type.name;
            let pokeA1 = data.abilities[0].ability.name;
            let pokeA2 = data.abilities[1].ability.name;
            pokeImage(pokeImg);
            pokeImage2(pokeImg2);
            pokeInfoName(pokeN);
            pokeHeight(pokeH);
            pokeType(pokeT);
            pokeAbilities(pokeA1);
            pokeAbilities2(pokeA2);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeImage2 = (url) => {
    const pokePhoto2 = document.getElementById("pokeImg2");
    pokePhoto2.src = url;
}

const pokeInfoName = (url) => {
    let pokeNameElement = document.querySelector("#pokeInfoName");
    pokeNameElement.innerHTML = url;
}

const pokeHeight = (url) => {
    let pokeHeightElement = document.querySelector("#pokeHeight");
    pokeHeightElement.innerHTML = url;
}

const pokeType = (url) => {
    let pokeTypeElement = document.querySelector("#pokeType");
    pokeTypeElement.innerHTML = url;
}

const pokeAbilities = (url) => {
    let pokeAbilityElement = document.querySelector("#pokeAbility");
    pokeAbilityElement.innerHTML = url;
}

const pokeAbilities2 = (url) => {
    let pokeAbilityElement = document.querySelector("#pokeAbility1");
    pokeAbilityElement.innerHTML = url;
}