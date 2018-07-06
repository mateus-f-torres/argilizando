  // TODO melhorar naming
  for(let btn of race_btns) {
    if(btn.nextSibling.checked == true) {
      let card = document.querySelector("#RACE")
      if(card.lastChild.nodeName == "FIGURE") {
        card.removeChild(card.lastChild);
      }
      let selected_race = btn.attributes.name.value;
      let race_node = displayRace(RACE[selected_race])
      card.insertBefore(race_node, card.lastChild.nextSibling);
    }
  }

  // -> updateViewPoints

  total.textContent = points;
}

/* INPUTS */

// control race buttons
for(const btn of race_btns) {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.nextSibling.checked = true;
    updateView(e, state);
  })
}

// interactive figcaption with hidden radio buttons
for(const race of races) {
  race.addEventListener('click', e => {
    for(let child of race.childNodes) {
      if(child.nodeName == "INPUT") child.checked = true;
      updateView(e, state);
    }
  })
}

/*
// control final submit
document.querySelector("#submit").addEventListener('click', e => {
  e.preventDefault()
  setFinalScores(state);
  let final = new Event('submit')
  document.querySelector("#dnd-form").dispatchEvent(final)
})
*/


 /* HELPERS */

// onsubmit place curr score value into hidden input type number
function setFinalScores(state) {
  for(let node of abilities) {
    let ability = node.attributes.name.value;
    let curr = node;
    while(curr.nodeName != "INPUT") curr = curr.nextSibling;
    curr.setAttribute("value", state[ability][0]);
  }
}

