<template>
  <div>
    <h1>{{ Company.name }} Detail</h1>
    <li>Company Spend Limit {{ Company.cspend }}</li>
    <li>Company Spend Min Limit {{ Company.cspendmin }}</li>
    <li>Company Spend Min Limit {{ Company.cspendmax }}</li>
    <li>Company Detail {{ Company.addNote }}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Company: {}
    };
  },

  mounted() {
    this.Company = this.$store.state.Companies[this.$route.params.id];
  }
};
</script>

<style></style>
