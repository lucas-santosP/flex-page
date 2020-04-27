<template>
  <div id="SectionMid" class="flex-container">
    <div class="flex-item">
      <div class="text-group">
        <h1 class="title">Stay productive, wherever you are</h1>
        <p class="paragraph">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p class="paragraph">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <div class="link-div">
          <a href="#" class="text-link"
            >See how Fylo works
            <img
              class="icon-link"
              src="@/assets/icon-arrow.svg"
              alt="Go to the link"
            />
          </a>
        </div>
      </div>
      <Card></Card>
    </div>

    <div class="flex-item bg-img">
      <img class="bg-img" src="@/assets/illustration-2.svg" alt="" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "SectionMid",
  components: { Card },
};
</script>

<style scoped>
.link-div {
  display: flex;
  justify-content: flex-start;
}
.text-link {
  width: max-content;
  color: cadetblue;
  border-bottom: cadetblue solid 2px;
}
.icon-link {
  position: relative;
  top: 2px;
}

@media screen and (max-width: 768px) {
  .paragraph,
  .text-link {
    text-align: center;
  }
  .link-div {
    justify-content: center;
  }
}
</style>
