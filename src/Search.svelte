<script>
let searchInput = '';

import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher();

const searchSomeTasks = () => {
    dispatch('search', searchInput)
}
</script>

<div class="search">
  <form class="form-inline md-form form-sm mt-0" title="search">
    <input
      className="form-control form-control-sm ml-3 w-75"
      type="text"
      placeholder="Search"
      id="search"
      bind:value="{searchInput}"
      on:input="{searchSomeTasks}"
    />
  </form>
</div>

<style>
.search {
  display: flex;
  align-items: center;
  padding-top: 10px;
}

#search {
  background: url(/search_form/search-white.png) no-repeat 10px 6px #fcfcfc;
  border: 1px solid #d1d1d1;
  font: bold 12px Arial, Helvetica, Sans-serif;
  color: rgba(0, 0, 0, 0.75);
  min-width: 150px;
  padding: 8px 45px 8px 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
  -webkit-transition: all 0.7s ease 0s;
  -moz-transition: all 0.7s ease 0s;
  -o-transition: all 0.7s ease 0s;
  transition: all 0.7s ease 0s;
  outline: none;
}

@media screen and (max-width: 768px) {
  .search {
    justify-content: center;
    margin-top: 10px;
  }
}
</style>