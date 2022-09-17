function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "https://www.rickthor7.my.id/IslamicMenu/", onClick: props.toggleMenu }, "MENU, /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "murrotal", /*#__PURE__*/

    React.createElement("strong", null, "30Juz")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Website"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "murrotal alquran"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "30"), " juz.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "go to murrotal"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Kontak Saya")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Tentang Alquran Online"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Made By Muhammad thoriq"), /*#__PURE__*/
    React.createElement("p", null, "Website murrotal alquran ini dibuat bertujuan khususnya bagi author sendiri untuk memudahkan murajaah Alquran."), /*#__PURE__*/



    React.createElement("p", null, "Semoga dengan adanya website ini, kita dimudahkan untuk menghafal/murajaah alquran agar semakin lancar & barokah")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Tentang Author"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Saya adalah Web Developer."), /*#__PURE__*/
    React.createElement("p", null, "Saya memulai project ini mulai dari tahun 2021 bulan agustus awal dengan tujuan memberi waktu tambahan untuk murajaah AlQuran"), /*#__PURE__*/




    React.createElement("p", null, "Selebihnya tentang saya bisa berkunjung di instagram @iam.rickthor7")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My Socmed."), /*#__PURE__*/
    React.createElement("p", null, "Hanyalah remaja yang suka ngopi tapi berusaha untuk tetap istiqomah dalam mengaji"), /*#__PURE__*/





    React.createElement("p", null, "Selamat menikmati murrotal 30 Juz buatan saya, Semoga bermanfaat dan dapat menambah pahala jariah untuk kita semua."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Daftar Imam"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Dibawah ini adalah list Imam ", /*#__PURE__*/
    React.createElement("u", null, "most"), " yang ada diwebsite ini. Untuk requests bisa menghubungi saya lewat link dibawah",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "http://wa.me/621234397578", target: "_blank", rel: "noopener noreferrer" }, "Whatsapp"), ", juga kritik dan saran saya akan sangat terbuka.")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Syaikh Al-Khusari.",  
      img: 'https://raw.githubusercontent.com/rickthor7/murrotal/main/src/imam/alkhusary.jpg',
      tech: "",
      link: "https://www.rickthor7.my.id/murrotal_alkhusary/",
      repo: "https://www.rickthor7.my.id/murrotal_alkhusary/" }, /*#__PURE__*/

    React.createElement("small", null, "Beliau dilahirkan pada 17 September 1917 di sebuah desa bernama Shubra an-Namlah, Thanta, provinsi Gharbiyyah, Mesir."), /*#__PURE__*/


    React.createElement("p", null, "Bacaannya pelan, tenang, penuh dengan penghayatan. Membuat orang yang mendengarkannya terbawa dalam lantunan ayat-ayat yang dibacanya. Orang yang tak paham artinya pun seakan mampu bisa menghayati makna dan isi pesan bacaan al-Qur'an yang dibacakannya.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Saad Al Ghamidi.",
      img: 'https://raw.githubusercontent.com/rickthor7/murrotal/main/src/imam/saadalghamidi.jpg',
      tech: " ",
      link: "www.rickthor7.my.id/murrotal_alghamidi",
      repo: "www.rickthor7.my.id/murrotal_alghamidi" }, /*#__PURE__*/

    React.createElement("small", null, "Beliau dilahirkan pada tanggal 19 Mei tahun 1967 atau 1387 H di kota Dammam, Mantiqah Syarqiyah. Di seluruh dunia Islam, beliau dikenal sebagai seorang qari’ Al Qur’an."), /*#__PURE__*/


    React.createElement("p", null, "Pada tahun 1990, beliau telah menghafal 30 Juz Al Quran. Bacaan Al Quran beliau sangat mudah dicirikan dengan lantunan suara yang sangat indah. Tahun 1415 dan tahun 1417, ia mendapat gelar Sarjana Muda dari sanad qira’ah diambil dari riwayat Hafsh ‘an Ashim.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Syaikh Ali Jaber.",
      img: 'https://raw.githubusercontent.com/rickthor7/murrotal/main/src/imam/alijaber.png',
      tech: " ",
      link: "www.rickthor7.my.id/murrotal_alijaber",
      repo: "www.rickthor7.my.id/murrotal_alijaber" }, /*#__PURE__*/

    React.createElement("small", null, "Syekh Ali Jaber merupakan salah satu ulama tanah asal Madinah, Arab Saudi. Beliau lahir tanggal 3 Februari 1976 dengan nama Ali Saleh Mohammed Ali Jaber dan tutup usia pada 14 Januari 2021 pada umur 44 tahun di Rumah Sakit Yarsi, Jakarta Pusat."), /*#__PURE__*/
    React.createElement("p", null, "Syek Ali Jaber pernah menjadi juri pada Hafiz Indonesia dan menjadi dai di berbagai stasiun televisi nasional. Selain dakwah, Syekh Ali Jaber juga hadir dalam rangkaian program televisi seperti Hafiz Indonesia, Damai Indonesiaku, dan Kultum Bersama Syekh Ali Jaber. Film pun pernah beliau lakoni, yakni Surga Menanti tahun 2016.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Misyari Rasyed.",
      img: 'https://raw.githubusercontent.com/rickthor7/murrotal/main/src/imam/misyarirasyed.jpg',
      tech: " ",
      link: "www.rickthor7.my.id/murrotal_rsyed",
      repo: "www.rickthor7.my.id/murrotal_rsyed" }, /*#__PURE__*/

    React.createElement("small", null, "Misyari Rasyid Al-'Afasi. Nama lengkapnya Shaikh Mishary Rashid Ghareeb Mohammed Rashid Al-Afasy adalah seorang qari, hafiz dan imam berkebangsaan Kuwait. Beliau banyak dikenal karena resital Al-Quran dan nasyid yang dilantunkannya."), /*#__PURE__*/
    React.createElement("p", null, "Mishary Al Afasy adalah Imam dari Grand Mosque (Kuwait), dan setiap Ramadhan ia memimpin Shalat Taraweh di Masjid ini. Beliau sering memimpin doa Tarawih di UAE dan negara tetangga lainnya di Teluk. Belua memiliki 2 Saluran Ruang khusus dalam pembacaan Al-Qur'an, yang pertama adalah Alafasy TV dan yang kedua adalah Alafasy Q")), /*#__PURE__*/

                        
                        
                        
                        
    React.createElement(Project, {
      title: "As-Sudais.",
      img: 'https://raw.githubusercontent.com/rickthor7/murrotal/main/src/imam/assudais.jpg',
      tech: " ",
      link: "https://www.rickthor7.my.id/murrotal_alijaber/www.rickthor7.my.id/murrotal_sdais",
      repo: "https://www.rickthor7.my.id/murrotal_alijaber/www.rickthor7.my.id/murrotal_sdais" }, /*#__PURE__*/

    React.createElement("small", null, "Ulama yang memiliki nama lengkap Abdurrahman bin Abdul Aziz bin Muhammad as-Sudais ini dikenal luas di Indonesia sebagai seorang pakar tilawah Al-Qur’an. Buktinya, suara beliau sering dijadikan murottal yang diputar karena terkenal dengan suara yang khas dan merdu."), /*#__PURE__*/
    React.createElement("p", null, "Beliau pertama kali diangkat menjadi imam sekaligus khatib di Masjidil Haram pada tahun 1404 Hijriah, pada usia yang masih sangat muda nan belia yakni 22 tahun. Setelahnya menjadi imam shalat pertama kalinya di masjid paling suci bagi ummat Islam tersebut pada 22 Sya’ban 1404 H yang lalu.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "URL Shortener Microservice.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Cortala.jpg',
      tech: "js node css",
      link: "https://cortala.glitch.me/example",
      repo: "https://github.com/yagoestevez/cortala" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, CSS + Bootstrap and Pug."), /*#__PURE__*/
    React.createElement("p", null, "A microservice which takes a raw URL and makes it a short link to make it easy to sent it through the Internet.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Exercise Tracker.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ExerciseTracker.jpg',
      tech: "js vue node css",
      link: "https://yagoestevez-exercise-tracker.glitch.me",
      repo: "https://github.com/yagoestevez/exercise-tracker" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, VueJS + Vue Router and CSS + Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "A service which lets the users save their daily exercise (or anything) into a log for them to check it later.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Bar Chart.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/BarChart.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/wxjmrB/",
      repo: "https://github.com/yagoestevez/fcc-barchart" }, /*#__PURE__*/

    React.createElement("small", null, "Built using CSS, JS and D3.js."), /*#__PURE__*/
    React.createElement("p", null, "A bar chart representing the evolution of the US GDP.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Treemap Diagram.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TreemapDiagram.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/bjZygz/",
      repo: "https://github.com/yagoestevez/fcc-treemap-diagram" }, /*#__PURE__*/

    React.createElement("small", null, "Built using CSS, JS and D3.js."), /*#__PURE__*/
    React.createElement("p", null, "A treemap diagram representing groups of pledges and sales from a particular category.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Choropleth Map.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/ChoroplethMap.jpg',
      tech: "js d3 css",
      link: "https://codepen.io/yagoestevez/full/NBeaWK/",
      repo: "https://github.com/yagoestevez/fcc-choropleth-map" }, /*#__PURE__*/

    React.createElement("small", null, "Built using CSS, JS and D3.js."), /*#__PURE__*/
    React.createElement("p", null, "A choropleth map representing the educational attainment by county in the U.S.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Random Quoting Machine.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/QuotingMachine.jpg',
      tech: "js vue css",
      link: "https://codepen.io/yagoestevez/full/bxgEyd/",
      repo: "https://github.com/yagoestevez/random-quoting-machine" }, /*#__PURE__*/

    React.createElement("small", null, "Built using VueJS, Axios and CSS + Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "A random quoting app which retrieves pictures and quotes from two different APIs.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Calculator.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Calculator.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/ERVONM/",
      repo: "https://github.com/yagoestevez/the-calcoolator" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Pomodoro Timer.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TomateTimer.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/dqJGVa",
      repo: "https://github.com/yagoestevez/tomate-time" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React, CSS and lots of SVG."), /*#__PURE__*/
    React.createElement("p", null, "A cute and animated Pomodoro clock to help the users improve their productivity.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "TicTacToe Game.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/TicTacToe.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/KRevzB/",
      repo: "https://github.com/yagoestevez/TicTacToe" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React, CSS and SVG."), /*#__PURE__*/
    React.createElement("p", null, "A TicTacToe game with a basic AI algorithm made for the legacy front-end projects on FreeCodeCamp.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Twitch Clone.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Twitch.jpg',
      tech: "js vue sass",
      link: "https://codepen.io/yagoestevez/full/xjwVPq/" }, /*#__PURE__*/


    React.createElement("small", null, "Built using VueJS, Axios and Scss."), /*#__PURE__*/
    React.createElement("p", null, "Simple Twitch clone using the new Twitch Helix API and made for the legacy front-end projects on FreeCodeCamp.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Weather App.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg',
      tech: "js vue css",
      link: "https://codepen.io/yagoestevez/full/zWbGmZ/" }, /*#__PURE__*/


    React.createElement("small", null, "Built using VueJS, Axios and CSS."), /*#__PURE__*/
    React.createElement("p", null, "App that present the users with the current local weather for their location.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Tribute.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Tribute.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/aaaOxL/",
      repo: "https://github.com/yagoestevez/tribute-to-aaron-swartz" }, /*#__PURE__*/

    React.createElement("small", null, "Built using vanilla Javascript and Scss."), /*#__PURE__*/
    React.createElement("p", null, "Tribute page to Aaron Swartz, a static website built with SCSS and plain Javascript.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Survey Form.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/SurveyForm.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/bjVgjX/",
      repo: "https://github.com/yagoestevez/membership-form" }, /*#__PURE__*/

    React.createElement("small", null, "Built using vanilla Javascript and Scss."), /*#__PURE__*/
    React.createElement("p", null, "An animated survey form.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Landing Page Example.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/LandingPage.jpg',
      tech: "js sass",
      link: "https://codepen.io/yagoestevez/full/pOBLeK/",
      repo: "https://github.com/yagoestevez/tomate-timer-landing-page" }, /*#__PURE__*/

    React.createElement("small", null, "Built using vanilla Javascript and Scss."), /*#__PURE__*/
    React.createElement("p", null, "A landing page for the Pomodoro Timer I made (shown previously in this section).")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Technical Documentation Page.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/Documentify.jpg',
      tech: "js react css",
      link: "https://codepen.io/yagoestevez/full/QxOLKX/",
      repo: "https://github.com/yagoestevez/documentify" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A technical documentation page made for a little React library I published on NPM."))))));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "web", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "yagoestevez", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
