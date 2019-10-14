<script>
import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher();

export const buttons = [
    {
      name: "all",
      id: "first-button"
    },
    {
      name: "active",
      id: "second-button"
    },
    {
      name: "done",
      id: "third-button"
    }
  ];

  const filterSomeTasks = (name) => {
      dispatch('buttons', name);
  }

 const changeButton = ({ target }) => {
    let parent = target.parentElement;
    for (let i = 0; i < parent.children.length; i++) {
      parent.children[i].style.backgroundColor = "#383838";
    }
    target.style.backgroundColor = "red";
  };
</script>


<div class="buttons">
  {#each buttons as {id, name} (id)}
    <button 
      class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      {id}
      on:click = {() => filterSomeTasks(name)}
      on:focus  = {changeButton}>
      {name}
    </button>
  {/each}
</div>

<style>
.buttons {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

button:focus {
  background-color: red;
}

#first-button,
#second-button,
#third-button {
  width: 170px;
  background-color: #383838;
  border-radius: 18px;
  margin: 0 30px;
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .buttons {
    display: block;
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>