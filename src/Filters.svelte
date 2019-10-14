<script>

import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

const filters = [
  { name: 'oldToNew', label: "From old to new" },
  { name: 'newToOld', label: "From new to old" },
  { name: 'importantTasks', label: "From important tasks" },
  { name: 'aToZ', label: "From A to Z" },
  { name: 'zToA', label: "From Z to A" }
];

const sortSomeTasks = name => {
  dispatch("sort", name);
};
</script>

<div class="filters">
  <button
    id="demo-menu-lower-left"
    class="mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">more_vert</i>
  </button>
  <ul
    class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
    for="demo-menu-lower-left"
    >
    {#each filters as {name, label}(name)}
      <li class="mdl-menu__item" on:click = {() => sortSomeTasks(name)}>{label}</li>
    {/each}
  </ul>
</div>

<style>
.mdl-menu__item {
  width: 210px;
}

@media screen and (max-width: 768px) {
  .filters {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 550px) {
  .filters {
    justify-content: left;
    margin-left: 20px;
  }
}
</style>