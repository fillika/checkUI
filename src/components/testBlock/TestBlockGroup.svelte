<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import InnerChild from "./InnerChild.svelte";
  import Test from "./Test.svelte";
  import TestBlockTitle from "./TestBlockTitle.svelte";
  import { checkedGroups } from "../../stores/checkedGroups";
  import {
    collectTestIDsInGroup,
    onChangeHandler,
    updateAfterAllTestOnChanged,
  } from "./helpers";

  export let childrens;
  export let groupName;
  let isShown = false;
  let groupTestIDs = new Set();

  onMount(() => {
    collectTestIDsInGroup(childrens, groupTestIDs);

    checkedGroups.update((prev) => {
      prev.add(groupName);
      return prev;
    });
  });
</script>

<div class="test-block">
  <div on:mousedown={() => (isShown = !isShown)} class="test-block__toggle" />

  <TestBlockTitle
    on:change={() =>
      updateAfterAllTestOnChanged($checkedGroups.has(groupName), groupTestIDs)}
    name={groupName}
  />

  {#if isShown}
    <div transition:slide class="test-block__content">
      <div class="test-block__content-inner-wrapper">
        {#each childrens as { tests, children }}
          {#each Array.from(tests.values()) as test}
            <Test on:change={onChangeHandler} name={test.name} id={test._id} />
          {/each}

          {#each children as child}
            <InnerChild on:change={onChangeHandler} {child} />
          {/each}
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
