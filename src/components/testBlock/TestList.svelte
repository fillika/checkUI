<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import TestBlockGroup from "./TestBlockGroup.svelte";
  import TestBlockNoGroup from "./TestBlockNoGroup.svelte";
  import { testIDs } from "../../stores/testIDs";

  const sm = window.StateManager;
  const groups = [...sm.getGroups().entries()];
  const testWithoutGroups = sm.getTestsWithoutGroup();

  onMount(() => {
    testIDs.set(new Set(sm.getAllTestsIDs()));
  });
</script>

<div class="test-list" id="test-ui">
  {#each groups as [groupName, childrens]}
    <TestBlockGroup {groupName} {childrens} />
  {/each}

  <TestBlockNoGroup childrens={testWithoutGroups} />
</div>

<style>
  .test-list {
    height: 500px;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: scroll;
    border: 1px dashed;
    margin-bottom: 10px;
  }
</style>
