function getInputFieldValueById(inputId){
    const inputFieldValue = document.getElementById(inputId);
    const inputFieldValueString = inputFieldValue.value ;
    const inputField = parseInt(inputFieldValueString);

    return inputField ;
}
function setInputFieldValueById(inputId, value){
    const inputFieldValue = document.getElementById(inputId); 
    inputFieldValue.value = value
}

function getTextValueById(textId){
    const textValueById = document.getElementById(textId);
    const textValueByIdString = textValueById.innerText ;
    const textValue = parseInt(textValueByIdString);

    return textValue ;
}