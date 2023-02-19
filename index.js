// eslint-disable-next-line no-unused-vars
const fenomenler = [
  {
    number: 1,
    profile: "Instagram",
    followers: 539446645,
    posts: 7202,
    platform: "Instagram",
  },
  {
    number: 2,
    profile: "Cristiano Ronaldo",
    followers: 473864939,
    posts: 3338,
    platform: "Instagram",
  },
  {
    number: 3,
    profile: "Kylie",
    followers: 364542529,
    posts: 6935,
    platform: "Instagram",
  },
  {
    number: 4,
    profile: "Leo Messi",
    followers: 355790796,
    posts: 890,
    platform: "Instagram",
  },
  {
    number: 5,
    profile: "Selena Gomez",
    followers: 341579063,
    posts: 1828,
    platform: "Instagram",
  },
  {
    number: 1,
    profile: "Barack Obama",
    followers: 132473746,
    posts: 16563,
    platform: "Twitter",
  },
  {
    number: 2,
    profile: "Justin Biber",
    followers: 114165664,
    posts: 31371,
    platform: "Twitter",
  },
  {
    number: 3,
    profile: "KATY PERRY",
    followers: 108950737,
    posts: 11715,
    platform: "Twitter",
  },
  {
    number: 4,
    profile: "Rihanna",
    followers: 106989611,
    posts: 10632,
    platform: "Twitter",
  },
  {
    number: 5,
    profile: "Elon Musk",
    followers: 102819963,
    posts: 18921,
    platform: "Twitter",
  },
  {
    number: 1,
    profile: "Ninja",
    followers: 18296006,
    posts: "NA",
    platform: "Twitch",
  },
  {
    number: 2,
    profile: "auronplay",
    followers: 13377575,
    posts: "NA",
    platform: "Twitch",
  },
  {
    number: 3,
    profile: "Rubius",
    followers: 12524137,
    posts: "NA",
    platform: "Twitch",
  },
  {
    number: 4,
    profile: "Tfue",
    followers: 11145556,
    posts: "NA",
    platform: "Twitch",
  },
  {
    number: 5,
    profile: "shroud",
    followers: 10244388,
    posts: "NA",
    platform: "Twitch",
  },
  {
    number: 1,
    profile: "charli damelio",
    followers: 141200000,
    posts: 2211,
    platform: "TikTok",
  },
  {
    number: 2,
    profile: "Khabane lame",
    followers: 139700000,
    posts: 1055,
    platform: "TikTok",
  },
  {
    number: 3,
    profile: "Bella Poarch",
    followers: 89900000,
    posts: 470,
    platform: "TikTok",
  },
  {
    number: 4,
    profile: "Addison Rae",
    followers: 87700000,
    posts: 1683,
    platform: "TikTok",
  },
  {
    number: 5,
    profile: "Will Smith",
    followers: 72200000,
    posts: 136,
    platform: "TikTok",
  },
];

/* Görev 1 (otomatik kontrol testi yapılmayacak):
Aşağıdakileri konsolda gösterim (console.log) işlemi gerçekleştirerek, yukarıda verilen fenomenler dizisindeki verilere erişim alıştırması yapın:

(işlev yazmanıza gerek yok) */

//(1) Dizideki ilk fenomen (0. dizin) profil (profile) adı

console.clear();
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 1: objeleribulma");

console.log(fenomenler[0]); //arraydeki bir objeye ulaşmak için
console.log("1. objenin profili: " + fenomenler[0].profile); //arraydeki bir objenin propertysine ulaşmak için
console.log("1. objenin profili: " + fenomenler[0]["profile"]); //arraydeki bir objenin propertysine ulaşmak için
//. notationda iki ayrı kelimeden oluşan bir key i yazamayız.

//(2) Dizideki üçüncü fenomenin (2. dizin) takipçi (followers) sayısı
console.log("3. objenin takipçi sayısı: " + fenomenler[2].followers);

/* Görev 2 (otomatik kontrol testi yapılmayacak):
(işlev yazmanıza gerek yok)
Fenomenler dizisinde bir yazım hatası var 😱 7. sıradaki fenomen 'Justin Bieber' ın soyismi 'Biber' olarak yanlış yazılmış. Bu sorunu düzeltin ve çalışmanızı kontrol etmek için console.log() yapın.
*/

//biber kaçıncı sırada bilmeseydim döngü ile bulabilirdim
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 2: düzeltme");
for (let i = 0; i < fenomenler.length; i++) {
  if (fenomenler[i].profile == "Justin Biber") {
    console.log("Justin kaçıncı indekste: " + i);
    fenomenler[i].profile = "Justin Bieber"; //neden == ile yazınca yapmıyor? Justin Biber yazıyor yine
  }
}

console.log("Biber soyadı düzeltildi:" + fenomenler[6].profile.split(" ")[1]);

