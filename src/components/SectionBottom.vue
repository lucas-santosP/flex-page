<template>
  <div id="SectionBottom" class="flex-container">
    <div class="flex-item">
      <div class="text-group">
        <h1 class="title">Get early access today</h1>
        <p class="paragraph">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
    </div>
    <div class="flex-item">
      <form class="form-input">
        <input
          class="input-email"
          type="email"
          id="email2"
          placeholder="Enter your email..."
          aria-label="email"
        />
        <button type="submit" class="btn">Get Started For Free</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionBottom",
};
</script>

<style scoped>
.flex-container {
  margin-top: 1.5rem;
  color: #fff;
}
.form-input {
  flex-direction: column;
}
.input-email {
  width: 85%;
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
