// switch statemens

// koşullar fazlaysa switch yapısı daha mantıklı

let category = 'telephone';

switch(category){
    case 'telephone':
        console.log('telephone category');
    break;

    case 'computer':
        console.log('computer category');
        break;
        
    default:
        console.log('wrong category');
    // hiçbir case gerçekleşmezse default çalışır
    // telephone kategorisi olduğu için bu koşul sağlandı
    // her case'den sonra break koyuyoruz.


let day;
// console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 0:
        day = 'Pazar';
        break;

    case 1:
        day = 'Pazartesi';
        break;

    case 2:
        day = 'Salı';
        break;

    case 3:
        day = 'Çarşamba';
        break;

    case 4:
        day = 'Perşembe';
        break;

    case 5:
        day = 'Cuma';
        break;

    case 6:
        day = 'Cumartesi';
        break;
}

console.log(`Bugun ${day}, iyi günler dilerim.`);


let day1;
// console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 0:
    case 6:
        day1 = 'Hafta sonu';
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day1 = 'Hafta ici';
        break;
}

console.log(`Bugun ${day1}, iyi günler dilerim.`)


const age = 19;
const name = 'Bora'


switch(true){
    case (age > 0 && age < 14):
        console.log(`${name} is a children`);    
    break;

    case (age >=14 && age <=18):
        console.log(`${name} is a teenager`);
    break;

    default:
        console.log(`${name} is a adult`);
}
