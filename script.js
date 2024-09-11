const table = document.getElementById("opening-times-table");


document.addEventListener("DOMContentLoaded", function() {
    let toggled = false;

    const dropDownButton = document.querySelector(".drop-down-button");
    const dropDownContent = document.querySelector(".drop-down-content");

    function adjustButtonPosition() {
        // Adjust button position if needed
        const contentHeight = dropDownContent.scrollHeight;
        
        toggled ? dropDownButton.style.top = `${contentHeight + 90}px` : dropDownButton.style.top = `${90}px`
    }

    dropDownButton.addEventListener("click", function() {
        toggled = !toggled;
        dropDownContent.classList.toggle("show");
        dropDownButton.classList.toggle("rotate");
        adjustButtonPosition();
    });

    adjustButtonPosition(); // For adjusting the position on page load
});

table.addEventListener("mousemove", (event) => {
    const target = event.target;

    if (target.tagName === "TD") {
        const colIndex = target.cellIndex;
        const row = target.parentElement;
        const ths = table.querySelectorAll("thead th");
        const leftmostTd = row.querySelector("td");

        removeHighlight();

        if (colIndex != 0) {
            if (ths[colIndex]) {
                ths[colIndex].classList.add("highlight");
            }

            if (leftmostTd) {
                leftmostTd.classList.add("highlight");
            }
        }
    }
});

table.addEventListener("mouseleave", () => {
    removeHighlight();
});

function removeHighlight() {
    const ths = table.querySelectorAll("th");
    const tds = table.querySelectorAll("td");

    ths.forEach(th => th.classList.remove("highlight"));
    tds.forEach(td => td.classList.remove("highlight"));
}
