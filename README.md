# Frontend Öğrenme Günlüğüm 

Burada, frontend web geliştirme dünyasına adım attığımdan beri kendi kendime sıfırdan geliştirdiğim tüm projeleri ve pratikleri topluyorum. 

Amacım, HTML, CSS ve JavaScript kullanarak temel web mantığını oturtmak ve kod yazma becerilerimi her geçen gün bir adım öteye taşımak.

---

## Geliştirdiğim Projeler

### 1. Profile Card (Profil Kartı) 
* **Bu Projede Ne Öğrendim?:** * Sayfa içindeki elemanları (yazılar, resimler) CSS Flexbox kullanarak ekrana düzgünce ortalamayı.
  * Temel kenar yumuşatmaları (border-radius) ve gölge efektleri ile modern bir kutu tasarımı yapmayı.
* **Klasör:** [01_profile_card](./01_profile_card)

### 2. YDS Geri Sayım Sayacı & Karanlık Mod 
* **Bu Projede Ne Öğrendim?:**
  * JavaScript'in `Date()` fonksiyonu ile gelecekteki bir tarihle şu anki zaman arasındaki farkı hesaplamayı.
  * `setInterval` kullanarak sayacın ekranda her saniye canlı olarak akmasını sağlamayı.
  * CSS değişkenleri sayesinde tek bir butonla tüm sayfanın renklerini değiştirerek **Karanlık Mod (Dark Mode)** yapmayı.
  * Kullanıcı sayfayı yenilese bile seçtiği temayı hatırlaması için **localStorage** (tarayıcı hafızası) kullanmayı.
* **Klasör:** [02_countdown_dark_mode](./02_countdown_dark_mode)

### 3. Score Keeper (Skor Sayacı) 
* **Bu Projede Ne Öğrendim?:**
  * `document.querySelector` ile HTML elementlerini JavaScript'e taşıyıp manipüle etmeyi (DOM Manipülasyonu).
  * Butonlara `addEventListener('click')` ve seçim alanına `change` olay dinleyicileri ekleyerek dinamik etkileşimler kurmayı.
  * JavaScript içindeki `<select>` etiketinden gelen string değerleri `parseInt()` ile sayıya çevirerek doğru mantıksal karşılaştırmalar yapmayı.
  * `classList.add()` ve `remove()` fonksiyonları ile oyunun kazanılma/kaybedilme durumuna göre CSS sınıflarını dinamik olarak yönetmeyi.
  * Oyun bittiğinde kullanıcıların ekstra tıklama yapmasını engellemek için butonları `.disabled = true` ile devre dışı bırakmayı.
  * **DRY (Don't Repeat Yourself)** prensibine sadık kalarak, tekrar eden sıfırlama kodlarını tek bir `reset()` yardımcı fonksiyonu altında toplamayı.
* **Klasör:** [03_score_counter](./03_score_counter)

