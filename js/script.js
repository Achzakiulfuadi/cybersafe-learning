function cekPhishing(jawaban) {
    const hasil = document.getElementById("hasil");

    if (jawaban === "phishing") {
        hasil.innerHTML = "✅ Benar! Pesan tersebut termasuk phishing karena memakai link mencurigakan, email tidak resmi, dan tekanan waktu.";
        hasil.style.color = "#22c55e";
    } else {
        hasil.innerHTML = "❌ Kurang tepat. Pesan tersebut tidak aman karena memiliki ciri-ciri phishing.";
        hasil.style.color = "#ef4444";
    }
}

function hitungSkor() {
    let skor = 0;
    const totalSoal = 5;

    for (let i = 1; i <= totalSoal; i++) {
        const jawaban = document.querySelector(`input[name="q${i}"]:checked`);

        if (jawaban) {
            skor += parseInt(jawaban.value);
        }
    }

    const hasilKuis = document.getElementById("hasilKuis");

    if (skor === 5) {
        hasilKuis.innerHTML = `🎉 Skor Anda: ${skor}/${totalSoal}. Sangat baik! Anda memahami keamanan digital dengan baik.`;
        hasilKuis.style.color = "#22c55e";
    } else if (skor >= 3) {
        hasilKuis.innerHTML = `👍 Skor Anda: ${skor}/${totalSoal}. Cukup baik, tetapi masih perlu belajar lagi.`;
        hasilKuis.style.color = "#facc15";
    } else {
        hasilKuis.innerHTML = `⚠️ Skor Anda: ${skor}/${totalSoal}. Pemahaman masih rendah, silakan baca artikel dan tips keamanan.`;
        hasilKuis.style.color = "#ef4444";
    }
}