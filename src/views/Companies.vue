<template>
  <div class="companies ">
    <h1>Companies</h1>
    <ul v-for="(company, index) in CompaniesArr" :key="index">
      <Company :company="company" :index="index" />
    </ul>
    <button @click="toggle = !toggle" class="btn-green company">
      {{ toggle ? "&uarr;" : "+" }}
    </button>
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

        <h1 v-show="!minmaxx">Minumum cannot be bigger</h1>
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
          :disabled="!cname.length > 0 || !minmaxx"
        >
          Save Company
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import modal from "../components/Modal";
import Company from "../components/Company";
export default {
  components: {
    modal,
    Company
  },
  data() {
    return {
      CompaniesArr: [],
      toggle: false,
      cname: "",
      cspend: null,
      cspendmax: null,
      cspendmin: null,
      minmax: false,
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
      this.cname = "";
      this.cspend = null;
      this.cspendmax = null;
      this.cspendmin = null;
      this.minmax = null;
      this.isModalVisible = false;
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
  // watch: {
  //   cspendmin() {
  //     if (this.cspendmax < this.cspendmin) {
  //       console.log(this.minmax);
  //       return (this.minmax = true);
  //     }
  //   }
  // },
  computed: {
    minmaxx() {
      if (this.cspendmax < this.cspendmin) return false;
      else {
        return true;
      }
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
  margin-left: 10px;
}
.company {
  border-radius: 50px;
  width: 50px;
  height: 50px;
  font-size: 30px;
}
:disabled {
  background: rgb(210, 228, 215);
  color: black;
}
input {
  width: 20%;
  padding: 12px 20px;
  margin: 8px;
  box-sizing: border-box;
  font-size: 15px;
}
</style>
