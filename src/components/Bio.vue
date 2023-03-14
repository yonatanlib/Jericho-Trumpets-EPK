<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bio-div">
    <p class="bio">
      Jericho Trumpets are a young and kicking post-punk band, founded by 4 high
      school friends from Tel-Aviv in 2019. Their edgy guitars, heavy drumming,
      And melancholy melodies, creates a mixture of uncompromising and raw
      melodramatic sound. Along with charismatic vocals, preaching about the
      love and hate relationship with their hometown and its society; they are a
      rebellious anthem to all lost and broken hearted. The Trumpets released
      their debut album - “Good Morning Afternoons” in February 2023, and going
      on their first EU/UK tour in June later the year.
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bio",
};
</script>

<style scoped>
.bio-div {
  width: 80%;
  margin: auto;
  text-align: center;
  font-family: "helvetica";
  font-size: 1.25rem;
  /* line-height: 2rem; */
  flex-grow: 1;
}
@media only screen and (max-width: 600px) {
  .bio-div {
    width: 95%;
    text-align: justify;
  }
}
</style>
