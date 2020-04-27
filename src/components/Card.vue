<template>
  <div id="card" class="card">
    <div style="text-align:start!important">
      <img class="quote-icon" src="@/assets/icon-quotes.svg" alt="Quote" />
    </div>
    <p class="card-text">
      Fylo has improved our team productivity by an order of magnitude. Since
      making the switch our team has become a well-oiled collaboration machine.
    </p>
    <div class="card-footer">
      <div class="avatar-div">
        <img
          class="avatar-img"
          src="@/assets/avatar-testimonial.jpg"
          alt="Avatar"
        />
      </div>
      <div class="avatar-text">
        <p class="avatar-title">Kyle Burton</p>
        <p class="avatar-sub-title">Founder & CEO, Huddle</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style scoped>
.card {
  border: 2px #f8f8fe solid;
  border-radius: 2%;
  width: 90%;
  max-width: 410px;
  margin: 2rem 0;
  padding: 1.5rem 2rem;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  line-height: 1.3rem;
  -webkit-box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.065);
  -moz-box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.065);
  box-shadow: 0px 0px 13px 6px rgba(0, 0, 0, 0.065);
}
.quote-icon {
  width: 1.3rem;
}
.card-text {
  margin: 1rem 0;
}
.card-footer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.avatar-img {
  width: 3.5rem;
  border-radius: 50%;
  object-fit: contain;
}
.avatar-text {
  text-align: start;
  margin: 0 0.5rem;
}
.avatar-title {
  font-weight: 700;
}
@media screen and (max-width: 768px) {
  .card {
    margin: 2rem auto !important;
  }
}
</style>
