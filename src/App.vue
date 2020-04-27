<template>
  <div id="app" class="main-content">
    <header>
      <Navbar></Navbar>
    </header>
    <!-- TOP  -->
    <div id="top" class="content-item section-top">
      <SectionTop></SectionTop>
      <div class="bg-bottom-div">
        <img
          class="bg-bottom"
          src="@/assets/bg-curve-desktop.svg"
          alt="background curve"
        />
      </div>
    </div>
    <!-- MID -->
    <div id="mid" class="content-item section-mid">
      <SectionMid></SectionMid>
    </div>
    <!-- BOTTOM -->
    <div id="bottom" class="content-item section-bottom">
      <SectionBottom></SectionBottom>
    </div>
    <!-- FOOTER -->
    <Footer class="section-footer"></Footer>
  </div>

  <!-- <footer id="footer" class="section-footer">
    </footer> -->
  <!-- <div class="flex-container section-bottom">
      <div class="flex-item">
        <div class="text-group">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minima nesciunt impedit voluptas, labore sunt animi optio at numquam
            ex. Eos, fugit? Vero maiores velit accusantium quaerat accusamus
            voluptas eaque! Omnis aliquid aspernatur praesentium itaque ex
            ducimus velit amet officiis aut deleniti facilis rerum molestiae.
          </p>
          <form action="" class="form-input">
            <input class="input-email" type="email" />
            <button class="btn">Send</button>
          </form>
        </div>
      </div>
      <div class="flex-item bg-img"></div>
    </div> -->
  <!-- <div class="flex-container">
      <div class="flex-item">
        <div class="form-group">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minima nesciunt impedit voluptas, labore sunt animi optio at numquam
            ex. Eos, fugit? Vero maiores velit accusantium quaerat accusamus
            voluptas eaque! Omnis aliquid aspernatur praesentium itaque ex
            ducimus velit amet officiis aut deleniti facilis rerum molestiae.
          </p>
          <form action="" class="form-input">
            <input class="input-text" type="email" />
            <button class="btn">Send</button>
          </form>
        </div>
      </div>
      <div class="flex-item bg-img">
        <img class="bg-img" src="@/assets/illustration-2.svg" alt="" />
      </div>
    </div> -->
  <!-- <div style="width:100%;">
      <img
        src="@/assets/bg-curve-desktop.svg"
        class="bg-img-desk"
        style="heigth:100%"
        alt=""
      />
    </div> -->
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SectionTop from "@/components/SectionTop.vue";
import SectionMid from "@/components/SectionMid.vue";
import SectionBottom from "@/components/SectionBottom.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Navbar, SectionTop, SectionMid, SectionBottom, Footer },
};
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-family: var(--ft-secondary);
}
.content-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border-bottom: red 2px solid; */
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  max-width: 1500px;
  margin-bottom: 2rem;
  /* border-bottom: black 2px solid; */
}
.flex-item {
  height: 100%;
  width: 100%;
  padding: 0.5rem 0;
  /* border: rebeccapurple 2px solid; */
}
.bg-img {
  object-fit: contain;
  object-position: center;
  width: 100%;
  max-width: 600px;
}

/* texts */
.title {
  font-size: clamp(1.2rem, 3.5vw, 2.5rem);
  line-height: 1.5;
  font-weight: 700;
  margin: 0.5rem 0;
}
.paragraph {
  font-size: clamp(0.9rem, 2.25vw, 1.2rem);
  line-height: 1.6;
  font-weight: 400;
  margin: 0.5rem 0;
  max-width: 80%;
}

/* form */
.form-input {
  display: flex;
  justify-content: flex-start;
}
.input-email {
  height: 2.7rem;
  max-width: 500px;
  padding: 0.5rem;
  margin: 0.25rem;
  font-size: 0.9rem;
  border: var(--dark-blue) solid 1px;
  border-radius: 5px;
}
.btn {
  height: 2.7rem;
  width: max-content;
  margin: 0.25rem;
  padding: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: clamp(0.7rem, 1.2vw, 0.9rem);
  font-weight: 700;
  letter-spacing: 1.2px;
  font-family: var(--ft-secondary);
  background-color: hsl(224, 93%, 58%);
  color: white;
  border-radius: 5px;
}
.section-mid {
  background-color: #f8f8fe;
}
.section-bottom {
  background-color: var(--desaturated-blue);
}
.section-footer {
  background-color: var(--dark-blue);
}

.bg-bottom {
  object-position: bottom;
  object-fit: fill;
  margin-bottom: -5px;
  width: 100%;
  height: 100%;
}
.bg-bottom-div {
  width: 100%;
  height: 100%;
  max-height: 75px;
}
/* Forma antiga de bg bottom */
/*
.bg-curve {
   background-image: url("assets/bg-curve-desktop.svg"); 
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0% 110%;
}
@media screen and (max-width: 768px) {
  .bg-curve {
    background-position: 0% 100%;
  }
}
*/

@media screen and (max-width: 768px) {
  .section-top .flex-container,
  .section-mid .flex-container {
    flex-direction: column-reverse;
  }
  .section-bottom .flex-container {
    flex-direction: column;
  }
  .title {
    text-align: center;
  }
  .paragraph {
    max-width: 100%;
  }
  .form-input {
    flex-direction: column;
    align-items: center;
  }
}
</style>
