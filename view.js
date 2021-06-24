function show() {
    let disabled;
    if (content.chosenBar == null) {
        disabled = "disabled";
    } else {
        disabled = "";
    }

    let svgInnerHtml = "";
    for (let i = 0; i < content.numbers.length; i++) {
        svgInnerHtml += createBars(content.numbers[i], i + 1);
    }

    let errorHtml;
    if (content.errorMessage == null) {
        errorHtml = "";
    } else {
        errorHtml = /*html*/`
        <span style="color: white">${content.errorMessage}</span>
        <button onclick="removeError(content)">&times;</button>
    `;
    }

    document.getElementById("content").innerHTML = /*html*/`
        <svg id="charts" width="900" viewbox= " 0 0 100 60">
            ${svgInnerHtml}
        </svg>
        <br/>
        Du har valgt stolpe: <i id="outText">${content.chosenBar || ""}</i>
        <br/>
        Verdi: <input id="value" type="number" oninput="content.inputValue = parseInt(this.value)"
                      min="1" max ="10" value="${content.inputValue}"/>
        <button id="addBtn" onclick="add(content)">Legg til stolpe</button>

        <button id="removeBtn" ${disabled} onclick="remove(content)" >Fjern stolpen</button>
        <button id="changeBtn" ${disabled} onclick="edit(content)" >Endre på valgt stolpe</button>
        ${errorHtml}
        `;
}

function createBars(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 6;
    let y = 60 - height;
    let color = colorBars(1, 10, barNo);
    let border;
    if (barNo == content.chosenBar) {
        border = 1;
    } else {
        border = 0;
    }

    return /*html*/`<rect onclick="selectBar(${barNo}, content)"
                  width="${width}"
                  height="${height}"
                  x="${x}"
                  y="${y}"
                  fill="${color}"
                  stroke-width="${border}"
                  stroke="black">
            </rect>`;
}


function colorBars(min, max, val) {
    let minHue = 0,
        maxhue = 240;
    let currentPrecentage = (val - min) / (max - min);
    let cString =
        "hsl(" + (currentPrecentage * (maxhue - minHue) + minHue) + ",100%,50%)";
    return cString;
}




