function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateDoge() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var code = document.getElementById("code").value;
    var date = document.getElementById("date").value;
    var choiceAll = document.getElementById("imageType");
    var choice = choiceAll.options[choiceAll.selectedIndex].text;

    document.getElementById("chosen").innerHTML = choice;

    var image;

    if (choice == "Mem") {
        switch (getRandomInt(6)) {
            case 0:
                image = "images/mem0.jpg";
                break;
            case 1:
                image = "images/mem1.jpg";
                break;
            case 2:
                image = "images/mem2.jpg";
                break;
            case 3:
                image = "images/mem3.jpg";
                break;
            case 4:
                image = "images/mem4.jpg";
                break;
            case 5:
                image = "images/mem5.jpg";
                break;
            default:
                image = "images/mem0.jpg";
        }
    } else if (choice == "Zdjęcie") {
        switch (getRandomInt(6)) {
            case 0:
                image = "images/img0.jpg";
                break;
            case 1:
                image = "images/img1.jpg";
                break;
            case 2:
                image = "images/img2.jpg";
                break;
            case 3:
                image = "images/img3.jpg";
                break;
            case 4:
                image = "images/img4.jpg";
                break;
            case 5:
                image = "images/img5.jpg";
                break;
            default:
                image = "images/img0.jpg";
        }
    }

    document.getElementById("dogeImage").src = image;
    document.getElementById("result-section").classList.remove("hidden");
}