// split metoduyla isim soyisimi bölüp [1] yazarak bölünen stringin 2. kısmına ulaşabilirsin.

/*  Görev 3:
Aşağıdaki işlemleri yapmak için indekseGoreFenomen işlevini kullanın:
1. İlk parametre olarak fenomenler dizisini alın,
2. İkinci parametre de ise, dizide istenen feneomene ait indeksi gösteren bir sayıyı alın.
3. `{indeks}. indekste bulunan fenomen: {profile}` şeklinde sonuç döndürün

NOT: DÖNDÜĞÜNÜZ DİZİN YUKARIDAKİ BİÇİMLE EŞLEŞMESİ GEREKİR, YA DA TESTİ GEÇMEYECEKTİR!
ÖRNEK: fenomenler dizisi ve 3 sayısı ile indekseGoreFenomen çağrılırsa, `3. indekste bulunan fenomen: Leo Messi' */

function indekseGoreFenomen(dizi, indeks) {
  return indeks + ". indekste bulunan fenomen: " + dizi[indeks].profile;

  //return `${indeks}. indekste bulunan fenomen: ${dizi[indeks].profile}`;
  //sağa yatık tek tırnak sayesinde metin içindeki değişkenleri belirleyebiliyoruz
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 3: indekseGoreFenomen");
console.log(indekseGoreFenomen(fenomenler, 2));

/*  Görev 4:
Aşağıdakileri yapmak için profilListesi'ni kullanın:
1. fenomen dizisini bir parametreden argüman olarak alın
2. Parametre dizisini kopyalayarak yeni bir dizi oluşturun
3. Yeni dizinin üzerinde dolaşın ve dizinin her bir indeksinde yalnızca fenomenin adına eşit olacak şekilde güncelleyin
🌟 Dönüş ÖRNEĞİ: ["Instagram", "Cristiano Ronaldo", "Kylie"....]
*/

function profilListesi(dizi) {
  let kopyaDizi = [...dizi];

  //neden bu şekilde yapıyoruz da şöyle yapmıyoruz
  //let yeniDizi=dizi;
  //çünkübu şekilde aynı yeri refere ediyorlar. bir kopya oluşturmuyorum. artık bu dziye yenidizi veya dizi olarak ulaşılır.
  //kopyalama yaptığımızda orijinal dizi değişmez.

  for (let i = 0; i < kopyaDizi.length; i++) {
    kopyaDizi[i] = dizi[i].profile;

    //yeni biz dizi tanımlayıp push komutuyla yenidizi[i].profile de yapabilirdin
  }
  return kopyaDizi;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 4: profilListesi");
console.log(profilListesi(fenomenler));

/* Görev 5:
Aşağıdakileri yapmak için fenomenSil'i kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. ikinci parametre olarak istenen dizin(indeks) saysısını argüman olarak alın
3. Parametre dizisinin bir kopyası olan yeni bir dizi oluşturun
4. Kopyalanan diziden istenen indeksteki fenomeni çıkarın
5. Ortaya çıkan diziyi döndürün

ÖRNEK: fenomenSil işlevi fenomenler dizisi ve 0 indeks sayısı ile çağrılırsa, veri kümemizden 'Instagram' kaldırılmış olarak döndürür. */
function fenomenSil(dizi, indeks) {
  let kopyaDizi = [...dizi];
  kopyaDizi.splice(indeks, 1);

  //splice komutu ile arrayden eleman çıkarabilirim veya ekleyebilirim

  return kopyaDizi;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 5: fenomenSil");
console.log(fenomenSil(fenomenler, 0));

/* Görev 6:
Aşağıdakileri yapmak için fenomenEkle'i kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. İKİNCİ, ÜÇÜNCÜ, DÖRDÜNCÜ, BEŞİNCİ ve ALTINCI parametre olarak sırasıyla bir sırano (number), bir profil ismi (profile), takipçi sayısı (followers), gönderim sayısı  (posts) ve bir platform adı (platform) alın.
3. fenomenler dizisini bir kopyasını oluşturun.
4. Aşağıdaki formatta bir nesne oluşturun:
  {
    "number": 6,
    "profile": "Workintech",
    "followers": 10000000,
    "posts": 2022,
    "platform": "Instagram"
  }
5. Yeni oluşturulan nesneyi kopyalanan diziye ekleyin, ardından kopyalanan diziyi döndürün

ÖRNEK: fenomenEkle(fenomenler, 6, "Workintech", 10000000, 2022, "Instagram") çağrıldığında dizinin sonuna yukarıdaki nesne en sona eklenerek yeni fenomenler dizisini döndürmelidir. */

function fenomenEkle(
  dizi,
  sira,
  isim,
  takipciSayisi,
  gonderimSayisi,
  platformu
) {
  let kopyaDizi = [...dizi];

  let yeniNesne = {
    number: sira,
    profile: isim,
    followers: takipciSayisi,
    posts: gonderimSayisi,
    platform: platformu,
  };
  //şu şekilde de nesneyi oluşturabilirdin
  // let yeninesne={};
  //yeninesne.number=sira;....
  //Veya yeninesne.["number"]=sira;...

  kopyaDizi.push(yeniNesne);
  return kopyaDizi;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 6: fenomenEkle");
console.log(
  fenomenEkle(fenomenler, 6, "Workintech", 10000000, 2022, "Instagram")
);

/* Görev 7:
Aşağıdakileri yapmak için enFenomenler'yi kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. Alınan diziden yüzmilyon'dan (100000000) fazla takipçisi olan fenomenlerin adlarını içeren bir dizi döndürün.

ÖRNEK: enFenomenler(fenomenler) çağrıldığında sonuç olarak ["Instagram", "Cristiano Ronaldo", ... "Khabane lame"] dönemelidir
*/

function enFenomenler(dizi) {
  let fazlaTakipciliFenomenler = [];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i].followers > 100000000) {
      fazlaTakipciliFenomenler.push(dizi[i].profile);
    }
  }
  return fazlaTakipciliFenomenler;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 7: enFenomenler");

console.log(enFenomenler(fenomenler));

/* Görev 8:
Aşağıdakileri yapmak için fenomenGonderimSayisi'nı kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. ikinci parametre olarak fenomen profil adını (profile) alın
3. Fenomenin gönderim(posts) sayısını döndürün

ÖRNEK: fenomenGonderimSayisi(fenomenler, 'Will Smith') çağrıldığında "136" dönmelidir
*/

function fenomenGonderimSayisi(dizi, ad) {
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i].profile == ad) {
      //neden tek = yapınca olmuyor? tek yaparsan hep true algılar. ilk değeri yazar ve çıkar
      return dizi[i].posts;
      //return ü for döngüsünün içinde tanımlayarak işlem sayısını azaltıyoruz. true olduğunda bir kere dönüyor ve bitiyor
    }
  }
  return "aradığınız bulunamadı";
  //iki return kullanabilirsin
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 8: fenomenGonderimSayisi");
console.log(
  "Will Smith'in gönderi sayısı: " +
    fenomenGonderimSayisi(fenomenler, "Will Smith")
);

