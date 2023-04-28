<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let name;
  export let isTestsGroupChecked;

  const dispatcher = createEventDispatcher();

  function onChange(e) {
    dispatcher("change", e.target.checked);
  }

  onMount(() => {
    dispatcher("change", true);
  });
</script>

<div class="test-block__title">
  <input
    on:change={onChange}
    class="checkbox-group"
    type="checkbox"
    checked={isTestsGroupChecked}
    id={name}
  />
  <label for={name}>{name}</label>
</div>

<style>
  .test-block__title {
    border-bottom: 1px solid;
    height: 41px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    cursor: pointer;
    font-size: 1.25em;
    line-height: 1.15em;
  }

  .test-block__title label {
    padding-left: 10px;
    cursor: pointer;
  }
</style>
