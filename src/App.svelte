<script>
import Buttons from "./Buttons.svelte";
import Filters from "./Filters.svelte";
import Footer from "./Footer.svelte";
import Form from "./Form.svelte";
import Header from "./Header.svelte";
import Tasks from "./Tasks.svelte";
import Time from "./Time.svelte";
import TopButton from "./TopButton.svelte";


import {
  filterAccordingToButton,
  filterAccordingToSearch,
  sortAccordingToFilters
} from "./helpers/functionsForApp";

let tasks = [],
  makeId = 1000,
  button = "all",
  search = "",
  sort = 'oldToNew';

const addTask = ({ detail }) => {
  tasks = [
    ...tasks,
    {
      title: detail,
      id: makeId++,
      done: false,
      important: false,
      data: new Date()
    }
  ];
};

const deleteTask = ({ detail }) => {
  const index = tasks.findIndex(item => item.id === detail);
  tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
};

const importantTask = ({ detail }) => {
  const index = tasks.findIndex(item => item.id === detail);
  const changedTask = { ...tasks[index], important: !tasks[index].important };
  tasks = [...tasks.slice(0, index), changedTask, ...tasks.slice(index + 1)];
};

const doneTask = ({ detail }) => {
  const index = tasks.findIndex(item => item.id === detail);
  const changedTask = { ...tasks[index], done: !tasks[index].done };
  tasks = [...tasks.slice(0, index), changedTask, ...tasks.slice(index + 1)];
};

const searchTasks = ({ detail }) => {
  search = detail;
};

const filterTasks = ({ detail }) => {
  button = detail;
};

const sortTasks = ({ detail }) => {
  sort = detail;
};

$: changedTasks = filterAccordingToButton(tasks, button);
$: changedTasksAccordingSearch = filterAccordingToSearch(changedTasks, search);
$: changedTasksAccordingAllFilters = sortAccordingToFilters(
  changedTasksAccordingSearch, sort
);
</script>

 <div class="app">
      <div class="app__header">
        <Header on:search = {searchTasks} {tasks}/>
      </div>
      <main class="app__main">
        <div class="app__time__and__filters">
		  <Time/>
		  <Filters on:sort = {sortTasks}/>
        </div>
        <Buttons on:buttons = {filterTasks} />
        <Tasks tasks =  {changedTasksAccordingAllFilters} on:delete = {deleteTask}  on:important = {importantTask} on:done = {doneTask} />
        <Form on:addTask = {addTask}/>
      </main>
      <Footer/>
      <TopButton />
    </div>

<style>
.app {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.app__header {
  background-color: rgba(0, 0, 0, 0.9);
  height: 80px;
  color: white;
  margin-top: -8px;
}

.app__main {
  max-width: 950px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
}

.app__time__and__filters {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .app__header {
    height: 200px;
  }
  .app__time__and__filters {
    display: block;
  }
}
</style>