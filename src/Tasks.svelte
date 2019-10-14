<script>
export let tasks;
import Task from './Task.svelte';
</script>

<ul class="tasks">
  {#each tasks as task (task.id)}
    <Task {...task} on:delete on:important on:done/>
  {/each}
</ul>

<style>
.tasks {
  margin-top: 25px;
}

@media screen and (max-width: 630px) {
  .tasks {
    padding: 0px;
  }
}
</style>