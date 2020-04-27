<template>
  <footer id="Footer" class="footer-container">
    <nav class="footer-item footer-nav">
      <ul>
        <li>
          <img src="@/assets/logo-light.svg" alt="" />
        </li>
        <li>
          <img
            src="@/assets/icon-phone.svg"
            alt="phone"
            style="margin-right:10px"
          />
          Phone: +1-543-123-4567
        </li>
        <li>
          <img
            src="@/assets/icon-email.svg"
            alt="email"
            style="margin-right:10px"
          />
          example@fylo.com
        </li>
      </ul>

      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Jobs</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <ul>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
      </ul>

      <ul>
        <li>
          <a href="#"><i class="fab fa-facebook social-icon"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-twitter social-icon"></i></a>
        </li>
        <li>
          <a href="#"><i class="fab fa-instagram social-icon"></i></a>
        </li>
      </ul>
    </nav>

    <div class="footer-item footer-text">
      <p class="footer-paragraph">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/lucas-santosP">Lucas Santos P</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  color: #fff;
}
.footer-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  max-width: 1500px;
}
.footer-nav {
  justify-content: space-between;
}
.footer-text {
  justify-content: flex-end;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1rem 0;
}
ul li {
  margin: 0.5rem 0;
}
ul li a {
  color: #fff;
}
ul li a:hover {
  text-decoration: underline;
  color: hsl(228, 46%, 70%);
}

ul:last-of-type {
  flex-direction: row;
  justify-content: space-around;
}
ul:last-of-type li {
  margin: auto 0.75rem;
}
.social-icon {
  font-size: 1.5rem;
}
.social-icon:hover {
  color: hsl(228, 46%, 70%);
}
.footer-paragraph {
  font-size: 0.75rem;
  text-align: center;
}
.footer-paragraph a {
  color: hsl(228, 46%, 70%);
}

.footer-paragraph a:hover {
  color: #fff;
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  .footer-nav {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-item ul:last-of-type {
    align-self: center;
  }
  .footer-text {
    display: none;
    justify-content: center;
  }
}
</style>
