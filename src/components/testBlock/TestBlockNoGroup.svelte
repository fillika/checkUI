<script>
  import { slide } from "svelte/transition";
  import Test from "./Test.svelte";
  import TestBlockTitle from "./TestBlockTitle.svelte";
  import {
    onMountHandler,
    onChangeHandler,
    updateAfterAllTestOnChanged,
  } from "./helpers";

  export let childrens;
  let isShown = true;
  let checkedTestIDs = new Set();
  let allBlockIDs = new Set();
  let isTestsGroupChecked;

  $: updateAfterAllTestOnChanged(
    isTestsGroupChecked,
    checkedTestIDs,
    allBlockIDs
  );

  function onChangeAllTestHandler(e) {
    isTestsGroupChecked = e.detail;

    isTestsGroupChecked
      ? (checkedTestIDs = new Set(allBlockIDs))
      : (checkedTestIDs = new Set());
  }
</script>

<div class="test-block">
  <div on:mousedown={() => (isShown = !isShown)} class="test-block__toggle" />

  <TestBlockTitle
    on:change={onChangeAllTestHandler}
    {isTestsGroupChecked}
    name={"no-group"}
  />

  {#if isShown}
    <div transition:slide class="test-block__content">
      <div class="test-block__content-inner-wrapper">
        {#each childrens as test}
          <Test
            on:mount={(e) => onMountHandler(e, allBlockIDs, checkedTestIDs)}
            on:change={(e) => onChangeHandler(e, checkedTestIDs)}
            name={test.name}
            id={test._id}
          />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .test-block {
    box-shadow: 0 0 2px 2px #ccc;
    margin-bottom: 10px;
    transition: 150ms ease height;
    overflow: hidden;
    position: relative;
  }

  .test-block__content {
    padding: 7px 0;
  }

  .test-block__toggle {
    position: absolute;
    height: 35px;
    width: 35px;
    right: 3px;
    top: 3px;
    background-color: chocolate;
    cursor: pointer;
  }
</style>
