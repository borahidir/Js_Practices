/* Windows Object - Window Nesnesi */

/* yazdığımız js kodlarının nasıl çalıştığını
anlamak için window object kavramının ne olduğunu ve
hangi amaç için kullanıldığını öğrenicez */

// console üzerinde window yazarak window objesini çağırabiliriz
// obje olduğunu {} lerden ve parantezler içinde özellikler var

// örneğin bir değişken tanımlayalım

let val;
var a = 10;

val = window;

console.log(val);
// window objesini val içerisine yazdırmış olduk

/* console ekranındaki window un içine baktığımızda
a değişkenini yazdırdığını görüyorum.
yani benim sayfada tanımladığım elemanlar aslında
window objesinin de bir elemanı oluyor. */

// bu tanımlamaya global scope
// ya da global degisken tanımlama diyoruz

// örneğin 0 döndüren boş bir fonk. tanımlayalım

let val1;

function hello(){
    return 0;
};

val1 = window;
console.log(val1);
// // h harfine gelip hello fonksiyonunu görebilirsin

// // direkt olarak fonksiyonu tanımlasaydım da window içine yazacaktı.

function test(){
    return 1;
};
// t harfine gelip test fonksiyonunu görebilirsin.

/* yani tanımlamış olduğum bütün değişkenler
bu window objesinin içinde yer alıyor
ve bunun harici birçok metod var. */

// örneğin alert metodunu kullanalım

// alert('Hello CSEH Academy');
// sürekli tekrar etmemesi için yorum satırı haline getirdim

// prompt - diyalog penceresi

// var buy = prompt('Onayliyor musun?')
// console.log(buy)

// confirm - onay kutusu
// onay = confirm('Emin misin?');
// console.log(onay);
// tamam dersem true iptal dersem false verir

// ya da if else bloğu koyabiliriz

if(onay){
    console.log('Kullanıcı onayladı')
}else{
    console.log('Kullanıcı reddetti')
}

console.log(onay);

// location

val = window.location;
console.log(val);
// // adres bilgisiyle ilgili objeyi döndürdü
// // burdan adres bilgisiyle ilgili çeşitli metodlara ulaşabiliriz

val = window.location.href;
console.log(val);
// // tarayıcıdaki adresi alır.

val = window.location.hostname;
console.log(val);
// // sadece domain name kısmını alır

val = window.location.host;
console.log(val);
// // port ile birlikte domain name

val = window.location.protocol;
console.log(val);
// // http protokolü kullandığını görüyoruz

// /* siteyle alakalı location nesnesi üzerinden
// alt özelliklere ulaşmamız mümkün
// */

// // ya da url üzerine bir parametre ekleyebiliriz örneğin

// // http://127.0.0.1:5500/index2.html?id=1
// // http://127.0.0.1:5500/index2.html?id=1&test=cseh

// // bu parametreleri çekmek için
// val = window.location.search;
// console.log(val);

// // href ile direkt bir siteye yönlendirebilirsin
// // window.location.href='https://udemy.com';

// // sayfayı sürekli olarak yenilemek için
// // window.location.reload();

// // tarayıcıyla ilgili bilgilere ulaşmak için
val = window.navigator
console.log(val)

// // sayfa üzerindeki html kodlarını görmek için
val = window.document
console.log(val)

// // sayfa üzerindeki herhangi bir elemanı almak için
// // getElementById metodunu kullanabilirim
val = window.document.getElementById('header')
console.log(val);
// tabi burda headeri html üzerinde tanımlamak gerekli