<script>
  export let results;
  export let groupName = "Undefined :)";
  import TestResult from "./TestResult.svelte";
</script>

<div data-id="{groupName}" class="group-result">
  <div class="group-result__title">{groupName}</div>

  {#each results as { name, result }}
    <TestResult name={name} result={result} />
  {/each}
</div>

<style>
  .group-result {
    margin-bottom: 10px;
    padding-left: 15px;
  }

  .group-result__title {
    margin-left: -15px;
    margin-bottom: 5px;
  }
</style>
