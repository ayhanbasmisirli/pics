<template>
  <div class="">
    <div class="card container">
      <router-link :to="`/Companies/${index}`" class="title">{{
        company.name
      }}</router-link>
      <li>Company {{ company.name }}</li>
      <li>Company Spend Limit {{ company.cspend }}</li>
      <li>Company Spend Min Limit {{ company.cspendmin }}</li>
      <li>Company Spend Min Limit {{ company.cspendmax }}</li>
    </div>
  </div>
</template>

<script>
export default {
  props: ["company", "index"]
};
</script>

<style>
.title:hover {
  background-color: #4aae9b;
  color: white;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 50px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.container {
  display: grid;

  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(2, 1fr);
}
</style>
