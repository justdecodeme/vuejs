<template>
  <div class="container">
    <!-- <form @submit.prevent="addSkill">
      <input
        type="text"
        placeholder="Enter a skill you have.."
        v-model="skill"
        v-validate="'min:5'"
        name="skill"
      />
    </form> -->

    <validation-provider rules="required" v-slot="{ errors }">
      <input v-model="value" name="myinput" type="text" />
      <span>{{ errors[0] }}</span>
    </validation-provider>  

    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
      </ul>
      <p>These are the skills that you possess.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    msg: String
  },
  data() {
    return {
      skill: "",
      skills: [
        { skill: "Vue.js" }, 
        { skill: "Frontend Developer" }
      ]
    };
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = "";
        } else {
          this.skill = "Hi";
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
</style>
