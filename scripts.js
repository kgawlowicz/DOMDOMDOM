document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded and parsed');

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    let container = document.createElement('div')
    container.className = 'container'
    document.body.appendChild(container)

    let ctr = 0
    btn.addEventListener("click", function () {

        let square = document.createElement("div");
        square.className = 'square'
        container.appendChild(square);

        //setting counter to assign ID to every square
        ctr++;
        square.id = ctr

        let idDisplay = document.createElement('span')
        idDisplay.className = 'id-display'
        idDisplay.innerText = ctr
        square.appendChild(idDisplay)

        //double click for random color
        square.addEventListener('click', function () {
            let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'brown']
            square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        })
        square.addEventListener('dblclick', function () {
            if (square.id % 2 === 0) {
                if (document.body.contains(square.nextSibling)) {
                    square.nextSibling.remove();
                } else {
                    alert('There is no square after this.')
                }
            } else {
                    if (document.body.contains(square.previousSibling)) {
                        square.previousSibling.remove();
                    } else {
                        alert('There is no square before this.')
                    }

            }
        })
    });
});