<template>
  <div id="SectionTop" class="flex-container">
    <div class="flex-item">
      <div class="text-group">
        <h1 class="title">
          All your files in one secure <br />
          location, accessible anywhere.
        </h1>
        <p class="paragraph">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
      </div>
      <form class="form-input">
        <input
          class="input-email"
          type="email"
          id="email"
          placeholder="Enter your email..."
          aria-label="email"
        />
        <button type="submit" class="btn">Get Started</button>
      </form>
    </div>
    <div class="flex-item flex-item-img">
      <img class="bg-img" src="@/assets/illustration-1.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTop",
};
</script>

<style scoped>
.input-email {
  width: 85%;
}
.flex-item-img {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .input-email {
    width: 85%;
    max-width: unset;
  }
  .btn {
    width: 85%;
  }
}
</style>
