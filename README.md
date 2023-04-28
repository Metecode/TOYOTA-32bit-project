<h1 align="center">
<a href="https://www.toyota.com.tr/?gclid=CjwKCAjwuqiiBhBtEiwATgvixPLl1Q_fXyls-09rRInypVMja7lWmtl8A94CERrODpaAs9ASb81h6xoCaNQQAvD_BwE&gclsrc=aw.ds"><img src="https://www.freepnglogos.com/uploads/toyota-logo-png/logo-toyota-transparent-19.png" alt="Markdownify" width="600"></a>
<br>
 <a href="https://32bit.com.tr"><img src="https://32bit.com.tr/wp-content/uploads/2019/09/32Bit_TransparentBG_1500x434.png" alt="Markdownify" width="300"></a>
  <br>
  <br>
  Toyota Modernizasyon Projesi
  <br>
</h1>

> Bir aracın üretimdeki hata tespiti ve kaydı girilmesini sağlayan ve bu hataları listeleyen bir react projesidir.


[![react-img-mapper][react-img-mapper-shield]][react-img-mapper-url]
[![react-simple-keyboard][react-simple-keyboard-shield]][react-simple-keyboard-url]
[![formik][formik-shield]][formik-url]
[![i18n][i18n-shield]][i18n-url]
[![React][React.js]][React-url]
[![Axios][axios-shield]][axios-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
## Demo
Buradan canlı demoya ulaşabilirsiniz :  https://iharsh234.github.io/WebApp/

## 🚩 İçindekiler

- [Sayfalar](#-sayfalar)
- [Features](#-features)
- [Examples](#-examples)
- [Browser Support](#-browser-support)
- [Pull Request Steps](#-pull-request-steps)
- [Contributing](#-contributing)
- [TOAST UI Family](#-toast-ui-family)
- [Used By](#-used-by)
- [License](#-license)


## 💻 Sayfalar

### Terminal Sayfası

* Bütün terminallerin listelendiği sayfadır. Servisten gelen veriye göre dinamik bir şekilde listelenir. 
* Sol üst kısımda ise dil değiştirici butonu vardır. Varsayılan olarak türkçe dil seçeneği seçilidir.

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
*
*
*

![image](https://user-images.githubusercontent.com/71905780/235219940-3ba840c3-2010-4f22-8fa0-e1d1494b70bd.png)

### Productive Markdown Mode

![markdown](https://user-images.githubusercontent.com/37766175/121464762-71e2fc80-c9ef-11eb-9a0a-7b06e08d3ccb.png)

**CommonMark + GFM Specifications**

Today *CommonMark* is the de-facto *Markdown* standard. *GFM (GitHub Flavored Markdown)* is another popular specification based on *CommonMark* - maintained by *GitHub*, which is the *Markdown* mostly used. TOAST UI Editor follows both [*CommonMark*](http://commonmark.org/) and [*GFM*](https://github.github.com/gfm/) specifications. Write documents with ease using productive tools provided by TOAST UI Editor and you can easily open the produced document wherever the specifications are supported.

* **Live Preview** : Edit Markdown while keeping an eye on the rendered HTML. Your edits will be applied immediately.
* **Scroll Sync** : Synchronous scrolling between Markdown and Preview. You don't need to scroll through each one separately.
* **Syntax Highlight** : You can check broken Markdown syntax immediately.

### Easy WYSIWYG Mode

![wysiwyg](https://user-images.githubusercontent.com/37766175/121808381-251f5000-cc93-11eb-8c47-4f5a809de2b3.png)

* **Table** : Through the context menu of the table, you can add or delete columns or rows of the table, and you can also arrange text in cells.
* **Custom Block Editor** : The custom block area can be edited through the internal editor.
* **Copy and Paste** : Paste anything from browser, screenshot, excel, powerpoint, etc.

### UI
* **Toolbar** : Through the toolbar, you can style or add elements to the document you are editing.
![UI](https://user-images.githubusercontent.com/37766175/121808231-767b0f80-cc92-11eb-82a0-433123746982.png)

* **Dark Theme** : You can use the dark theme.
![UI](https://user-images.githubusercontent.com/37766175/121808649-8136a400-cc94-11eb-8674-812e170ccab5.png)

### Use of Various Extended Functions - Plugins

![plugin](https://user-images.githubusercontent.com/37766175/121808323-d8d41000-cc92-11eb-9117-b92a435c9b43.png)

CommonMark and GFM are great, but we often need more abstraction. The TOAST UI Editor comes with powerful **Plugins** in compliance with the Markdown syntax.

**Five basic plugins** are provided as follows, and can be downloaded and used with npm.

* [**`chart`**](https://github.com/nhn/tui.editor/tree/master/plugins/chart) : A code block marked as a 'chart' will render [TOAST UI Chart](https://github.com/nhn/tui.chart).
* [**`code-syntax-highlight`**](https://github.com/nhn/tui.editor/tree/master/plugins/code-syntax-highlight) : Highlight the code block area corresponding to the language provided by [Prism.js](https://prismjs.com/).
* [**`color-syntax`**](https://github.com/nhn/tui.editor/tree/master/plugins/color-syntax) : 
Using [TOAST UI ColorPicker](https://github.com/nhn/tui.color-picker), you can change the color of the editing text with the GUI.
* [**`table-merged-cell`**](https://github.com/nhn/tui.editor/tree/master/plugins/table-merged-cell) : 
You can merge columns of the table header and body area.
* [**`uml`**](https://github.com/nhn/tui.editor/tree/master/plugins/uml) : A code block marked as an 'uml' will render [UML diagrams](http://plantuml.com/screenshot).

## 🎨 Features

* [Viewer](https://github.com/nhn/tui.editor/tree/master/docs/en/viewer.md) : Supports a mode to display only markdown data without an editing area.
* [Internationalization (i18n)](https://github.com/nhn/tui.editor/tree/master/docs/en/i18n.md) : Supports English, Dutch, Korean, Japanese, Chinese, Spanish, German, Russian, French, Ukrainian, Turkish, Finnish, Czech, Arabic, Polish, Galician, Swedish, Italian, Norwegian, Croatian + language and you can extend.
* [Widget](https://github.com/nhn/tui.editor/tree/master/docs/en/widget.md) : This feature allows you to configure the rules that replaces the string matching to a specific `RegExp` with the widget node.
* [Custom Block](https://github.com/nhn/tui.editor/tree/master/docs/en/custom-block.md) : Nodes not supported by Markdown can be defined through custom block. You can display the node what you want through writing the parsing logic with custom block.

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
[material-shield]:https://img.shields.io/npm/v/@mui/material?color=red&label=Material-Ui&style=for-the-badge
[material-url]: https://www.npmjs.com/package/@mui/material
[axios-shield]:https://img.shields.io/npm/v/axios?color=purple&label=Axios&style=for-the-badge
[axios-url]: https://www.npmjs.com/package/axios
[react-shield]:https://img.shields.io/npm/v/react?label=react&style=for-the-badge
[react-url]: https://www.npmjs.com/package/react
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
