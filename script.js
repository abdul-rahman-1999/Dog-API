async function fetchdata() {
    var foods = await fetch("https://api.thedogapi.com/v1/breeds",{method: "GET"});
    var dogs = await foods.json();
    data(dogs);
  }
  function data(dogs) {
    var res = document.createElement("div");
    dogs.map((food) => {
      var foodscontainer = document.createElement("div");
      foodscontainer.className = "container";
      foodscontainer.innerHTML = `
      <div><h1>  ${food.name}</h1><br>
      <img src="${food.image.url}" class="image"><br>
      <div><span><b>Breed-Group  :</b> </span> ${food.breed_group}</div><br>
      <div><span><b>Life-Span  :</b> </span>  ${food.life_span}</div><br>
      <div><span><b>Bred-For : </b></span> ${food.bred_for}</div><br>
    `;
      res.append(foodscontainer);
    });
    document.body.append(res);
  }
  fetchdata();