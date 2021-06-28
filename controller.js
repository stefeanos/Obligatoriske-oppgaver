function selectBar(barNo, content) {
    if (barNo || content == chosenBar && content != barNo || null == content || chosenBar) {
        if (content.chosenBar != barNo) {
            content.chosenBar = barNo;
        } else {
            content.chosenBar = null;
        }
    }
    content.showView();
}

function add(content) {
    if (!(valueIsValid(content) && hasRoomForAnotherBar(content))) {

    } else {
        content.numbers.push(content.inputValue);
    }
    content.showView();
}

function edit(content) {
    if (!valueIsValid(content)) {

    } else {
        let selectedBarIndex = parseInt(content.chosenBar) - 1;
        content.numbers[selectedBarIndex] = content.inputValue;
    }
    content.showView();
}

function remove(content) {
    let index = parseInt(content.chosenBar) - 1;
    if (!(index >= 0 && index < content.numbers.length)) {

    } else {
        content.numbers.splice(index, 1);
    }
    content.showView();
}

function removeError(content) {
    content.errorMessage = null;
    content.showView();
}

function valueIsValid(content) {
    let isValid = content.inputValue >= 1 && content.inputValue <= 10;
    if (isValid) {

    } else {
        content.errorMessage = "Can only add a bar with a value of 1 to 10";
    }
    return isValid;
}

function hasRoomForAnotherBar(content) {
    let isValid = content.numbers.length <= 9;
    if (isValid) {

    } else {
        content.errorMessage = "Cannot have more than 10 bars at a time";
    }
    return isValid;
}
