const getCharacter = () => {
    fetch("https://bobsburgers-api.herokuapp.com/characters/1")
      .then(response => response.json())
      .then(data => {
        const characterName = document.createElement("h1"); 
        characterName.textContent = data.name;
        const characterElement = document.getElementById("burgers");
        characterElement.innerHTML = ""; 
  
        characterElement.appendChild(characterName); 
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  
  document.getElementById("getButton").addEventListener("click", getCharacter);