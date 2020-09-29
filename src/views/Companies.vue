<template>
  <div class="companies ">
    <h1>Companies</h1>
    <ul v-for="(company, index) in CompaniesArr" :key="index">
      <li>{{ company.name }}</li>
    </ul>
    <button @click="toggle = !toggle" class="btn-green ">Add Company</button>
    <div v-show="toggle">
      <form id="form" @submit.prevent="addCompany">
        <Label>Company Name </Label
        ><input type="text" v-model="cname" required />
        <br />
        <Label>Company Spend </Label
        ><input type="number" min="0" v-model.number="cspend" required />
        <br />
        <Label>Company Spend Ability </Label>
        <input
          type="number"
          min="0"
          v-model.number="cspendmin"
          required
          placeholder="Min..."
        />
        <input
          type="number"
          min="0"
          v-model.number="cspendmax"
          required
          placeholder="Max..."
        />

        <br />
        <button type="button" class="btn-green " @click="showModal">
          Additional Notes
        </button>

        <modal
          v-show="isModalVisible"
          @closes="closeModal"
          @modalNote="updateNote"
        />
        <button
          class="btn-green "
          type="submit"
          :disabled="!cname.length > 0 && minmax"
        >
          Save Company
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import modal from "../components/Modal";

export default {
  components: {
    modal
  },
  data() {
    return {
      CompaniesArr: [],
      toggle: false,
      cname: "",
      cspend: null,
      cspendmax: null,
      cspendmin: null,
      minmax: null,
      isModalVisible: false,
      addNote: null
    };
  },
  mounted() {
    this.CompaniesArr = this.$store.getters.getAllCompanies;
  },
  methods: {
    addCompany: function() {
      this.$store.dispatch("setCompany", {
        name: this.cname,
        cspend: this.cspend,
        cspendmax: this.cspendmax,
        cspendmin: this.cspendmin,
        addNote: this.addNote
      });
      this.toggle = false;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    updateNote(note) {
      this.addNote = note;
    }
  },
  watch: {
    cspendmin() {
      this.cspendmax < this.cspendmin;
      return (this.minmax = true);
    }
  }
};
</script>
<style scoped>
.btn-green {
  color: white;
  background: #4aae9b;
  border: 5px solid #4aae9b;
  border-radius: 10px;
  font-size: 15px;
}
</style>
