<template>
  <nav id="navbar" class="navbar">
    <div class="logo">
      <img class="img-logo" src="@/assets/logo.png" alt="" />
    </div>
    <ul class="menu">
      <li><a href=""></a>Home</li>
      <li><a href=""></a>About</li>
      <li><a href=""></a>Contanct</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: rgb(51, 51, 51);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
}
.logo {
  justify-self: flex-start;
}
.img-logo {
  width: 2rem;
}
.menu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  font-size: 1.2rem;
}
.menu li {
  margin: 0 2rem;
}
</style>
