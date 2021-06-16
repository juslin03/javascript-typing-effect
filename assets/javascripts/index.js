let i = 0;
let form = document.querySelector('form');

window.addEventListener('DOMContentLoaded', (e) => {
    let speedSet = document.querySelector('#speed').value;
    document.querySelector('#r').innerHTML = speedSet;
    document.getElementById('cursor').style.animation = `flip ${3 * speedSet}ms linear infinite`;
});

window.addEventListener('input', function(e) {
    let speedSet = document.querySelector('#speed').value;
    document.querySelector('#r').innerHTML = speedSet;
    document.getElementById('cursor').style.animation = `flip ${3 * speedSet}ms linear infinite`;
    });
    form.addEventListener('submit', function(e) {
        // form.reset();
        e.preventDefault(); // prevent default reload page
        typeWriter();
    });

    function typeWriter() {
        // get inputData
        let inputText = document.querySelector('#inputText'), speedSet = document.querySelector('#speed');
        let inputData = inputText.value, speed = speedSet.value;

        if(!inputData) {
            inputText.style.borderColor = '#f23';
        }; // stop the function if not value set
        if(i < inputData.length) {
            document.querySelector('p').textContent += inputData.charAt(i);
            i++;

            setTimeout(typeWriter, speed);
        }
    }