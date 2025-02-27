// ==UserScript==
// @name         AutoSurvey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Survey Script!
// @author       Vic Jeremy
// @match        https://sia.unkartur.ac.id/siakad/data_angket/add/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Store jQuery to avoid conflicts with the page's jQuery
    const $j = jQuery.noConflict(true);

    // Tunggu hingga halaman sepenuhnya dimuat
    window.onload = function() {

    // AUTO ANSWER
        setTimeout(function() {
            // Memilih radio button untuk setiap pertanyaan
            for (let i = 1; i <= 27; i++) {
              // Using native DOM instead of jQuery to avoid conflicts
              const radios = document.getElementsByName(`jawaban_${i}`);
              if (radios.length > 0) {
                  // Randomly select between index 2 or 3 (third or fourth radio button)
                  const randomIndex = Math.random() < 0.5 ? 2 : 3;
                  if (radios[randomIndex]) {
                      radios[randomIndex].checked = true;
                  }
              }
            }

            // Helper function to get a random item from an array
            function getRandomItem(array) {
                return array[Math.floor(Math.random() * array.length)];
            }


            // Question 27: Connection type
            const question27 = document.getElementById('jawaban_27');
            if (question27) {
                const connectionOptions = ["Wifi rumah/kos", "Internet HP", "Wifi Kampus", "Tethering teman"];
                question27.value = getRandomItem(connectionOptions);
            }

            // Question 28: Device type
            const question28 = document.getElementById('jawaban_28');
            if (question28) {
                const deviceOptions = ["Laptop", "HP", "Tab", "komputer"];
                question28.value = getRandomItem(deviceOptions);
            }

            // Question 29: Learning mode
            const question29 = document.getElementById('jawaban_29');
            if (question29) {
                const modeOptions = ["Online", "Offline"];
                question29.value = getRandomItem(modeOptions);
            }

            // Question 30: Meeting platform
            const question30 = document.getElementById('jawaban_30');
            if (question30) {
                const platformOptions = ["Ms Team", "G Meet", "Zoom"];
                question30.value = getRandomItem(platformOptions);
            }

            // Question 31: Kritik dan saran
            const question31 = document.getElementById('jawaban_31');
            if (question31) {
                const feedbackOptions = [
                    "Pembelajaran sudah baik, tetapi mungkin bisa ditambahkan lebih banyak contoh kasus nyata.",
                    "Materi pembelajaran perlu diperbarui sesuai dengan perkembangan terkini di industri.",
                    "Metode pembelajaran interaktif sudah bagus, perlu ditingkatkan waktu untuk diskusi kelompok.",
                    "Dosen sudah menyampaikan materi dengan jelas. Mungkin bisa ditambahkan lebih banyak praktikum.",
                    "Saya harap ada lebih banyak kesempatan untuk praktik langsung dengan kasus-kasus riil.",
                    "Mungkin bisa ditambahkan sesi tanya jawab lebih panjang di akhir setiap pertemuan.",
                    "Alangkah baiknya jika materi pembelajaran dapat diakses lebih awal sebelum jadwal perkuliahan.",
                    "Secara keseluruhan sudah baik, namun perlu ditingkatkan interaksi antara dosen dan mahasiswa.",
                    "Fasilitas pembelajaran sudah memadai, tugas-tugas yang diberikan juga cukup menantang untuk meningkatkan pemahaman."
                ];
                question31.value = getRandomItem(feedbackOptions);
            }
            // Question 32: Kritik & Saran Untuk Dosen
            const question32 = document.getElementById('kritiksaran');
            if (question32) {
                const feedbackForLecturer = [
                    "Dosen mengajar dengan sangat baik. Mungkin bisa ditambahkan lebih banyak contoh kasus dalam penjelasan materi.",
                    "Metode mengajar sudah bagus. Untuk kedepannya mungkin bisa memberikan rangkuman materi setelah perkuliahan selesai.",
                    "Dosen sangat menguasai materi. Saran saya mungkin bisa memperbanyak diskusi interaktif di kelas.",
                    "Penyampaian materi sudah jelas. Mungkin bisa ditambahkan referensi tambahan untuk pembelajaran mandiri mahasiswa.",
                    "Dosen selalu tepat waktu dan profesional. Saran saya mungkin bisa memberikan lebih banyak feedback untuk tugas-tugas mahasiswa.",
                    "Terima kasih atas dedikasi dalam mengajar. Untuk pengembangan, mungkin bisa ditambahkan sesi tanya jawab di akhir perkuliahan.",
                    "Cara mengajar sudah sangat baik dan terstruktur. Mungkin bisa memberikan contoh aplikasi materi dalam dunia kerja yang lebih beragam.",
                    "Metode pembelajaran sudah efektif. Saran saya mungkin materi slide bisa dibagikan sebelum perkuliahan dimulai.",
                    "Dosen sangat membantu dalam proses pembelajaran. Mungkin bisa menambahkan sesi konsultasi tambahan untuk mahasiswa yang membutuhkan.",
                    "Pengajaran sudah optimal. Untuk peningkatan kualitas, mungkin bisa menggunakan lebih banyak media pembelajaran interaktif."
                ];
                question32.value = getRandomItem(feedbackForLecturer);
            }

            console.log("Survey auto-fill completed!");

        }, 500);// Short delay to ensure page is fully loaded
    };
})();
