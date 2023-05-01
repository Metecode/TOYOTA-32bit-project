<h1 align="center">
<a href="https://www.toyota.com.tr/?gclid=CjwKCAjwuqiiBhBtEiwATgvixPLl1Q_fXyls-09rRInypVMja7lWmtl8A94CERrODpaAs9ASb81h6xoCaNQQAvD_BwE&gclsrc=aw.ds"><img src="https://www.freepnglogos.com/uploads/toyota-logo-png/logo-toyota-transparent-19.png" alt="Markdownify" width="600"></a>
<br>
 <a href="https://32bit.com.tr"><img src="https://32bit.com.tr/wp-content/uploads/2019/09/32Bit_TransparentBG_1500x434.png" alt="Markdownify" width="300"></a>
  <br>
  <br>
  Toyota Modernizasyon Projesi
  <br>
</h1>

<a name="readme-top"></a>

> Bir aracın üretimdeki hata tespiti ve kaydı girilmesini sağlayan ve bu hataları listeleyen bir react projesidir.


[![Vscode][Vscode]][Vscode-url]
[![json][json]][json-url]
[![git][git]][git-url]
[![React][React.js]][React-url]
[![react-router][react-router]][react-router-url]
[![react-img-mapper][react-img-mapper-shield]][react-img-mapper-url]
[![react-simple-keyboard][react-simple-keyboard-shield]][react-simple-keyboard-url]
[![formik][formik-shield]][formik-url]
[![i18n][i18n-shield]][i18n-url]
[![Axios][axios-shield]][axios-url]
[![material][material-shield]][material-url]
[![MIT License][license-shield]][license-url]
## Demo
Buradan canlı demoya ulaşabilirsiniz :  https://iharsh234.github.io/WebApp/

