document.getElementById("submit").addEventListener("click", function () {
    let price = 0;
    let coefficient = 1;

    const education = document.getElementById("education").value;
    switch (education) {
        case "bachelor":
            price += 100;
            break;
        case "college":
            price += 50;
            break;
        case "high_school":
            price += 20;
            break;
        case "middle_school":
            price += 10;
            break;
    }

    const networth = document.getElementById("networth").value;
    switch (networth) {
        case "upper_class":
            price += 100;
            break;
        case "middle_class":
            price += 50;
            break;
        case "lower_class":
            price += 20;
            break;
    }
    const caste = document.getElementById("caste").value;
    switch (caste) {
        case "brahmin":
            price += 100;
            break;
        case "kshatriya":
            price += 80;
            break;
        case "vaishya":
            price += 50;
            break;
        case "shudra":
            price += 20;
            break;
        case "varna":
            price += 10;
            break;
    }

    if (document.getElementById("skills1").checked) {
        price += 10;
    }
    if (document.getElementById("skills2").checked) {
        price += 20;
    }
    if (document.getElementById("skills3").checked) {
        price += 15;
    }
    if (document.getElementById("skills4").checked) {
        price += 10;
    }

    const ageRadios = document.getElementsByName("age");
    ageRadios.forEach((radio) => {
        if (radio.checked) {
            if (radio.value === "18-23") {
                coefficient = 1.5;
            } else if (radio.value === "24-27") {
                coefficient = 1.2;
            } else if (radio.value === "28+") {
                coefficient = 0.95;
            }
        }
    });

    const gossipParents = document.getElementById("gossip_parents");
    const gossipCharacter = document.getElementById("gossip_character");
    const generalGossip = document.getElementById("general_gossip");

    if (gossipParents.checked) {
        coefficient *= 0.85;
    }
    if (gossipCharacter.checked) {
        coefficient *= 0.9;
    }
    if (generalGossip.checked) {
        price -= 20;
    }

    const finalPrice = price * coefficient;
    document.getElementById("finalPrice").textContent = `Final Price:  ${finalPrice.toFixed(2)}$`;
});
