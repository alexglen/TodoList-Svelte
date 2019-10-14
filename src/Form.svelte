<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

let inputValue = "";

const addOneTask = () => {
  dispatch("addTask", inputValue);
  inputValue = "";
};
</script>

<form class="form" on:submit|preventDefault="{addOneTask}">
  <div class="group">
    <input type="text" required class="input-add" bind:value="{inputValue}" />
    <span class="bar" />
    <label class="label-add"></label>
  </div>

  <button
    class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
    id="button-add"
    title="add new task"
  >
    <span class="title-button">Add new task</span>
  </button>
</form>

<style>
.form {
  background-color: rgba(138, 6, 81, 0.2);
  padding: 10px 15px;
  width: 740px;
  margin: 0 auto;
}

.input-add {
  font-size: 16px;
  margin: 0 auto;
  padding: 10px;
  display: block;
  width: 680px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 25px;
}

.input-add:focus {
  outline: none;
}

#button-add {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  width: 325px;
  border-radius: 18px;
  height: 40px;
  background-color: #f20c0c;
}

.title-button {
  vertical-align: middle;
}

.group {
  position: relative;
  margin: 0 auto;
}

.label-add {
  color: #999;
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
.input-add:focus ~ label,
input:valid ~ label {
  top: -15px;
  font-size: 14px;
  color: #5264ae;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 682px;
  margin: 0 auto;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background: #5264ae;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active state */
.input-add:focus ~ .bar:before,
.input-add:focus ~ .bar:after {
  width: 50%;
}

@media screen and (max-width: 768px) {
  .form {
    width: 550px;
  }
  .input-add {
    width: 500px;
  }

  .bar {
    width: 500px;
  }
}

@media screen and (max-width: 580px) {
  .form {
    width: 410px;
  }

  .input-add {
    width: 360px;
  }

  .bar {
    width: 360px;
  }
}

@media screen and (max-width: 430px) {
  .form {
    width: 350px;
  }

  .input-add {
    width: 300px;
  }

  .bar {
    width: 300px;
  }
}

@media screen and (max-width: 350px) {
  .form {
    width: 270px;
  }

  .input-add {
    width: 220px;
  }

  .bar {
    width: 220px;
  }

  #button-add {
    width: 180px;
  }
}
</style>