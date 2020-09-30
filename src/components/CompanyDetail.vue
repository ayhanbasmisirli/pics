<template>
  <div>
    <h1>Company Detail</h1>
    <li>{{ Company.name }}</li>
    <li><b>Company Spend Limit</b> {{ Company.cspend }}</li>
    <li>Company Spend Min Limit {{ Company.cspendmin }}</li>
    <li>Company Spend Min Limit {{ Company.cspendmax }}</li>
    <li>Additional Notes {{ Company.addNote }}</li>
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
