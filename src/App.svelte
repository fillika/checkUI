<script>
  // @ts-ignore
  const groups = [...window.StateManager.getGroups().entries()];
  // @ts-ignore
  const testWithoutGroups = window.StateManager.getTestsWithoutGroup();
  import TestBlockGroup from "./components/TestBlockGroup.svelte";
  import TestBlockNoGroup from "./components/TestBlockNoGroup.svelte";
  import Panel from "./components/panel/Panel.svelte";
</script>

<main>
  <div class="test-form" id="test-form">
    <div class="test-list" id="test-ui">
      {#each groups as [groupName, childrens]}
        <TestBlockGroup {groupName} {childrens} />
      {/each}

      <TestBlockNoGroup childrens={testWithoutGroups} />
    </div>

    <Panel />
  </div>
</main>

<style>
  .test-form {
    display: grid;
    grid-template-columns: 1fr;
  }

  .test-list {
    height: 500px;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px dashed;
    margin-bottom: 10px;
  }
</style>
