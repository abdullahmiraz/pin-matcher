function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);
    const randomPinString = randomPin + '';
    if (randomPinString.length == 4) {
        // console.log(randomPin);
        return randomPin;
    } else {
        return generatePin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const PinNumber = generatePin();
    setInputFieldValueById('pin-form', PinNumber);
})


document.getElementById('number-list').addEventListener('click', function (event) {
    const pinInput = document.getElementById('pin-input');
    const prevPin = event.target.innerText;

    if (prevPin <= 9) pinInput.value += prevPin;
    if (prevPin == '<') pinInput.value = pinInput.value.slice(0, -1);
    if (prevPin == 'C') pinInput.value = '';
    console.log();
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const generatedPin = getInputFieldValueById('pin-form');
    const pinChecker = getInputFieldValueById('pin-input');
    const pinSuccess = document.getElementById('pin-success');
    const pinUnmatched = document.getElementById('pin-unmatched');
    const trial = document.getElementById('trial');
    if (generatedPin === pinChecker) {
        pinSuccess.style.display = 'block';
        pinUnmatched.style.display = 'none';
    } else {
        pinUnmatched.style.display = 'block';
        pinSuccess.style.display = 'none';
        parseInt(trial.innerText -= 1);
    }
    if (trial.innerText <= 0) {
        alert("Try again after 10 minutes");
        trial.innerText = 0;
    }
})
