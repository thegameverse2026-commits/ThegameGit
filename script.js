//Практическая работа №3
//Интерактивность сайта PC ThegameVerse

//Задание 1 Анимация кнопок Реализуется через CSS transition

//Задание 2–3 Модальное окно

const modal = document.querySelector("#feedbackModal");
const openModalButtons = document.querySelectorAll(".js-open-modal");
const closeModalButton = document.querySelector(".modal__close");
const modalForm = document.querySelector(".modal__form");


function openModal() {

    if (!modal) {
        return;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


//Открытие модального окна

openModalButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        openModal();

    });

});


//Закрытие по крестику

if (closeModalButton) {

    closeModalButton.addEventListener("click", function() {

        closeModal();

    });

}

//Задание 3 Закрытие по затемнённому фону

if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            closeModal();

        }

    });

}

//Отправка формы

if (modalForm) {

    modalForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Спасибо! Ваша заявка отправлена.");

        modalForm.reset();

        closeModal();

    });

}

//Закрытие клавишей Escape

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

    }

});

//Задание 4 Бургер-меню

const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");


if (burger && navigation) {

    burger.addEventListener("click", function() {

        burger.classList.toggle("is-active");

        navigation.classList.toggle("navigation--open");

    });


    const navigationLinks =
        document.querySelectorAll(".navigation__link");


    navigationLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            burger.classList.remove("is-active");

            navigation.classList.remove("navigation--open");

        });

    });


    window.addEventListener("resize", function() {

        if (window.innerWidth > 768) {

            burger.classList.remove("is-active");

            navigation.classList.remove("navigation--open");

        }

    });

}

//Задание 5 Кнопка "Наверх"

const toTopButton = document.querySelector(".to-top");


if (toTopButton) {

    function updateToTopButton() {

        if (window.scrollY > 400) {

            toTopButton.classList.add("is-visible");

        } else {

            toTopButton.classList.remove("is-visible");

        }

    }


    window.addEventListener("scroll", updateToTopButton);

    updateToTopButton();


    toTopButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

//Задание 6 Аккордеон FAQ

const faqQuestions =
    document.querySelectorAll(".faq__question");


faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const faqItem =
            question.closest(".faq__item");


        if (!faqItem) {
            return;
        }


        faqItem.classList.toggle("is-open");

    });

});

//Задание 7 Переключение темы

const themeButton =
    document.querySelector(".theme-toggle");


if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("light-theme");


        const isLightTheme =
            document.body.classList.contains("light-theme");


        if (isLightTheme) {

            themeButton.textContent = "🌙";

            themeButton.setAttribute(
                "aria-label",
                "Включить тёмную тему"
            );

        } else {

            themeButton.textContent = "☀";

            themeButton.setAttribute(
                "aria-label",
                "Включить светлую тему"
            );

        }

    });

}

//Задание 8 Галерея изображений

const galleryMainImage =
    document.querySelector(".gallery__main-image");


const galleryThumbs =
    document.querySelectorAll(".gallery__thumb");


galleryThumbs.forEach(function(thumb) {

    thumb.addEventListener("click", function() {

        const image =
            thumb.querySelector("img");


        if (!image || !galleryMainImage) {
            return;
        }


        const fullImage =
            image.getAttribute("data-full");


        const altText =
            image.getAttribute("alt");


        galleryThumbs.forEach(function(item) {

            item.classList.remove("active");

        });


        thumb.classList.add("active");


        galleryMainImage.style.opacity = "0";


        setTimeout(function() {

            galleryMainImage.src = fullImage;

            galleryMainImage.alt = altText;

            galleryMainImage.style.opacity = "1";

        }, 150);

    });

});

//Дополнительная защита ссылок "#"

const emptyLinks =
    document.querySelectorAll('a[href="#"]');


emptyLinks.forEach(function(link) {

    if (!link.classList.contains("js-open-modal")) {

        link.addEventListener("click", function(event) {

            event.preventDefault();

        });

    }

});

//Сообщение в консоли

console.log(
    "PC ThegameVerse: Практическая работа №3 загружена."
);

console.log(
    "Реализованы: кнопки, модальное окно, бургер-меню, " +
    "кнопка Наверх, FAQ, темы и галерея."
);