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
    if (bergenButton) {
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
        });
    }

    adjustButtonPosition(); // For adjusting the position on page load

    // Code for the graphs
    const today = new Date().getDay();
    const visitorGraph = document.getElementById("visitor-graph");
    const mondayButton = document.getElementById("monday-button");
    const tuesdayButton = document.getElementById("tuesday-button");
    const wednesdayButton = document.getElementById("wednesday-button");
    const thursdayButton = document.getElementById("thursday-button");
    const fridayButton = document.getElementById("friday-button");

    function resetButtons() {
        mondayButton.classList.remove("unclickable");
        tuesdayButton.classList.remove("unclickable");
        wednesdayButton.classList.remove("unclickable");
        thursdayButton.classList.remove("unclickable");
        fridayButton.classList.remove("unclickable");
    }

    function setGraph(day) {
        switch (day) {
            case 2: // Tuesday
                visitorGraph.src = "../besokstall_Tirsdag.png";
                visitorGraph.alt = "graf over besøkstall på tirsdag";
                resetButtons();
                tuesdayButton.classList.add("unclickable");
                break;
            case 3: // Wednesday
                visitorGraph.src = "../besokstall_Onsdag.png";
                visitorGraph.alt = "graf over besøkstall på onsdag";
                resetButtons();
                wednesdayButton.classList.add("unclickable");
                break;
            case 4: // Thursday
                visitorGraph.src = "../besokstall_Torsdag.png";
                visitorGraph.alt = "graf over besøkstall på torsdag";
                resetButtons();
                thursdayButton.classList.add("unclickable");
                break;
            case 5: // Friday
                visitorGraph.src = "../besokstall_Fredag.png";
                visitorGraph.alt = "graf over besøkstall på fredag";
                resetButtons();
                fridayButton.classList.add("unclickable");
                break;
            default: // Monday, Saturday and Sunday and any exception will be treated as Monday.
                visitorGraph.src = "../besokstall_Mandag.png";
                visitorGraph.alt = "graf over besøkstall på mandag"
                resetButtons();
                mondayButton.classList.add("unclickable");
                break;
        }   
    
    }

    setGraph(today);

    mondayButton.addEventListener("click", () => {
        setGraph(1);
    });

    tuesdayButton.addEventListener("click", () => {
        setGraph(2);
    })

    wednesdayButton.addEventListener("click", () => {
        setGraph(3);
    });

    thursdayButton.addEventListener("click", () => {
        setGraph(4);
    })

    fridayButton.addEventListener("click", () => {
        setGraph(5);
    })

    // Utlånskode

    document.getElementById('reservation-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const equipment = document.getElementById('equipment').value;
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const tableBody = document.querySelector('#reservations-table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${equipment}</td>
            <td>${name}</td>
            <td>${date}</td>
            <td>${time}</td>
        `;
        tableBody.appendChild(newRow);

        // Tøm skjemaet etter reservasjon
        document.getElementById('reservation-form').reset();
    });
});

if (table) {
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
}
