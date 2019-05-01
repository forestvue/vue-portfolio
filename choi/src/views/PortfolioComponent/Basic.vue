<template>
  <div class="main-section portfolio-section">
    <h1 class="main-title">Portfolio</h1>

    <p>See my works below. Unless stated otherwise in their description, <strong>not only my efforts were put but also my team had done lots of things</strong></p>
    <div class="timeline portfolio-timeline">
      <ul>
        <li class="timeline_element timeline_element--now project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">Now</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <div class="project-description">
                <strong>Busy studying for job interview until April 2019,  then focusing on
                  web service project & major study.</strong><br>
                Looking for full-stack dev position with standard development environment<br>
                <router-link to="/contact">Contact me</router-link>. I will answer you in ~24 hours.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline_element timeline_element--now project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2019 Feb - 2019 Apr</time>
          </div>

          <div class="timeline_element-contents">
            <div class="project-text">
              <div class="project-description">
                During this time I took a break from university and instead decided to join algorithm and interview-related study.
                in order to imporve my programming skills, joined group study in Gangnam, presenting to others what i solved problem that was given last week.
                The study is taken two days a week and <strong>eventually passed samsung electronics s/w certificate test degree A+</strong> in April.
              </div>
            </div>
            <div class="project-image emp">
              <img src="../../static/images/samsung-cert.png"
                   alt="Hy3d">
            </div>
          </div>
        </li>
        <li class="timeline_element timeline_element--now project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2019 Jan - 2019 Feb</time>
          </div>

          <div class="timeline_element-contents">
            <div class="project-text">
              <div class="project-description">
                I took <strong>professional algorithm offline courses from samsung SDS.</strong> In this class, I focused on <strong>minimizing time complexity
                for solving problems with insane technics such as two pointers, dynamic programming, floyd-warshall, dijikstra, segment tree</strong>.
              </div>
            </div>
          </div>
        </li>
        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2018 Jun- 2018 Aug</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="/hy3d-smart-distribution" class="project-link">
                <div class="project-title">hy3d-smart-distribution</div>
                <div class="project-subtitle">Let your villegers experience electric pole on the ground </div>
              </router-link>
              <div class="project-description"><p><strong>Hy3d-smart-distribution/api-server is a web management platform
                that handles electric pole AR model for customers-in-need. It serves as : </strong></p>
                <ul>
                  <li>
                    dashboard for managing companies that purchased the model
                  </li>
                  <li>
                    api-service reponsible for communication between database and client AR application.
                  </li>
                </ul>
              </div>
              <a href="https://github.com/hy3d-smart-distribution/api-server" class="project-readmore button button-red">
                <i class="fa fa-github fa-2x " aria-hidden="true"></i>View on Github
              </a>

              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://expressjs.com/" rel="nofollow" target="_blank">Express-js</a></li>
                  <li><a href="https://nodejs.org" rel="nofollow" target="_blank">Node.js</a></li>
                </ul>
              </div>
            </div>
            <div class="project-image">
              <img src="/generated/images/portfolio/tripsomnia/marketplace1-800x568-df1d4f.2a3a0a68.png"
                   alt="Hy3d">
            </div>
          </div>
        </li>
        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2018 Jul</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="/namyang-minus-z" class="project-link">
                <div class="project-title">NamYang-MinusZ</div>
                <div class="project-subtitle">Smart smoke detector</div>
              </router-link>
              <div class="project-description"><p><strong>NamYang-MinusZ is an organized team in Namyang-ju city hackathon 2018</strong></p>
                <p>In this competetion, our team's goal was to make bus monitoring system that prevents smokers on the bus stop.
                  Knowing that cigarettes producing carbon monoxide(CO), <strong>I took a client-side and implemented program that detects CO and sent data to server.
                  </strong></p>
                <ol>
                  <li>measure CO concentration from MQ-7 module</li>
                  <li>wraps data with json then send it to api-server by making httprequest using wifiClient library</li>
                </ol>
              </div>
              <a href="https://github.com/NamYang-MinusZ" class="project-readmore button button-red">
                <i class="fa fa-github fa-2x " aria-hidden="true"></i>View on Github
              </a>
              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://www.arduino.cc/" rel="nofollow" target="_blank">Arduino</a></li>
                </ul>
              </div>
            </div>
            <div class="project-image">
              <a href="/namyang-minus-z">
                <img src="../../static/images/namyang_1.jpg" alt="Namyang">
              </a>
            </div>
            <div class="project-image">
              <a href="/namyang-minus-z">
                <img src="../../static/images/namyang_2.jpg" alt="Namyang">
              </a>
            </div>

          </div>
        </li>
        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2018 Jun</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="/BeatlesCode" class="project-link">
                <div class="project-title">BeatlesCode</div>
                <div class="project-subtitle">Play with auto-generated music-chord you wished</div>
              </router-link>
              <div class="project-description"><p><strong>BeatlesCode is an organized team in Openhack 2018</strong></p>
                <p>This open-source web platform provides audio chord extraction from backend through chord-recognition-AI and playing with extacted notes
                  <strong>In this project i implemented front-end pages that supports: </strong></p>
                <ol>
                  <li>Audio upload and BPM(Beat Per Minite) detection</li>
                  <li>Coverts returned JSON chord file into list of notes</li>
                </ol>
              </div>
              <a href="https://github.com/BeatlesCode" class="project-readmore button button-red">
                <i class="fa fa-github fa-2x " aria-hidden="true"></i>View on Github
              </a>
              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://jquery.com/" rel="nofollow" target="_blank">JQuery</a></li>
                  <li><a href="https://developer.mozilla.org/en/docs/Web/API/Web_Audio_API" rel="nofollow" target="_blank">Web Audio API</a></li>
                </ul>
              </div>
            </div>
            <div class="project-image">
              <router-link to="/BeatlesCode">
                <img src="../../static/images/beatlescode.jpg" alt="BeatlesCode">
              </router-link>
            </div>

          </div>
        </li>
        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2018 May - 2018 Sep</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="/Boostcourse-ace-2th" class="project-link">
                <div class="project-title">Boostcourse ace 2th</div>
                <div class="project-subtitle">
                  web developer scholarship program from NAVER CONNECT foundation.
                </div>
              </router-link>
              <div class="project-description"><p> This full-stack web developer course foucused on : </p>
                <ul>
                  <li>providing online lecture for learning html&css maven, servelet & jsp, spring framework, javascript and its libraries </li>
                  <li>project assignment to be submitted and reviewed by professional web developers in work</li>
                  <li>opening reviewers Q&A day <strong>where i learned hashmap approaches retrieving data from two tables that was on M:N relationship</strong></li>
                </ul>
              </div>
              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://spring.io" rel="nofollow" target="_blank">Spring Framework</a></li>
                </ul>
              </div>
            </div>
            <div class="project-image">
              <img src="../../static/images/boostcourse.png"
                   alt="boostcourse">
            </div>
          </div>
        </li>
        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2017 Sep - 2017 Nov</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="portfolio/Alpa-web" class="project-link">
                <div class="project-title">ALPA-WEB</div>
                <div class="project-subtitle"> students union & academic society website for college of computing in hanang university</div>
              </router-link>
              <div class="project-description"><p>This web service use nebular web template and has following features : </p>

                <ul>
                  <li>communication with firebase to fetch data, which means no manual backend infrastructure</li>
                  <li>budgets spending history</li>
                  <li>members management service for student union and academic socities </li>
                </ul>
                <Strong>As leading developer, I analyzed Nebular web template while going through Angular documentation then helped
                  my teammate understand and modify project structure.</Strong>
              </div>
              <router-link to="/CodeIgniter-web-service" class="project-readmore button button-red">
                <i class="fa fa-github fa-2x " aria-hidden="true"></i>View on Github
              </router-link>

              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://firebase.google.com/" rel="nofollow" target="_blank">Firebase</a></li>
                  <li><a href="https://angular.io/" rel="nofollow" target="_blank">Angular</a></li>
                  <li><a href="https://getbootstrap.com/" rel="nofollow" target="_blank">Bootstrap</a></li>
                  <li><a href="https://github.com/akveo/nebular" rel="nofollow" target="_blank">Nebular</a></li>
                </ul>
              </div>
            </div>

            <div class="project-image">
              <router-link to="/Alpa-web">
                <img src="/generated/images/portfolio/gulliver/gulliver-800x568-591cb5.cac17535.png" alt="AlPA-WEB">
              </router-link>
            </div>

          </div>
        </li>
        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2017 Jun - 2017 July</time>
          </div>

          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="/CodeIgniter-web-service" class="project-link">
                <div class="project-title">CodeIgniter-web-service</div>
                <div class="project-subtitle">Simple web service using mvc architecture in php and vanilla javascript</div>
              </router-link>
              <div class="project-description"><p>It provides :</p>
                <ul>
                  <li>custom image slider on home page</li>
                  <li>WYSIWYG editor</li>
                  <li>Email authentication service</li>
                </ul>
              </div>

              <a href="https://github.com/Loyalchoi610/Codeigniter-web-service" class="project-readmore button button-red">
                <i class="fa fa-github fa-2x " aria-hidden="true"></i>View on Github
              </a>
              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://codeigniter.com/" rel="nofollow" target="_blank">Codeigniter</a></li>
                </ul>
              </div>
            </div>

            <div class="project-image">
              <router-link to="/CodeIgniter-web-service">
                <img src="/generated/images/portfolio/reservise/screen-800x568-bc2a25.27b568ea.png" alt="Codeigniter web servuce">
              </router-link>
            </div>

          </div>
        </li>

        <li class="timeline_element project">
          <div class="timeline_element-date">
            <time class="timeline_element-date-text">2016 dec - 2017 Feb</time>
          </div>
          <div class="timeline_element-contents">
            <div class="project-text">
              <router-link to="/hycube-web-service" class="project-link">
                <div class="project-title">hycube-web-service</div>
                <div class="project-subtitle">community web service for information security institute of hanyang university</div>
              </router-link>
              <div class="project-description"><p>This basic community website use gentella allows you to :</p>
                <ul>
                  <li>write in forum section and discuss with collegues</li>
                  <li>member read/write privilege management</li>
                </ul>
              </div>
              <a href="https://github.com/ColorlibHQ/gentelella" class="project-readmore button button-red">
                <i class="fa fa-github fa-2x " aria-hidden="true"></i>View on Github
              </a>
              <div class="project-technologies">
                <div class="technologies-title">Technologies</div>
                <ul class="tech-tags">
                  <li><a href="https://www.php.net/" rel="nofollow" target="_blank">Php</a></li>
                  <li><a href="https://getbootstrap.com/" rel="nofollow" target="_blank">Bootstrap</a></li>
                  <li><a href="https://jquery.com/" rel="nofollow" target="_blank">JQuery</a></li>
                  <li><a href="https://github.com/ColorlibHQ/gentelella" rel="nofollow" target="_blank">Gentellela</a></li>
                </ul>
              </div>
            </div>

            <div class="project-image">
              <router-link to="/hycube-web-service">
                <img src="/generated/images/portfolio/gorillafm/gorillafm-new-800x568-3e9561.7f20cccf.png"
                     alt="hycube-project">
              </router-link>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basic'
}
</script>

<style scoped>

</style>