## 🚩 İçindekiler
- [Proje Yapısı](#-proje-yapısı)
- [Sayfalar](#-sayfalar)
  * [Terminal Sayfası](#terminal-sayfası)
  * [Giriş Sayfası](#giriş-sayfası)
  * [Hata Giriş Sayfası](#hata-giriş-sayfası)
  * [Büyük Font Sayfası](#büyük-font-sayfası)
  * [Hata Listeleme Sayfası](#hata-listeleme-sayfası)
- [Özellikler](#-özellikler)
  * [Internationalization (i18n)](#internationalization-i18n)
  * [Çoklu Dil Destekli Sanal Klavye](#çoklu-dil-destekli-sanal-klavye)
  * [UI Blocking](#ui-blocking)
  * [Select Input Component](#select-input-component)
  * [React Hooks](#react-hooks)
  * [Virtualized Table](#virtualized-table)
  * [Kullanıcı hareketsiz kaldı uyarısı ⚠](#kullanıcı-hareketsiz-kaldı-uyarısı-)
- [Renk Referansı](#-renk-referansı)
- [Browser Support](#-browser-support)
- [Getting Started](#-getting-started)
- [Contact](#-contact)
- [Teşekkürler](#-teşekkürler)
- [License](#-license)


## 🗃 Proje Yapısı

```
TOYOTA-32bit-project
└─ toyota-web
   ├─ LICENCE
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ assets
   │  │  ├─ img
   │  │  │  ├─ 87897.jpg
   │  │  │  ├─ car.jpg
   │  │  │  └─ cursor.gif
   │  │  └─ sound
   │  │     └─ AlertSirenSound.mp3
   │  ├─ db
   │  │  ├─ 87897.json
   │  │  ├─ defectScreen.json
   │  │  ├─ HAT.json
   │  │  ├─ hataData.json
   │  │  ├─ hataDetay.json
   │  │  ├─ hataDetay2.json
   │  │  ├─ hataListesiData.json
   │  │  ├─ headerData.json
   │  │  ├─ largeFont.json
   │  │  ├─ largeFont2.json
   │  │  ├─ shiftInfo.json
   │  │  ├─ shifts.json
   │  │  └─ terminal.json
   │  ├─ favicon.ico
   │  └─ index.html
   ├─ README.md
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ components
      │  ├─ form
      │  │  ├─ DatePicker.js
      │  │  ├─ form.css
      │  │  ├─ Input.js
      │  │  ├─ InputPassword.js
      │  │  ├─ Select.js
      │  │  └─ Textarea.js
      │  ├─ LangSwitcher
      │  │  ├─ index.css
      │  │  └─ index.js
      │  ├─ PrivateRoute.js
      │  ├─ TerminalTable.js
      │  └─ VirtualKeyboard
      │     ├─ index.css
      │     └─ VirtualKeyboard.js
      ├─ context
      │  ├─ AuthContext.js
      │  ├─ defaultContext.js
      │  └─ index.js
      ├─ fonts
      │  ├─ 404.css
      │  ├─ carMapper.css
      │  ├─ hataGiris.css
      │  └─ hataListesi.css
      ├─ index.js
      ├─ localeStorage.js
      ├─ pages
      │  ├─ 404.js
      │  ├─ Auth
      │  │  ├─ AuthLayout.js
      │  │  ├─ login.css
      │  │  └─ Login.js
      │  ├─ ErrorEntry
      │  │  ├─ CarMapper.js
      │  │  ├─ ErrorEntryPage.js
      │  │  ├─ ErrorHeaderBar.js
      │  │  └─ LargeFont.js
      │  ├─ ErrorList.js
      │  ├─ Terminal.js
      │  └─ TerminalLayout.js
      ├─ routes.js
      ├─ translation
      │  ├─ index.js
      │  ├─ locales.js
      │  ├─ messages
      │  │  ├─ de-DE.js
      │  │  ├─ en-US.js
      │  │  ├─ fr-CA.js
      │  │  ├─ index.js
      │  │  ├─ ru-RU.js
      │  │  └─ tr-TR.js
      │  ├─ provider.js
      │  └─ translate.js
      ├─ utils.js
      └─ validations
         ├─ index.js
         ├─ LoginSchema.js
         └─ Validation.js

```
<p align="right">(<a href="#readme-top">🔝</a>)</p>

## 💻 Sayfalar

<!-- Terminal Sayfası -->

### Terminal Sayfası

- Bütün terminallerin listelendiği sayfadır. Servisten gelen veriye göre dinamik bir şekilde listelenir. 
- Sol üst kısımda ise dil değiştirici butonu vardır. Varsayılan olarak türkçe dil seçeneği seçilidir.

![image](https://user-images.githubusercontent.com/71905780/234992098-2981e948-3ee3-46c1-abc0-f661cbc800ab.png)

### Giriş Sayfası
* Uygulamam ilk girişte giriş sayfası ile başlar.
* Minimal bir mock servisle başarısız veya hatalı bir girişte alert snackbarlar ile uyarı verir.
* Vardiya verileri servisten dinamik bir şekilde başta seçili olarak gelir ve seçilen vardiyaya göre arkaplan rengi değişir.
* Terminal listesi seçilen filtreye göre gelir ve terminal listesi sayfa ilk açıldığında açık bir şekilde kullanıcıyı karşılar.
* Tarih güncel olarak bugünü ele alır.
* ***Çoklu dil destekli sanal klavye vardır*** .
* ***Dinamik bir şekilde seçilen filtreye göre pathler değişir*** .

![image](https://user-images.githubusercontent.com/71905780/235005226-8999d4b4-f0cb-4fa4-aa7a-2c02b1307842.png)

### Hata Giriş Sayfası
* Servisten gelen verilere göre dinamik bir şekilde arabanın üzerindeki kutucuklar konumlandırılır.
* Kullanıcı 80 saniye herhangi bir işlem yapmazsa rahatsız edici bir  [alarm](https://www.youtube.com/watch?v=7ejH_BihwFQ&list=PLJ_uDFPrtpfR8OM2QthNB8HJdt4ZXVhmM&index=3) sesi çalar.
* Tıklanan kutu eğer mavi ise bir alt resme geçer.

![image](https://user-images.githubusercontent.com/71905780/235008816-818889a1-04db-4790-9b2d-bb4d172960a1.png)


### Büyük Font Sayfası
* Responsive bir tasarımla aracın bilgileri ve üzerindeki onaylanmamış hataların gösterildiği ekrandır.
* Çalışma şartlarına göre aynı ekran fakat farklı bir gösterimdir.

![image](https://user-images.githubusercontent.com/71905780/235219940-3ba840c3-2010-4f22-8fa0-e1d1494b70bd.png)

### Hata Listeleme Sayfası

* İlgili olan vardiyadaki tüm hataların listelendiği sayfadır.
* Hatalar silinebilir
* Yüksek sayıda veriyi tek sayfada performanslı bir şekilde gösteriliyor ve kullanici akıcı bir şekilde scroll işlemi yapabilir.

![image](https://user-images.githubusercontent.com/71905780/235316807-1ada2719-6505-4a0c-979e-fa83aca9f380.png)



<p align="right">(<a href="#readme-top">🔝</a>)</p>


## 🤖 Özellikler

### [Internationalization (i18n)](https://github.com/Metecode/TOYOTA-32bit-project/tree/main/toyota-web/src/translation)
* Proje Türkçe, İngilizce, Almanca, Fransızca ve Rusçayı desteklemektedir ve **daha fazla dil desteği oluşturmaya uygundur**.
* Dil değişikliği için **`Contex Api`** ile bir switcher component tasarladım. Context yapısını kullanmamın sebebi tekrar tekrar sayfaları renderlamak yerine üst bileşenler tarafından sağlanan bir yapı üzerinden bütün componentlere erişilebilir hale getirdim. Bu da uygulamanın daha verimli ve yönetilebilir olmasını sağladı.
* Kullanıcı deneyimini iyileştirmek için kullanıcının seçtiği dil tercihini **`Locale Storageda`** sakladım. Böylece sayfa yenilendiğinde bile korunur ve daha sonra bile erişilebilir olur.

![screen-recording](https://user-images.githubusercontent.com/71905780/235325150-2cff0f2d-346b-4f3d-9e89-4a719b1af780.gif)

### [Çoklu Dil Destekli Sanal Klavye](https://github.com/Metecode/TOYOTA-32bit-project/tree/main/toyota-web/src/components/VirtualKeyboard)
* Dokunmatik ekran kullanan kullanıcılar için sanal klavye desteği ekledim.
* Sanal klavyenin Türkçe, Rusça, Japonca, İngilizce, Çekçe ve Fransızca olmak üzere 6 dilde dil desteği vardır. Kullanıcı dil değişikliği için sanal klavyenin hemen altındaki butondan değişiklik yapabilir.
* Eldiven kullanan kullancılar için geniş buton tasarımına sahiptir.

![screen-recording2](https://user-images.githubusercontent.com/71905780/235360052-99d1478f-ed2a-4ac0-b5d0-d89db4989823.gif)

* İnput türüne göre dinamik olarak sanal klavye türü numpad olarak değişir.

![screen-recording-_2_](https://user-images.githubusercontent.com/71905780/235362602-650c7e36-4ca6-44d6-a4fe-5f43c1aa02c3.gif)

### [UI Blocking](https://github.com/Metecode/TOYOTA-32bit-project/blob/d4f7690a368158776326f33fe43c0e8c9859cb98/toyota-web/src/pages/ErrorEntry/ErrorEntryPage.js#L281)
* **`UI blocking`** , kullanıcı arayüzünde gerçekleşen bir işlemin tamamlanana kadar başka işlemin gerçekleşmesini engellemektir. Böylece kullanıcı işlemin durumunu gözlemleyebilir ve başarılı bir şekilde işlemini tamamlayabilir. Bu yüzden hata giriş sayfasında bir hatayı kaydettikten sonra kullanıcın tekrar tekrar başka butonlara basmaması için veya login işlemlerinde ardı ardına form gönderme işlemi yapılmaması için **`UI blocking`** kullandım.
* Login sayfasında kullandığım **`UI blocking`** .

![screen-recording3](https://user-images.githubusercontent.com/71905780/235374118-c3dae373-ac0e-4ad3-a5de-2e8dc240fc54.gif)

<p align="right">(<a href="#readme-top">🔝</a>)</p>

* Hata giriş sayfasında kullandığım **`UI blocking`** .

![screen-recording-_1_](https://user-images.githubusercontent.com/71905780/235374618-2d1d5503-b460-4dc5-bf74-2cb1f64d087e.gif)

### [Select Input Component](https://github.com/Metecode/TOYOTA-32bit-project/blob/main/toyota-web/src/components/form/Select.js)
* Dokunmatik ekran kullanan kullanıcılar için scroll işlemi yapmak zahmetli olabilir. Bu yüzden kullanıcı select inputun valuelarında rahatlıkla aşağı yukarı kaydırabilmesi için scroll up ve down buttonları ekledim.
* Select inputunu oluştururken [**`material ui`**](https://mui.com/material-ui/react-select/) paketini kullandım.

![screen-recording-_2_](https://user-images.githubusercontent.com/71905780/235376289-c40b5aa8-e902-45d8-b92e-18c7eac0cd81.gif)

### [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
* **`React Hooks'u`** tercih etmemin sebebi daha kolay ve daha okunaklı kod yazımına sahip olmasıdır. Class componentlerin yerine, functional componentlerle React uygulamaları yazmak daha kolay ve daha az kod yazımı gerektiriyor.
* Özellikle stateleri yönetmek **`React Hooks`** ile daha kolaydır. Stateleri bir değişkenmiş gibi tanımlayabiliyorum.
* Bir diğer avantajı da componentlerde lifecycle metodlarını kullanmak daha kolaydır. **`useEffect()`** fonksiyonu sayesinde mount, update ve unmount aşamalarında lifecycle metotlarını kullanabildim.

<p align="right">(<a href="#readme-top">🔝</a>)</p>

### [Virtualized Table](https://github.com/Metecode/TOYOTA-32bit-project/blob/main/toyota-web/src/pages/ErrorList.js)
* **`Virtualized Table`** yani sanallaştırılmış tablo yüksek sayıda veriyi kolayca işleyebilir. Sanallaştırma, performans sorunlarına yardımcı olur.
* Kullanıcı hiç takılmadan akıcı bir şekilde scroll işlemlerini yapabilir.
* Sanallaştırılmış tablo için [**`material ui`**](https://mui.com/material-ui/react-table/#virtualized-table) kütüphanesinin virtualized table paketini kullandım.

![screen-recording](https://user-images.githubusercontent.com/71905780/235377991-8793d457-1d94-4a17-a549-c3d76c79e6c2.gif)

### [Kullanıcı hareketsiz kaldı uyarısı ⚠](https://github.com/Metecode/TOYOTA-32bit-project/blob/d4f7690a368158776326f33fe43c0e8c9859cb98/toyota-web/src/pages/ErrorEntry/ErrorEntryPage.js#L108)
* Kullanıcı eğer hata giriş sayfasında **80 saniye boyunca bir işlem yapmazsa rahatsız edici bir alarm sesi çalar**.
* Büyük font sayfasında da aynı şekilde kullanıcı **80 saniye bir işlem yapmazsa hem alarm sesi çalar hem de arkaplan rengi kırmızıya döner**.

*Örnek göstermek amaçlı saniyesi 2 olarak ayarlanmıştır.*

[screen-recording (1).webm](https://user-images.githubusercontent.com/71905780/235378133-47fdcac7-f882-445e-988c-94b213cb0540.webm)

* Büyük font sayfasındaki görünüm.

[screen-recording (2).webm](https://user-images.githubusercontent.com/71905780/235378260-7b39f917-746b-4db4-881a-4de43f1d2a17.webm)


### [Dinamik Kutucuklar](https://github.com/Metecode/TOYOTA-32bit-project/blob/1026a4b3f50659d9b221caee3a1e427b22457588/toyota-web/src/pages/ErrorEntry/CarMapper.js#L250)
* Servisten çekilen koordinatlara göre dinamik bir şekilde kutucuklar oluşturulabilir.
* Bu işlemi [**`react-img-mapper`**](https://www.npmjs.com/package/react-img-mapper) paketini kullanarak yaptım.
* Kutucuklar eğer mavi ise bir alt resme geçer ve yine aynı şekilde alt resmin hata koordinatlarına göre kutucuk konumlandırılır.

![screen-recording-3](https://user-images.githubusercontent.com/71905780/235444370-821dcff6-8e1e-465e-8566-ac56f91af6cf.gif)

### [Responsive Yapı](https://github.com/Metecode/TOYOTA-32bit-project/)
* Hata giriş ve hata listeleme sayfalarında her ne kadar responsive yapıya uymak zor olsada olabildiğince responsive yapmaya çalıştım.
* Özellikle büyük font sayfasında responsive yapıya oldukça dikkat ettim.

![image](https://user-images.githubusercontent.com/71905780/235445748-9e828a5b-1655-48f2-9845-c80cdc73fcb5.png)

<p align="right">(<a href="#readme-top">🔝</a>)</p>

<!-- Color Reference -->
## 🎨 Renk Referansı
* Projede kullandığım renk paletidir.


| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#93BFCF](https://via.placeholder.com/10/93BFCF?text=+) #93BFCF |
| Secondary Color | ![#6096B4](https://via.placeholder.com/10/6096B4?text=+) #6096B4 |
| Accent Color | ![#BDCDD6](https://via.placeholder.com/10/BDCDD6?text=+) #BDCDD6 |
| Text Color | ![#EEE9DA](https://via.placeholder.com/10/EEE9DA?text=+) #EEE9DA |


![Color Hunt Palette 6096b493bfcfbdcdd6eee9da](https://user-images.githubusercontent.com/71905780/235379138-46025a86-cbbd-43ef-8534-2bc02a545991.png)


## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |

<p align="right">(<a href="#readme-top">🔝</a>)</p>

<!-- Getting Started -->
## 	🧰 Getting Started

<!-- Prerequisites -->
### ‼️ Prerequisites

This project uses Npm as package manager.

```bash
 npm install npm@latest -g
```

<!-- Installation -->
### ⚙️ Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
   
<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command.

```bash
  npm test
```

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/Metecode/TOYOTA-32bit-project.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

### Pull Request

Before uploading your PR, run test one last time to check if there are any errors. If it has no errors, commit and then push it!

For more information on PR's steps, please see links in the Contributing section.

<p align="right">(<a href="#readme-top">🔝</a>)</p>

## 🤝 Contact

- İsmail Mete Uçar - i.meteucar@gmail.com
- [![linkedin][linkedin-shield]][linkedin-url]
- Project Link: [https://github.com/Metecode/TOYOTA-32bit-project.git](https://github.com/Metecode/TOYOTA-32bit-project.git)

## 💎 Teşekkürler
Projemde kullandığım yararlı kaynaklar ve dökümanlar.
 - [StackOverFlow](https://stackoverflow.com)
 - [React](https://react.dev)
 - [Tayfun Erbilen](https://github.com/tayfunerbilen)
 - [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [Shields.io](https://shields.io/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)

## 📜 License

This software is licensed under the [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) © [İsmail Mete Uçar](https://github.com/Metecode).



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[google]:https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[react-img-mapper-shield]:https://img.shields.io/npm/v/react-img-mapper?color=yellow&label=react-img-mapper&style=for-the-badge
[react-img-mapper-url]:https://www.npmjs.com/package/react-img-mapper
[react-simple-keyboard-shield]:https://img.shields.io/npm/v/react-simple-keyboard?color=brown&label=react-simple-keyboard&style=for-the-badge
[react-simple-keyboard-url]: https://www.npmjs.com/package/react-simple-keyboard
[formik-shield]:https://img.shields.io/npm/v/formik?color=darkblue&label=formik&style=for-the-badge
[formik-url]: https://www.npmjs.com/package/formik
[i18n-shield]:https://img.shields.io/npm/v/i18next?color=white&label=i18next&style=for-the-badge
[i18n-url]: https://www.npmjs.com/package/i18n
[material-shield]:https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[material-url]: https://www.npmjs.com/package/@mui/material
[axios-shield]:https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[axios-url]: https://www.npmjs.com/package/axios
[react-shield]:https://img.shields.io/npm/v/react?label=react&style=for-the-badge
[react-url]: https://www.npmjs.com/package/react
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mete-uçar-1626101b3/
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vscode]:https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[Vscode-url]:https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white
[html]:https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]:https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white  
[json]:https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white 
[json-url]:https://www.json.org/json-en.html
[git]:https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white
[git-url]:https://git-scm.com
[react-router]:https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]:https://reactrouter.com/en/main
