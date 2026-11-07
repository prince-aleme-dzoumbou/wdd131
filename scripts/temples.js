
// SELECT HTML ELEMENTS

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".navigation");

// HAMBURGER MENU

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menuButton.classList.toggle("menu-open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");
        menuButton.classList.remove("menu-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });

});

// CURRENT YEAR

const currentYear = document.querySelector("#current-year");

currentYear.textContent = new Date().getFullYear();

// LAST MODIFIED DATE

const lastModified = document.querySelector("#last-modified");

const modifiedDate = new Date(document.lastModified);

lastModified.textContent = modifiedDate.toLocaleDateString("en-US");
