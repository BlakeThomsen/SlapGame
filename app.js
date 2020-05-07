var enemy = {
  health: 100,
  name: "test",
  hits: 0,
  items: []
}

var items = {
  item1: {
    name: "item1",
    modifier: 2,
    description: ""
  },
  item2: {
    name: "item2",
    modifier: 5,
    description: ""
  },
  item3: {
    name: "item3",
    modifier: 8,
    description: ""
  }
}

function giveItem1() {
  enemy.items.push(items.item1.name)
  console.log(enemy.items)
}

function giveItem2() {
  enemy.items.push(items.item2.name)
  console.log(enemy.items)
}

function giveItem3() {
  enemy.items.push(items.item3.name)
}

function slap() {
  enemy.health -= 1 + addMods();
  enemy.hits++
  // alert(health)
  update()
}

function punch() {
  enemy.health -= 5 + addMods();
  enemy.hits++
  update()
}

function kick() {
  enemy.health -= 10 + addMods();
  enemy.hits++
  update()
}

function addMods() {
  var modTotal = 0;
  var modValue = 0;
  var enemyItems = enemy.items;

  for (let i = 0; i < enemyItems.length; i++) {
    const element = enemyItems[i]
    modValue = items[element].modifier
    modTotal += modValue
  }
  return modTotal;
}



function update() {
  if (enemy.health > 0) {
    document.getElementById("image").style.display = "block";
    document.getElementById("health").innerText = enemy.health.toString();
  } else {
    document.getElementById("image").style.display = "none";
    document.getElementById("health").innerText = "0";
  }
  document.getElementById("hits").innerText = enemy.hits.toString();
}

function reset() {
  enemy.health = 100;
  enemy.hits = 0;
  update();
}



update();