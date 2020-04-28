<template>
  <nav id="navbar" class="navbar">
    <div class="logo">
      <img class="img-logo" src="@/assets/logo.svg" alt="" />
    </div>
    <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#mid">About</a></li>
      <li><a href="#footer">Contanct</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding: 0 2.5rem;
  font-size: clamp(0.8rem, 3vw, 1rem);
  font-family: var(--ft-secondary);
  /* border-bottom: rebeccapurple solid 2px; */
  width: 100%;
  max-width: 1500px;
}
.logo {
  flex: 1;
  justify-self: flex-start;
}
.img-logo {
  width: clamp(5rem, 15vw, 6.5rem);
}
.menu {
  flex: 1;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.menu li {
  margin: 0 1rem;
}
.menu li a {
  color: var(--dark-blue);
}
.menu li a:hover {
  opacity: 0.7;
}
@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 1rem !important;
  }
}
</style>
