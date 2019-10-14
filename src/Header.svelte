<script>
import Logo from './Logo.svelte';
import Search from './Search.svelte';
export let tasks;
</script>

<div class="header">
  <div class="header__container">
    <Logo />
    <Search on:search />
    <div class="header__text">
      <p>Number of Tasks: {tasks.length}</p>
      <p>Completed tasks: {tasks.filter(item => item.done).length}</p>
    </div>
  </div>
</div>

<style>
.header {
  width: 100%;
  margin-right: 0;
  margin-left: 0;
}

.header__container {
  width: 100%;

  display: flex;
  justify-content: space-around;

  text-align: center;
  vertical-align: middle;
}

.header__text {
  padding-top: 23px;
}

.header__text p {
  line-height: 60%;
}

@media screen and (max-width: 768px) {
  .header__container {
    display: block;
  }
}
</style>