/* Görev 9:
Aşağıdakileri yapmak için platformaGoreCokGonderiYapanFenomen'ni kullanın:
1. ilk parametre olarak fenomenler dizisini alın
2. ikinci parametre olarak platform adını alın
3. Verilen platform da en çok gönderi yapan fenomen adını döndürün

Not: Gönderi sayısı belli olmayan (NA) hesaba katmayın.

Örnek: platformaGoreCokGonderiYapanFenomen(fenomenler, 'TikTok') çağrıldığında "charli damelio" dönmelidir
*/

function platformaGoreCokGonderiYapanFenomen(dizi, platf) {
  let MaxDeger = 0;
  let fenomen = "";
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i]["posts"] !== "NA" && dizi[i]["platform"] == platf) {
      if (dizi[i]["posts"] > MaxDeger) {
        MaxDeger = dizi[i]["posts"];
        fenomen = dizi[i]["profile"];
      }
    }
  }
  return fenomen;
}
console.log(
  "-------------------------------------------------------------------"
);
console.log("Görev 9: platformaGoreCokGonderiYapanFenomen");
console.log(
  "Instagram:",
  platformaGoreCokGonderiYapanFenomen(fenomenler, "Instagram")
);
console.log(
  "Twitter:",
  platformaGoreCokGonderiYapanFenomen(fenomenler, "Twitter")
);
console.log(
  "Twitch:",
  platformaGoreCokGonderiYapanFenomen(fenomenler, "Twitch")
);
console.log(
  "TikTok:",
  platformaGoreCokGonderiYapanFenomen(fenomenler, "TikTok")
);

function saglama(dizi, key1, key2, key3) {
  let newarray = [];
  for (let i = 0; i < dizi.length; i++) {
    newarray.push(dizi[i][key1] + ", " + dizi[i][key2] + ":" + dizi[i][key3]);
  }
  return newarray;
}

console.log(saglama(fenomenler, "platform", "profile", "posts"));

/* ***** GÖREVLERİN SONU ***** */

/*Bu satırdan sonra koda dokunmayın! */
function sa() {
  console.log("çalışıyor");
  return "as";
}
sa();
/*Bu satırdan sonra koda dokunmayın! */
module.exports = {
  sa,
  indekseGoreFenomen,
  profilListesi,
  fenomenSil,
  fenomenEkle,
  enFenomenler,
  fenomenGonderimSayisi,
  platformaGoreCokGonderiYapanFenomen,
};
