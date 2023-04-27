
// if (location.href.substr(-5) === '.html') {
//   let newHref = location.href.substr(0, location.href.length - 5);
//   window.history.replaceState(null, null, newHref);
// }


// ==== Окно регистрации

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = 'true';

const timeout = 800;

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        // для доп popup (сейчас его нет)
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper-popup').offsetWidth + 'px';
    if (lockPadding.length > 0) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px'
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, 0);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
})

//================================== portfolio 

const buttonTab = document.querySelector('button[id="active-slide"]');
const contentTab = document.getElementById('active-content');

generateContent(buttonTab, contentTab);

const buttonTabMark = document.querySelector('button[id="active-slide-mark"]');
const contentTabMark = document.getElementById('active-content-mark');

generateContent(buttonTabMark, contentTabMark);

const buttonTabVitaly = document.querySelector('button[id="active-slide-vitaly"]');
const contentTabVitaly = document.getElementById('active-content-vitaly');

generateContent(buttonTabVitaly, contentTabVitaly);

const buttonTabYasha = document.querySelector('button[id="active-slide-yasha"]');
const contentTabYasha = document.getElementById('active-content-yasha');

generateContent(buttonTabYasha, contentTabYasha);

function generateContent(button, content) {
    button.addEventListener('click', function () {
        content.classList.toggle('box-hidden');
        if (content.classList.contains('box-hidden')) {
            setTimeout(function () {
                button.textContent = "Закрыть";
            }, 800);
        } else {
            button.textContent = "Посмотреть все работы";
            setTimeout(function () {
                button.textContent = "Посмотреть все работы";
            }, 800);
        }
    });
}
