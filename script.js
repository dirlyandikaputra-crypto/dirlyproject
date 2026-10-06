// =====================================
// TUTUP NEWS BAR
// =====================================

const closeNews =
    document.getElementById("closeNews");

const newsbar =
    document.getElementById("newsbar");


if (closeNews) {

    closeNews.addEventListener("click", function () {

        newsbar.style.display = "none";

    });

}


// =====================================
// DROPDOWN MICROSOFT
// =====================================

const allMicrosoftBtn =
    document.getElementById("allMicrosoftBtn");

const microsoftMenu =
    document.getElementById("microsoftMenu");


if (allMicrosoftBtn) {

    allMicrosoftBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            microsoftMenu.classList.toggle("show");

        }
    );

}


document.addEventListener(
    "click",
    function (event) {

        if (
            microsoftMenu &&
            !microsoftMenu.contains(event.target) &&
            event.target !== allMicrosoftBtn
        ) {

            microsoftMenu.classList.remove("show");

        }

    }
);


// =====================================
// SEARCH
// =====================================

const searchBtn =
    document.getElementById("searchBtn");

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        function () {

            searchPanel.classList.toggle("show");

            if (
                searchPanel.classList.contains("show")
            ) {

                searchInput.focus();

            }

        }
    );

}


const searchForm =
    document.getElementById("searchForm");


if (searchForm) {

    searchForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const keyword =
                searchInput.value
                .trim()
                .toLowerCase();


            if (keyword === "") {

                alert(
                    "Masukkan kata yang ingin dicari."
                );

                return;

            }


            if (
                keyword.includes("microsoft") ||
                keyword.includes("office") ||
                keyword.includes("onenote") ||
                keyword.includes("onedrive")
            ) {

                window.location.href =
                    "microsoft365.html";

            }

            else if (
                keyword.includes("azure") ||
                keyword.includes("cloud")
            ) {

                window.location.href =
                    "azure.html";

            }

            else if (
                keyword.includes("copilot") ||
                keyword.includes("ai")
            ) {

                window.location.href =
                    "copilot.html";

            }

            else if (
                keyword.includes("xbox") ||
                keyword.includes("game") ||
                keyword.includes("gaming")
            ) {

                window.location.href =
                    "xbox.html";

            }

            else if (
                keyword.includes("support") ||
                keyword.includes("dukungan") ||
                keyword.includes("bantuan")
            ) {

                window.location.href =
                    "support.html";

            }

            else {

                alert(
                    "Maaf, halaman tidak ditemukan."
                );

            }

        }
    );

}


// =====================================
// SLIDER
// =====================================

const slides = [

    {
        title:
            "Dirancang untuk saat ini dan<br>masa mendatang",

        text:
            "Generasi terbaru dari game. Tujuanmu. Teman dan keluarga. Windows 11 diciptakan agar Anda lebih dekat dengan semua orang yang Anda sayangi.",

        button:
            "Jelajahi pengalaman kami",

        link:
            "microsoft365.html"
    },


    {
        title:
            "Bekerja lebih cerdas dengan<br>Microsoft 365",

        text:
            "Buat dokumen, kelola data, simpan catatan, dan selesaikan pekerjaan Anda dengan lebih mudah.",

        button:
            "Jelajahi Microsoft 365",

        link:
            "microsoft365.html"
    },


    {
        title:
            "Temukan dunia gaming<br>yang baru",

        text:
            "Nikmati berbagai pengalaman gaming melalui halaman Xbox dan Game Pass versi project lokal ini.",

        button:
            "Lihat Xbox",

        link:
            "xbox.html"
    }

];


let currentSlide = 0;

let sliderTimer;

let sliderPlaying = true;


const heroTitle =
    document.querySelector(".hero-copy h1");

const heroText =
    document.querySelector(".hero-copy p");

const heroButton =
    document.querySelector(".hero-copy .hero-cta");


function showSlide(index) {

    if (!heroTitle) {
        return;
    }


    const slide =
        slides[index];


    heroTitle.innerHTML =
        slide.title;


    heroText.textContent =
        slide.text;


    heroButton.textContent =
        slide.button;


    heroButton.href =
        slide.link;

}


function nextSlide() {

    currentSlide++;

    if (
        currentSlide >= slides.length
    ) {

        currentSlide = 0;

    }


    showSlide(currentSlide);

}


function previousSlide() {

    currentSlide--;

    if (
        currentSlide < 0
    ) {

        currentSlide =
            slides.length - 1;

    }


    showSlide(currentSlide);

}


const nextButton =
    document.getElementById("nextSlide");


const prevButton =
    document.getElementById("prevSlide");


if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextSlide
    );

}


if (prevButton) {

    prevButton.addEventListener(
        "click",
        previousSlide
    );

}


// =====================================
// PAUSE / PLAY
// =====================================

const pauseButton =
    document.getElementById("pauseSlide");


function startSlider() {

    sliderTimer =
        setInterval(
            nextSlide,
            5000
        );

    sliderPlaying = true;


    if (pauseButton) {

        pauseButton.textContent =
            "Ⅱ";

    }

}


function stopSlider() {

    clearInterval(sliderTimer);

    sliderPlaying = false;


    if (pauseButton) {

        pauseButton.textContent =
            "▶";

    }

}


if (pauseButton) {

    pauseButton.addEventListener(
        "click",
        function () {

            if (sliderPlaying) {

                stopSlider();

            }

            else {

                startSlider();

            }

        }
    );

}


if (heroTitle) {

    startSlider();

}


// =====================================
// KEMBALI KE ATAS
// =====================================

const backTop =
    document.getElementById("backTop");


if (backTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (
                window.scrollY > 400
            ) {

                backTop.classList.add("show");

            }

            else {

                backTop.classList.remove("show");

            }

        }
    );


    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// =====================================
// FUNGSI HALAMAN DEMO
// =====================================

function demoAlert(message) {

    alert(message);

}


function demoSubmit(event) {

    event.preventDefault();

    alert(
        "Login demo berhasil! Tidak ada data yang dikirim ke Microsoft."
    );

    window.location.href =
        "index.html";

}


function addCart(product) {

    const message =
        document.getElementById("cartMessage");


    if (message) {

        message.textContent =
            product +
            " berhasil ditambahkan ke keranjang demo.";

    }

}