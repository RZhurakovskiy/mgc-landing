export function initDistrictInteractions() {
    document.querySelectorAll("[data-code]").forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            const district = document.querySelector(".district");
            const title = this.getAttribute("data-title");
            district.querySelector("span").textContent = title;
 
            district.style.display = "block";

            // Установим класс для мобильных устройств, если это необходимо
            if (window.innerWidth <= 768) {
                district.classList.add("mobile-visible");
            }
        });
        
        element.addEventListener("mouseleave", function () {
            if (!document.querySelector(".rf-map").classList.contains("open")) {
                document.querySelector(".district").style.display = "none";
            }
        });
    });

    document.querySelector(".rf-map").addEventListener("click", function (event) {
        const target = event.target.closest("[data-code], .district-links div");
        if (target) {
            const id = target.getAttribute("data-code");
            const title = target.getAttribute("data-title");

            if (document.getElementById(id) && document.getElementById(id).textContent !== "") {
                const district = document.querySelector(".district");
                district.style.display = "block";
                district.querySelector("span").textContent = title;

                // Установим класс для мобильных устройств, если это необходимо
                if (window.innerWidth <= 768) {
                    district.classList.add("mobile-visible");
                } 

                document.querySelectorAll("[data-code]").forEach((el) => el.classList.add("dropfill"));
                target.classList.add("mainfill");
                document.querySelector(".rf-map").classList.add("open");
                document.getElementById(id).style.display = "block";
            }
        }
    });

    document.querySelector(".close-district").addEventListener("click", function () {
        const rfMap = document.querySelector(".rf-map");
        rfMap.classList.remove("open");
        document.querySelectorAll("[data-code].dropfill").forEach((el) => el.classList.remove("dropfill"));
        document.querySelectorAll("[data-code].mainfill").forEach((el) => el.classList.remove("mainfill"));
        document.querySelectorAll(".district-text").forEach((el) => (el.style.display = "none"));
        document.querySelector(".district").style.display = "none";
    });

    document.querySelectorAll("[data-code]").forEach(function (element) {
        const id = element.getAttribute("data-code");
        const title = element.getAttribute("data-title");
        const districtLinks = document.querySelector(".district-links");

        if (document.getElementById(id) && document.getElementById(id).textContent !== "") {
            const div = document.createElement("div");
            div.setAttribute("data-title", title);
            div.setAttribute("data-code", id);
            div.textContent = title;
            districtLinks.appendChild(div);
        }
    });
}
