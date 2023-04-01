// Scopes
// yazdığımız değişkenin hangi kod parçası tarafından erişilebilir olacağını belirler

/* Global Scopes */
var username = 'Bora';
console.log(username);
console.log(window);
/* u harfine geldiğimde username nin 
window objesi olarak eklendiğini görüyorum */

var surname = 'Cseh';
function printSurname(){
    console.log(surname)
}
printSurname();
// fonksiyonun içerisinden de değişkene ulaşabildik
/* çünkü surname fonksiyonun parantezleri dışında 
yani fonksiyona göre global olarak tanımlandı. */

// surname yerine name değişkenini de çağırabilirdik
// o da bu fonksiyona göre global olarak tanımlandı

// if bloğu kullanarak da erişmek mümkün

if(true){
    console.log(username)
}




/* Local Scopes */ 

/* burda tanımladığımız değişken 
global değişkene göre öncelikli oluyor*/

// örneğin yukarıda username isimli değişken tanımladık
// username = 'Bora' idi.

// yeni bir fonk tanımlayalım.

function localName(){
    var username = 'Furkan';
    console.log(username);
}
localName();
/* localName fonk 'u çağırdığımızda
username değişkenini furkan olarak değiştirdi.

Yani local bir scope oluşturmuş olduk.
Buna function scope da diyebiliyoruz. */

/* func içindeki değişken daha öncelikli old için
burda func içindeki username değişkenini yazdırdı */

// local scope de fonksiyonlar kendi scopelerini oluşturur.


/* Burda fonk icinde tanımlanan degiskenlere 
dısarıdan erisemem */
function localuserName(){
    var username = 'Furkan';
    var age ='20'
    console.log(username,age);
}
localuserName();
// bu şekilde çalışır


// console.log(age);
// bu şekilde yazdırmayı denediğimde hata verir
// çünkü local tanımlandı dışarıdan erişemem

/* block scopes */

var username = 'Ahmet';
var age = 40;

if(true){
    var age = 30;
    console.log('block scope: ',username,age)
}
// local scopes burda da çalışıyor 
// ahmet 30 olarak yazdırdı

/* fakat burda func dan farklı olarak 
dışardan erişmeye çalıştığımızda 30 u yazdırıyor. */

console.log(age);
// 30 yazdırdı.

// burdan da şu sonucu çıkarabiliriz.
// func. lar kendi scopelerini oluşturur.
// blocklar yeni scope oluşturmaz!

// yeni bir block tanımlaması yapalım
if(true){
    var product = 'Topkek';
    let skt = '2024';
    const color = 'Brown';
    console.log('block scope:',product,skt,color);
}

// var ile tanımlandığı icin product a erişebiliyoruz
console.log(product);
// ES6 ile gelen let ve const dışarıdan erişilemiyor
// block scope oluşturuyor
// bunlar hata verir.
// console.log(skt);
// console.log(color);
// istemeden aynı değişkeni kullanmanın önüne geçiyor
// oyüzden let ve const kullanımı daha çok öneriliyor

var i = 1;

for(var i=0;i<10;i++){
    console.log('i: ',i);
}

console.log(i);
/* burda var kulllandığım için
i = 0 dan başladı en son i yi yazdırdığımda
değişkeni 10 olarak değiştirdi */
console.log("-----------------------------");
// bunu let ile yapsaydım global scope açmış olacaktım

var i = 1;

for(let i=0;i<10;i++){
    console.log('i: ',i);
}

console.log(i);
/* for döngüsü local olarak i yi tanımladı
fakat dışarıdan erişmek istediğimde i = 1 olarak kaldı*/