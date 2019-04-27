<template>
  <aside class="site-sidebar">
    <div class="site-sidebar-inner">
      <a href="/" class="person">
        <div class="person-avatar">
          <img src="../assets/images/squrtle.jpg" alt="" class="avatar">
        </div>
        <div class="person-content">
          <h1 class="person-title">Choi Seungeon</h1>
          <h2 class="person-subtitle">Full-stack Web developer</h2>
        </div>
      </a>
      <nav class="block main-navigation">
        <div class="navigation-extend-bar">
          <div class="social-icons">
            <a href="mailto:chou610@gmail.com" class="button button-icon" title="mail: jacek@jtom.me">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="https://github.com/loyalchoi610" class="button button-icon" title="github: jtomaszewski">
              <i class="fa fa-github-square"></i>
            </a>
          </div>
          <a href="#" class="navigation-extend-button js-extend-main-navigation">
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div class="navigation-extendable">
          <ul>
            <li class=""><a href="./portfolio">Portfolio</a></li>
            <li class=""><a href="./skills-and-offer">Skills &amp; offer</a></li>
            <li class="current"><a href="./contact">Contact me</a></li>
          </ul>
          <ul>
            <!-- <li class=""><a href="/about-me/">About me</a></li> -->
            <!-- <li class=""><a href="/blog">Tech blog</a></li> -->
            <li class=""><a href="/cv/">My CV</a></li>
            <li class=""><a href="/talks/">My talks</a></li>
            <li><a href="https://medium.com/@jtomaszewski" target="_blank">Personal blog</a></li>
          </ul>
        </div>
      </nav>
      <div class="block block-social">
        <div class="block-title">Get in touch</div>
        <div class="block-content">
          <div class="social-icons">
            <a href="mailto:jacek@jtom.me" class="button button-icon" title="mail: chou610@gmail.com">
              <i class="fa fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/jtompl" class="button button-icon" title="linkedin: jtompl">
              <i class="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/jtomaszewski" class="button button-icon" title="github: jtomaszewski">
              <i class="fa fa-github-square"></i>
            </a>
            <a href="https://facebook.com/jtomaszewski" class="button button-icon" title="facebook: jtomaszewski">
              <i class="fa fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/jtompl" class="button button-icon" title="twitter: @jtompl">
              <i class="fa fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="block block-blog">
        <div class="block-title">
          Recently on my blog
        </div>
        <div class="block-content">
          <ul class="posts-list">
            <li>
              <a href="">
                <div class="post-title">Why TypeScript is the best way to write Front-end in 2019</div>
                <div class="post-date">Dec 24, 2018</div>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b">
                <div class="post-title">How to write good, composable and pure components in Angular 2+</div>
                <div class="post-date">Jun 7, 2018</div>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@jtomaszewski/mastering-the-angular-performance-by-dropping-the-magic-of-change-detector-2b605b444b04">
                <div class="post-title">Mastering the Angularper for dropping the magic of Change Detector</div>
                <div class="post-date">May 17, 2018</div>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jtomaszewski/coding-is-not-an-art-its-engineering-e95c2eead1ea">
                <div class="post-title">Code is not art, it’s engineering</div>
                <div class="post-date">Apr 19, 2018</div>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jtomaszewski/keep-your-code-clean-forever-65c71f7f2df">
                <div class="post-title">Keep your code clean forever</div>
                <div class="post-date">Apr 5, 2018</div>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jtomaszewski/your-data-belongs-to-facebook-not-you-798246935b78">
                <div class="post-title">Your data belongs to Facebook, not you</div>
                <div class="post-date">Mar 20, 2018</div>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@jtomaszewski/you-are-not-better-than-anyone-ac5aa57b039e">
                <div class="post-title">"You are not better than anyone..."</div>
                <div class="post-date">Mar 10, 2018</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideComponent'
}
</script>

<style scoped>

</style>
