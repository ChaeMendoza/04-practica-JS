const todos=()=>{fetchPokemon(),changeHeight()},fetchPokemon=()=>{let e=document.getElementById("pokeName").value;e=e.toLowerCase();fetch(`https://pokeapi.co/api/v2/pokemon/${e}`).then((e=>{if("200"==e.status)return e.json();console.log(e),pokeImage("../src/img/404.png"),pokeImage2("../src/img/404-sin-fondo-png"),pokeInfoName("--"),pokeHeight("--"),pokeType("--"),pokeAbilities("--"),pokeAbilities2("--"),alert("Pokemon no encontrado :(")})).then((e=>{if(e){console.log(e);let o=e.sprites.front_default,t=e.sprites.versions["generation-v"]["black-white"].animated.front_default,i=e.name,n=e.height,a=e.types[0].type.name,l=e.abilities[0].ability.name,r=e.abilities[1].ability.name;pokeImage(o),pokeImage2(t),pokeInfoName(i),pokeHeight(n),pokeType(a),pokeAbilities(l),pokeAbilities2(r)}}))},pokeImage=e=>{document.getElementById("pokeImg").src=e},pokeImage2=e=>{document.getElementById("pokeImg2").src=e},pokeInfoName=e=>{document.querySelector("#pokeInfoName").innerHTML=e},pokeHeight=e=>{document.querySelector("#pokeHeight").innerHTML=e},pokeType=e=>{document.querySelector("#pokeType").innerHTML=e},pokeAbilities=e=>{document.querySelector("#pokeAbility").innerHTML=e},pokeAbilities2=e=>{document.querySelector("#pokeAbility1").innerHTML=e},changeHeight=()=>{let e=Math.floor(101*Math.random()),o=document.querySelector("#barLife"),t=document.querySelector("#barPower"),i=document.querySelector("#barAttack"),n=document.querySelector("#barSpecial");e?(console.log(e),o.style.height=`${e}%`,t.style.height=`${Math.floor(101*Math.random())}%`,i.style.height=`${Math.floor(101*Math.random())}%`,n.style.height=`${Math.floor(101*Math.random())}%`):(o.style.height="2%",t.style.height="2%",i.style.height="2%",n.style.height="2%")};