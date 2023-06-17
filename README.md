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

> This is a React project written using React.js, Context API, and hooks. It allows the user to enter and record a vehicle's error detection and keeps a list of these errors.


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
You can find the live demo here :  #

## 🚩 Contents
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages](#-pages)
  * [Terminal Page](#terminal-page)
  * [Login Page](#login-page)
  * [Defect Login Page](#defect-login-page)
  * [Large Font Page](#large-font-page)
  * [Error Listing Page](#error-listing-page)
- [Features](#-features)
  * [Internationalization (i18n)](#internationalization-i18n)
  * [Multi-Language Virtual Keyboard](#multi-language-virtual-keyboard)
  * [UI Blocking](#ui-blocking)
  * [Select Input Component](#select-input-component)
  * [React Hooks](#react-hooks)
  * [Virtualized Table](#virtualized-table)
  * [User Inactive Alert ⚠](#user-inactive-alert-)
  * [Dynamic Tiles](#dynamic-tiles)
  * [Responsive](#responsive)
  * [404 Not Found](#404-not-found)
  * [Dynamic Routes](#dynamic-routes)
  * [Validation with Formic and Yup](#validation-with-formic-and-yup)
  * [Sorting and Filtering on the Defect Listing Page](#sorting-and-filtering-on-the-defect-listing-page)
- [My Experiences and Difficulties](#-my-experiences-and-difficulties)
- [Color Reference](#-color-reference)
- [Browser Support](#-browser-support)
- [Contact](#-contact)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)


## 🗃 Project Structure

```
TOYOTA-32bit-project
├─ README.md
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
   └─ src
      ├─ App.css
      ├─ App.js
      ├─ components
      │  ├─ form
      │  │  ├─ DatePicker.js
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
         ├─ LoginSchema2.js
         └─ Validation.js

```

<p align="right">(<a href="#readme-top">🔝</a>)</p>

<!-- Getting Started -->
## 	🧰 Getting Started

<!-- Prerequisites -->
### ‼️ Prerequisites

This project uses Npm as the package manager.

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

## 💻 Pages

<!-- Terminal Sayfası -->

### Terminal Page

- This is a page that lists all terminals. It is dynamically populated based on the data received from the service. 
- In the top left corner, there is a language switch button. By default, the Turkish language option is selected.

![image](https://user-images.githubusercontent.com/71905780/234992098-2981e948-3ee3-46c1-abc0-f661cbc800ab.png)

### Login Page
* My application starts with a login page upon initial entry.
* With a minimal mock service, it displays alert snackbars to warn about unsuccessful or incorrect login attempts.
* Shift data is dynamically fetched from the service and initially comes with a pre-selected shift, which changes the background color accordingly.
* The terminal list is fetched based on the selected filter, and the terminal list is prominently displayed to the user when the page is first opened.
* The date is always up-to-date and represents the current day.
* ***It features a multilingual virtual keyboard.***
* ***Paths dynamically change based on the selected filter.***

![image](https://user-images.githubusercontent.com/71905780/235005226-8999d4b4-f0cb-4fa4-aa7a-2c02b1307842.png)

### Defect Login Page
* Based on the data received from the service, the boxes on the car are dynamically positioned.
* If the user doesn't perform any action for 80 seconds, a disruptive [alarm](https://www.youtube.com/watch?v=7ejH_BihwFQ&list=PLJ_uDFPrtpfR8OM2QthNB8HJdt4ZXVhmM&index=3) sound is played.
* When a box is clicked and it is blue, it transitions to a lower image.

![image](https://user-images.githubusercontent.com/71905780/235008816-818889a1-04db-4790-9b2d-bb4d172960a1.png)

* After selecting the area where the error is located in the lower image, a list of error types opens dynamically.

![screen-recording-_5_](https://user-images.githubusercontent.com/71905780/236217596-9894a901-0ab5-4e5f-bdef-3b0cd2578678.gif)

* After selecting the error type, the error recording button becomes active.
* Error location selection is made.

![screen-recording-_6_](https://user-images.githubusercontent.com/71905780/236224057-07b14f0c-e43e-43cb-929c-56bee00b203a.gif)

* When the user clicks on the error recording button, a error recording form appears on the screen and the user enters the error information there.
* When the save button is clicked, UI blocking is activated, and the user cannot click the save button again until the recording process is completed. After the recording is finished, the user exits the form and returns to the main page of the error entry screen.
* The user is informed about the successful completion of the process through snackbars.

![screen-recording-_7_](https://user-images.githubusercontent.com/71905780/236227103-69f70695-90cb-447b-8b1d-3bd6f96e2ed2.gif)

### Large Font Page
* It is a screen with a responsive design that displays information about the vehicle and the unresolved errors on it.
* It is the same screen but with a different presentation according to the operating conditions.

![image](https://user-images.githubusercontent.com/71905780/235219940-3ba840c3-2010-4f22-8fa0-e1d1494b70bd.png)

### Error Listing Page

* It is a page where all relevant errors in the shift are listed.
* Errors can be deleted and updated.
* Errors can be sorted, filtered, and updated.
* A large amount of data is efficiently displayed on a single page, allowing users to smoothly scroll through the information.

![image](https://github.com/Metecode/TOYOTA-32bit-project/assets/71905780/38737f96-a372-4449-ab8f-d42716b10b7a)




<p align="right">(<a href="#readme-top">🔝</a>)</p>


## 🤖 Features

### [Internationalization (i18n)](https://github.com/Metecode/TOYOTA-32bit-project/tree/main/toyota-web/src/translation)
* The project supports Turkish, English, German, French, and Russian languages, and it is **suitable for adding more language support.**
* For language change, I have designed a switcher component using the Context API. By using the Context structure, I made all components accessible through a structure provided by parent components, instead of repeatedly rendering the pages. This made the application more efficient and manageable.
* To improve the user experience, I stored the user's selected language preference in  **`Locale Storage`**. This way, it is preserved even when the page is refreshed and can be accessed later on.

![screen-recording](https://user-images.githubusercontent.com/71905780/235325150-2cff0f2d-346b-4f3d-9e89-4a719b1af780.gif)

### [Multi-Language Virtual Keyboard](https://github.com/Metecode/TOYOTA-32bit-project/tree/main/toyota-web/src/components/VirtualKeyboard)
* I added support for a virtual keyboard for users using touchscreen devices.
* The virtual keyboard supports 6 languages: Turkish, Russian, Japanese, English, Czech, and French. Users can change the language by using the button right below the virtual keyboard.
* It features large button designs to accommodate users wearing gloves.

![screen-recording2](https://user-images.githubusercontent.com/71905780/235360052-99d1478f-ed2a-4ac0-b5d0-d89db4989823.gif)

* The virtual keyboard dynamically changes to the numpad type based on the input type.

![screen-recording-_2_](https://user-images.githubusercontent.com/71905780/235362602-650c7e36-4ca6-44d6-a4fe-5f43c1aa02c3.gif)

### [UI Blocking](https://github.com/Metecode/TOYOTA-32bit-project/blob/d4f7690a368158776326f33fe43c0e8c9859cb98/toyota-web/src/pages/ErrorEntry/ErrorEntryPage.js#L281)
* **`UI blocking`** is a technique that prevents other actions from taking place in the user interface until a certain process is completed. This allows the user to observe the progress of the operation and successfully complete it. Therefore, in the error entry page, I used **`UI blocking`** to prevent the user from pressing other buttons repeatedly after saving an error, or to prevent consecutive form submissions during login processes.
* **`UI blocking`** used in the login page..

![screen-recording3](https://user-images.githubusercontent.com/71905780/235374118-c3dae373-ac0e-4ad3-a5de-2e8dc240fc54.gif)

<p align="right">(<a href="#readme-top">🔝</a>)</p>

* **`UI blocking`** I used on the error login page.

![screen-recording-_1_](https://user-images.githubusercontent.com/71905780/235374618-2d1d5503-b460-4dc5-bf74-2cb1f64d087e.gif)

### [Select Input Component](https://github.com/Metecode/TOYOTA-32bit-project/blob/main/toyota-web/src/components/form/Select.js)
* I added scroll up and down buttons to allow users using touchscreen devices to easily scroll through the values of the select input. This helps to alleviate the inconvenience of scrolling on a touchscreen.
* *All functions have been written from scratch. No ready-made packages were used.*
* When creating the style of the select input, I used the [**`material ui`**](https://mui.com/material-ui/react-select/) package.

![screen-recording-_2_](https://user-images.githubusercontent.com/71905780/235376289-c40b5aa8-e902-45d8-b92e-18c7eac0cd81.gif)

### [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
* The reason for choosing **`React Hooks`** is that it allows for easier and more readable code. Writing React applications with functional components using React Hooks is easier and requires less code compared to class components.
* In particular, managing states is easier with **`React Hooks`**. I can define states as variables, making state management more intuitive.
* Another advantage is that it is easier to use lifecycle methods in components. With the **`useEffect()`** function, I was able to utilize lifecycle methods during the mount, update, and unmount phases.

<p align="right">(<a href="#readme-top">🔝</a>)</p>

### [Virtualized Table](https://github.com/Metecode/TOYOTA-32bit-project/blob/main/toyota-web/src/pages/ErrorList.js)
* A **`Virtualized Table`** is capable of efficiently handling a large amount of data. Virtualization helps to address performance issues by rendering only the visible portion of the table.
* Users can smoothly scroll through the table without any lag or performance hiccups.
* For the virtualized table, the [**`material ui`**](https://mui.com/material-ui/react-table/#virtualized-table) library's virtualized table package was used.

![screen-recording](https://user-images.githubusercontent.com/71905780/235377991-8793d457-1d94-4a17-a549-c3d76c79e6c2.gif)

### [User inactive alert ⚠](https://github.com/Metecode/TOYOTA-32bit-project/blob/d4f7690a368158776326f33fe43c0e8c9859cb98/toyota-web/src/pages/ErrorEntry/ErrorEntryPage.js#L108)
* If the user does not perform any action for **80 seconds** on the error entry page, a disruptive alarm sound will play.
* Similarly, on the large font page, **if the user does not perform any action for 80 seconds**, both an alarm sound will play and the background color will change to red.

*For demonstration purposes, the interval has been set to 2 seconds.*

[screen-recording (1).webm](https://user-images.githubusercontent.com/71905780/235378133-47fdcac7-f882-445e-988c-94b213cb0540.webm)

* Appearance in large font page.

[screen-recording (2).webm](https://user-images.githubusercontent.com/71905780/235378260-7b39f917-746b-4db4-881a-4de43f1d2a17.webm)


### [Dynamic Tiles](https://github.com/Metecode/TOYOTA-32bit-project/blob/1026a4b3f50659d9b221caee3a1e427b22457588/toyota-web/src/pages/ErrorEntry/CarMapper.js#L250)
* Dynamic boxes can be created based on the coordinates obtained from the service.
* I accomplished this task using the [**`react-img-mapper`**](https://www.npmjs.com/package/react-img-mapper) package. This package allows for the creation of interactive image maps with dynamically positioned boxes.
* If the boxes are blue, it means they transition to a sub-image. Similarly, the boxes on the sub-image are positioned based on the error coordinates.

![screen-recording-3](https://user-images.githubusercontent.com/71905780/235444370-821dcff6-8e1e-465e-8566-ac56f91af6cf.gif)

### [Responsive](https://github.com/Metecode/TOYOTA-32bit-project/)
* I made an effort to make the error entry and error listing pages as responsive as possible, although it can be challenging to adhere to a responsive design.
* Especially on the large font page, I paid great attention to ensuring responsiveness and adapting to different screen sizes.

![image](https://user-images.githubusercontent.com/71905780/235445748-9e828a5b-1655-48f2-9845-c80cdc73fcb5.png)

* Ipad view of the login page.

![image](https://user-images.githubusercontent.com/71905780/236055346-1f99dc9d-5a6a-4b10-8aa9-cbed7a2a9ac1.png)

### [404 Not Found](https://github.com/Metecode/TOYOTA-32bit-project/)
* The purpose of this page is to provide users with accurate information in order to encourage them to stay on the website and improve its usability.

![image](https://user-images.githubusercontent.com/71905780/235500524-3de6c532-7329-435a-b877-6a9195cd71c8.png)

### [Dynamic Routes](https://github.com/Metecode/TOYOTA-32bit-project/blob/main/toyota-web/src/pages/404.js)
* The paths change dynamically based on the selected terminal from the terminal list.
* The paths are modified step by step according to the data on which the operations will be performed.

![image2](https://user-images.githubusercontent.com/71905780/235504091-9ff542b6-76d0-46fb-9736-ceb7dac56f88.png)

![image](https://user-images.githubusercontent.com/71905780/235504190-bbee31e2-700f-412e-91c9-5b8879a333d1.png)

![image3](https://user-images.githubusercontent.com/71905780/235504411-9d6de2e9-a331-48f1-8889-10d9451189e9.png)

### Validation with Formic and Yup
* When used together, Formik and Yup are utilized to ensure that form fields within Formik are correctly filled. Yup's validation schemas are used to validate the form data.
* By using Formik and Yup together, defects in form operations can be prevented, and it helps to achieve more organized, accurate, and reliable data entry.

*If the user leaves the input field empty on the login page, they will receive the following error message:*

![image](https://user-images.githubusercontent.com/71905780/236072954-efc4d835-6e45-4df1-bdc0-b741ec4c2236.png)

### Sorting and Filtering on the Defect Listing Page
* When clicking on the column headers, sorting and filtering operations are successfully performed.
* Sorting can be done based on the "Reported", "Body", and "Registration Number" columns. Filtering can be done based on the "Body" number.

![screen-recording-_12_](https://user-images.githubusercontent.com/71905780/236704321-57bf1fc7-00df-4c3c-b2a0-a61d85f6c048.gif)

<p align="right">(<a href="#readme-top">🔝</a>)</p>

## 📖 My Experiences and Difficulties
* I faced several challenges throughout this project. I believe that with each commit, I gained new knowledge and skills.
* One of the challenges I encountered was using Formik and **`Material UI`** libraries together, which was initially challenging for me. My knowledge of **`Material UI`** was limited at the beginning, but I learned and progressed along with this project. The **`Material UI`** documentation was sufficient for me during this process, and I found that **`Material UI`** was very helpful in terms of styling.
* In particular, when implementing the virtual keyboard component and ensuring synchronization with the physical keyboard, I put in a lot of effort. I can say that the [**`react-img-mapper`**](https://www.npmjs.com/package/react-img-mapper) library, which I used for the first time, was very helpful, thanks to the support provided in its [**GitHub repository**](https://github.com/hodgef/react-simple-keyboard/issues?q=is%3Aissue+is%3Aclosed). You can find solutions to many issues in the "Issues" section, and if you have a different problem, you can open a new issue.

<p align="right">(<a href="#readme-top">🔝</a>)</p>

<!-- Color Reference -->

## 🎨 Color Reference
* This is the color palette I used in the project.


| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#93BFCF](https://via.placeholder.com/10/93BFCF?text=+) #93BFCF |
| Secondary Color | ![#6096B4](https://via.placeholder.com/10/6096B4?text=+) #6096B4 |
| Accent Color | ![#BDCDD6](https://via.placeholder.com/10/BDCDD6?text=+) #BDCDD6 |
| Light Color | ![#EEE9DA](https://via.placeholder.com/10/EEE9DA?text=+) #EEE9DA |


![Color Hunt Palette 6096b493bfcfbdcdd6eee9da](https://user-images.githubusercontent.com/71905780/235379138-46025a86-cbbd-43ef-8534-2bc02a545991.png)


## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |

<p align="right">(<a href="#readme-top">🔝</a>)</p>

## 🤝 Contact
- İsmail Mete Uçar - i.meteucar@gmail.com
- [![linkedin][linkedin-shield]][linkedin-url]
- Project Link: [https://github.com/Metecode/TOYOTA-32bit-project.git](https://github.com/Metecode/TOYOTA-32bit-project.git)

## 💎 Acknowledgements
Useful resources and documents that I used in my project.
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
