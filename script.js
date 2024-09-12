const table = document.getElementById("opening-times-table");


document.addEventListener("DOMContentLoaded", function() {
    let toggled = false;

    const dropDownButton = document.querySelector(".drop-down-button");
    const dropDownContent = document.querySelector(".drop-down-content");

    const bergenButton = document.getElementById("bergen-button");
    const bergenContent = document.getElementById("bergen-content");

    const haugesundButton = document.getElementById("haugesund-button");
    const haugesundContent = document.getElementById("haugesund-content");

    const sogndalButton = document.getElementById("sogndal-button");
    const sogndalContent = document.getElementById("sogndal-content");

    const foerdeButton = document.getElementById("foerde-button");
    const foerdeContent = document.getElementById("foerde-content");

    const stordButton = document.getElementById("stord-button");
    const stordContent = document.getElementById("stord-content");

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

    bergenButton.addEventListener("click", function() {
        bergenContent.classList.toggle("show");
        // Selecting the CCS selector "#bergen-button img" and applying the ".rotate" class
        document.querySelector("#bergen-button img").classList.toggle("rotate");
    });

    haugesundButton.addEventListener("click", function() {
        haugesundContent.classList.toggle("show");
        document.querySelector("#haugesund-button img").classList.toggle("rotate");
    });

    sogndalButton.addEventListener("click", function() {
        sogndalContent.classList.toggle("show");
        document.querySelector("#sogndal-button img").classList.toggle("rotate");
    });

    foerdeButton.addEventListener("click", function() {
        foerdeContent.classList.toggle("show");
        document.querySelector("#foerde-button img").classList.toggle("rotate");
    });

    stordButton.addEventListener("click", function() {
        stordContent.classList.toggle("show");
        document.querySelector("#stord-button img").classList.toggle("rotate");
    })

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
