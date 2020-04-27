<template>
  <div id="app" class="main-content">
    <header>
      <Navbar></Navbar>
    </header>

    <div class="flex-container">
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
          <form action="" class="form">
            <input type="email" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div class="flex-item bg-img"></div>
    </div>
    <!--  -->
    <div class="flex-container">
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
          <form action="" class="form">
            <input type="email" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div class="flex-item bg-img"></div>
    </div>
    <div class="flex-container">
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
          <form action="" class="form">
            <input type="email" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div class="flex-item bg-img"></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
body {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
header {
  width: 100%;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-bottom: 4rem;
  border-bottom: black 2px solid;
  max-width: 1200px;
}
.flex-item {
  height: 100%;
  width: 100%;
  background-color: rgb(66, 62, 62) (83, 80, 80);
}
.bg-img {
  background-color: rgb(102, 31, 182);
  width: 100%;
  height: 100%;
}
.form {
  margin: 1rem 0;
}
input {
  height: 25px;
  width: 75%;
}
button {
  height: 25px;
}
@media screen and (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>
