<script>
export let title, done, id, important, data;

import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

const deleteOneTask = () => {
  dispatch("delete", id);
};

const importantOneTask = () => {
  dispatch("important", id);
};

const doneOneTask = () => {
  dispatch("done", id);
};
</script>

<li class="task">
  <label
    class="pure-material-checkbox"
    title="complete the task"
    on:change="{doneOneTask}"
  >
    <input type="checkbox" class="checkbox" />
    <span />
  </label>
  <span class="task__title">
    {#if (important && done)}
    <span class="done-important">
      {title}
    </span>
    {:else if important}
    <span class="important">
      {title}
    </span>
    {:else if done}
    <span class="done">
      {title}
    </span>
    {:else}
    <span>
      {title}
    </span>
    {/if}
  </span>

  <span class="task__buttons">
    <button
      on:click="{importantOneTask}"
      class=" mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
      id="button-first"
    >
      <i class="material-icons" id="first-icon">priority_high</i>
    </button>
    <button
      on:click="{deleteOneTask}"
      class=" mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
      id="button-second"
    >
      <i class="material-icons" id="second-icon">delete_outline</i>
    </button>
  </span>
</li>

<style>
.task {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 15px;
  vertical-align: middle;
  align-items: center;
}

.important {
  color: red;
}

.done {
  text-decoration: line-through;
}

.done-important {
  text-decoration: line-through;
  color: red;
}

li {
  list-style-type: none;
}

.task__title {
  width: 420px;
  overflow-x: hidden;
  cursor: pointer;
}

.task__buttons {
  margin-right: 90px;
}

#button-first,
#button-second {
  margin-right: 7px;
  border: 1px solid #8a867f;
  width: 25px;
}

.pure-material-checkbox {
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(var(--pure-material-onsrface-rgb, 0, 0, 0), 0.87);
  font-family: var(
    --pure-material-font,
    "Roboto",
    "Segoe UI",
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );
  font-size: 16px;
  line-height: 1.5;
  margin-left: 50px;
}

/* Input */
.pure-material-checkbox > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;
}

/* Span */
.pure-material-checkbox > span {
  display: inline-block;
  width: 100%;
  cursor: pointer;
}

/* Box */
.pure-material-checkbox > span::before {
  content: "";
  display: inline-block;
  box-sizing: border-box;
  margin: 3px 11px 3px 1px;
  border: solid 2px; /* Safari */
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  border-radius: 2px;
  width: 18px;
  height: 18px;
  vertical-align: top;
  transition: border-color 0.2s, background-color 0.2s;
}

/* Checkmark */
.pure-material-checkbox > span::after {
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  left: 1px;
  width: 10px;
  height: 5px;
  border: solid 2px transparent;
  border-right: none;
  border-top: none;
  transform: translate(3px, 4px) rotate(-45deg);
}

/* Checked, Indeterminate */
.pure-material-checkbox > input:checked,
.pure-material-checkbox > input:indeterminate {
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked + span::before,
.pure-material-checkbox > input:indeterminate + span::before {
  border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked + span::after,
.pure-material-checkbox > input:indeterminate + span::after {
  border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
}

.pure-material-checkbox > input:indeterminate + span::after {
  border-left: none;
  transform: translate(4px, 3px);
}

/* Hover, Focus */
.pure-material-checkbox:hover > input {
  opacity: 0.04;
}

.pure-material-checkbox > input:focus {
  opacity: 0.12;
}

.pure-material-checkbox:hover > input:focus {
  opacity: 0.16;
}

/* Active */
.pure-material-checkbox > input:active {
  opacity: 1;
  transform: scale(0);
  transition: transform 0s, opacity 0s;
}

.pure-material-checkbox > input:active + span::before {
  border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-checkbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
}

/* Disabled */
.pure-material-checkbox > input:disabled {
  opacity: 0;
}

.pure-material-checkbox > input:disabled + span {
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  cursor: initial;
}

.pure-material-checkbox > input:disabled + span::before {
  border-color: currentColor;
}

.pure-material-checkbox > input:checked:disabled + span::before,
.pure-material-checkbox > input:indeterminate:disabled + span::before {
  border-color: transparent;
  background-color: currentColor;
}

@media screen and (max-width: 768px) {
  .task__title {
    width: 320px;
  }
}

@media screen and (max-width: 630px) {
  .task__title {
    width: 240px;
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  .task__title {
    width: 250px;
  }
  .task__buttons {
    margin-right: 10px;
  }
  .pure-material-checkbox {
    margin-left: 20px;
  }
}

@media screen and (max-width: 420px) {
  .task__title {
    width: 190px;
  }
}

@media screen and (max-width: 420px) {
  .task__title {
    width: 140px;
  }
}
</style>