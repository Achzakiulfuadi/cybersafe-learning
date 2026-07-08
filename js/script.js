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

// =============================
// QUIZ PREMIUM
// =============================

function mulaiKuis(){

    let nama=document.getElementById("namaPeserta").value;

    if(nama==""){

        alert("Silakan masukkan nama peserta.");

        return;

    }

    document.getElementById("quizBox").style.display="block";

    document.getElementById("progressBar").style.width="0%";

    document.getElementById("progressText").innerHTML="Progress : 0%";

}

function hitungSkor(){

    let skor = 0;

    for(let i=1;i<=5;i++){

        let jawaban=document.querySelector('input[name="q'+i+'"]:checked');

        if(jawaban){
            skor += parseInt(jawaban.value);
        }

    }

    let nilai = skor * 20;

    let pesan="";
    let bintang="";

    if(nilai>=90){
        pesan="🏆 Excellent! Anda sangat memahami keamanan digital.";
        bintang="⭐⭐⭐⭐⭐";
    }
    else if(nilai>=80){
        pesan="🥇 Sangat Baik! Pertahankan.";
        bintang="⭐⭐⭐⭐";
    }
    else if(nilai>=70){
        pesan="👍 Baik. Terus tingkatkan pengetahuan Anda.";
        bintang="⭐⭐⭐";
    }
    else{
        pesan="📚 Perlu belajar lagi mengenai Cyber Security.";
        bintang="⭐⭐";
    }

    document.getElementById("hasilKuis").innerHTML =
        "<h2>Nilai Anda : "+nilai+"/100</h2><br>"+
        bintang+
        "<br><br>"+
        pesan;

    document.getElementById("sertifikat").style.display="block";

    document.getElementById("namaSertifikat").innerHTML =
        document.getElementById("namaPeserta").value;

    document.getElementById("nilaiSertifikat").innerHTML =
        "Skor : "+nilai+"/100";

    document.getElementById("pesanSertifikat").innerHTML =
        pesan;

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });

}

function ulangKuis(){

location.reload();

}

// =========================
// Progress Otomatis
// =========================

function updateProgress(){

    let selesai = 0;

    // ==========================
    // 5 Soal Pilihan Ganda
    // ==========================
    for(let i=1;i<=5;i++){

        if(document.querySelector('input[name="q'+i+'"]:checked')){
            selesai++;
        }

    }

    // ==========================
    // 5 Soal Esai
    // ==========================
    for(let i=1;i<=5;i++){

        let textarea = document.getElementById("esai"+i);

        if(textarea && textarea.value.trim()!=""){
            selesai++;
        }

    }

    let persen = (selesai/10)*100;
let warna="#ef4444";

if(persen>=70){

    warna="#22c55e";

}
else if(persen>=40){

    warna="#facc15";

}

    document.getElementById("progressBar").style.background=warna;
    document.getElementById("progressBar").style.width = persen + "%";

    document.getElementById("progressText").innerHTML =
    "Progress : " + persen + "%";

}

function downloadPDF(){

    const sertifikat = document.getElementById("sertifikat");

    setTimeout(() => {

        html2pdf().set({
            margin:10,
            filename:"Sertifikat_CyberSafeLearning.pdf",
            image:{
                type:"jpeg",
                quality:1
            },
            html2canvas:{
                scale:2,
                logging:false,
                useCORS:true,
                allowTaint:true
            },
            jsPDF:{
                unit:"mm",
                format:"a4",
                orientation:"landscape"
            }
        }).from(sertifikat).save();

    },300);

}