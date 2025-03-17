// Bir JavaScript sayaç (counter) uygulamasının kurgusu şöyle olabilir:
// 	1.	Başlangıç Durumu
// 	•	Sayaç değeri başlangıçta sıfır olacak.
// 	•	Kullanıcıya mevcut sayaç değerini göstermek için bir ekran (örneğin, bir <span> etiketi) kullanılacak.
// 	2.	Kullanıcı Etkileşimleri
// 	•	Artırma Butonu: Basıldığında sayaç değeri 1 artacak.
// 	•	Azaltma Butonu: Basıldığında sayaç değeri 1 azalacak.
// 	•	Sıfırlama Butonu: Basıldığında sayaç değeri sıfırlanacak.
// 	3.	Veri Güncelleme
// 	•	Her butona basıldığında sayaç değeri güncellenecek ve ekrana yansıtılacak.
// 	•	Sayfa yenilendiğinde sayaç sıfırlanacak (eğer tarayıcı depolaması kullanılmazsa).
// 	4.	Ekstra Özellikler (Opsiyonel)
// 	•	Negatif değerlere izin verilmemesi için bir kontrol eklenebilir.
// 	•	Sayacı tarayıcıda saklamak için localStorage kullanılabilir.
// 	•	Butonlara basıldığında animasyon veya renk değişimi gibi görsel efektler eklenebilir.

// Bunu geliştirmek istersen, belirli bir özellik eklemek ister misin? 🚀
import "./style.css";
const counter = document.querySelector("#counter");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
document.addEventListener("dblclick", (event) => {
    event.preventDefault();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// 1. durum
let count = 0;
counter.textContent = count;

// 2. durum
increaseBtn.addEventListener("click", e => {
    count++;
    counter.textContent = count;
    if (count > 0) {
        counter.style.color = getRandomHexColor();
    }
})

decreaseBtn.addEventListener("click", e => {
    count--;
    counter.textContent = count;
    if (count < 0) {
        count = 0;
        counter.textContent = count;
        counter.style.color = "black";
    }
     if (count > 0) {
        counter.style.color = getRandomHexColor();
    }
})

resetBtn.addEventListener("click", e => {
    count = 0;
    counter.textContent = count;
    counter.style.color = "black";
})
