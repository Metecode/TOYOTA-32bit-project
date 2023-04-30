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
[![LinkedIn][linkedin-shield]][linkedin-url]
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
- [Examples](#-examples)
- [Browser Support](#-browser-support)
- [Pull Request Steps](#-pull-request-steps)
- [Contributing](#-contributing)
- [TOAST UI Family](#-toast-ui-family)
- [Used By](#-used-by)
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


## 🎨 Özellikler

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

### [UI Blocking](https://github.com/Metecode/TOYOTA-32bit-project/tree/main/toyota-web/src/components/VirtualKeyboard)
*

## 🐾 Examples

* [Basic](https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic)
* [Viewer](https://nhn.github.io/tui.editor/latest/tutorial-example04-viewer)
* [Using All Plugins](https://nhn.github.io/tui.editor/latest/tutorial-example12-editor-with-all-plugins)
* [Creating the User's Plugin](https://nhn.github.io/tui.editor/latest/tutorial-example13-creating-plugin)
* [Customizing the Toobar Buttons](https://nhn.github.io/tui.editor/latest/tutorial-example15-customizing-toolbar-buttons)
* [Internationalization (i18n)](https://nhn.github.io/tui.editor/latest/tutorial-example16-i18n)

Here are more [examples](https://nhn.github.io/tui.editor/latest/tutorial-example01-editor-basic) and play with TOAST UI Editor!


## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |


## 🔧 Pull Request Steps

TOAST UI products are open source, so you can create a pull request(PR) after you fix issues. Run npm scripts and develop yourself with the following process.

### Setup

Fork `main` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

```sh
$ git clone https://github.com/{your-personal-repo}/tui.editor.git
$ npm install
$ npm run build toastmark
$ npm run test editor
```

> TOAST UI Editor uses [npm workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces/), so you need to set the environment based on [npm7](https://github.blog/2021-02-02-npm-7-is-now-generally-available/). If subversion is used, dependencies must be installed by moving direct paths per package.

### Develop

You can see your code reflected as soon as you save the code by running a server. Don't miss adding test cases and then make green rights.

#### Run snowpack-dev-server
[snowpack](https://www.snowpack.dev/) allows you to run a development server without bundling.

``` sh
$ npm run serve editor
```

#### Run webpack-dev-server
If testing of legacy browsers is required, the development server can still be run using a [webpack](https://webpack.js.org/).

``` sh
$ npm run serve:ie editor
```

#### Run test

``` sh
$ npm test editor
```

### Pull Request

Before uploading your PR, run test one last time to check if there are any errors. If it has no errors, commit and then push it!

For more information on PR's steps, please see links in the Contributing section.

## 💬 Contributing

* [Code of Conduct](https://github.com/nhn/tui.editor/blob/master/CODE_OF_CONDUCT.md)
* [Contributing Guideline](https://github.com/nhn/tui.editor/blob/master/CONTRIBUTING.md)
* [Commit Convention](https://github.com/nhn/tui.editor/blob/master/docs/COMMIT_MESSAGE_CONVENTION.md)
* [Issue Guidelines](https://github.com/nhn/tui.editor/tree/master/.github/ISSUE_TEMPLATE)


## 🍞 TOAST UI Family

- [TOAST UI Calendar](https://github.com/nhn/tui.calendar)
- [TOAST UI Chart](https://github.com/nhn/tui.chart)
- [TOAST UI Grid](https://github.com/nhn/tui.grid)
- [TOAST UI Image Editor](https://github.com/nhn/tui.image-editor)
- [TOAST UI Components](https://github.com/nhn)


## 🚀 Used By

* [NHN Dooray! - Collaboration Service (Project, Messenger, Mail, Calendar, Drive, Wiki, Contacts)](https://dooray.com)
* [UNOTES - Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=ryanmcalister.Unotes)


## 📜 License

This software is licensed under the [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) © [NHN Cloud](https://github.com/nhn).



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

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
[linkedin-url]: https://linkedin.com/in/othneildrew
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
