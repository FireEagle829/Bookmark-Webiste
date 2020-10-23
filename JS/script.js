// Accordion

// const getIndex = (element, list) => {
//     for (var i = 0; i < list.length + 1; i++) {
//         if (list[i] === element) {
//             return i;
//         } else {
//             continue;
//         }
//     }
// }

let accordionSlides = document.querySelectorAll(".accordion-slide");
accordionSlides.forEach(slide => {
    slide.addEventListener('click', function() {
        let style = window.getComputedStyle(slide.children[1]);
        if (style.height === "0px") {
            // if (getIndex(this, document.querySelector(".accordion").children) === 0) {
            //     this.children[1].style.height = "100%";
            // }
            // else if (getIndex(this, document.querySelector(".accordion").children) === 1) {
            //     this.children[1].style.height = "140px";
            // }
            // else if (getIndex(this, document.querySelector(".accordion").children) === 2) {
            //     this.children[1].style.height = "120px";
            // }
            this.children[1].style.maxHeight = "500px";
        } else {
            this.children[1].style.maxHeight = "0px";
        }
    })
})

