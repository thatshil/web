const degerler = new URLSearchParams(window.location.search);

const ad = degerler.get('isim');
const eposta = degerler.get('eposta');
const telefon = degerler.get('tel');
const yas = degerler.get('yas');
const cinsiyet = degerler.get('cinsiyet');

document("<h2>Kaydınız Tamamlandı!</h2>");
document("<h3>Perde Arkasına Hoşgeldiniz</h3>");

document("<table border='1' cellspacing='0' cellpadding='10' style='margin: 2rem auto; background-color: white; color: black;'>");
document("<tr><th>Bilgi</th><th>Değer</th></tr>");
document("<tr><td>Adınız Soyadınız</td><td>" + (ad ?? '-') + "</td></tr>");
document("<tr><td>E-posta</td><td>" + (eposta ?? '-') + "</td></tr>");
document("<tr><td>Telefon</td><td>" + (telefon ?? '-') + "</td></tr>");
document("<tr><td>Yaş</td><td>" + (yas ?? '-') + "</td></tr>");
document("<tr><td>Cinsiyet</td><td>" + (cinsiyet === 'K' ? 'Kadın' : (cinsiyet === 'E' ? 'Erkek' : '-')) + "</td></tr>");
document("</table>");

const filmler = ["inception", "avatar", "gladiator", "matrix", "joker", "interstellar"];
    const secilenFilm = filmler[Math.floor(Math.random() * filmler.length)];
    const karisik = secilenFilm.split("").sort(() => 0.5 - Math.random()).join("");

    document.getElementById("karisikFilm").textContent = karisik;

    document.getElementById("kontrolBtn").addEventListener("click", function () {
      const giris = document.getElementById("tahmin").value.toLowerCase().trim();
      const sonuc = document.getElementById("sonuc");

      if (giris === secilenFilm) {
        sonuc.innerHTML = "🎉 Doğru tahmin! Tebrikler!";
        sonuc.style.color = "lightgreen";
      } else {
        sonuc.innerHTML = "❌ Yanlış tahmin, tekrar dene!";
        sonuc.style.color = "orange";
      }
    });