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
