<script>
  import { slide } from "svelte/transition";

  export let key;
  export let childrens;
  import Test from "./Test.svelte";
  import TestBlockTitle from "./TestBlockTitle.svelte";

  let isShown = false;

  function onClick() {
    isShown = !isShown;
  }
</script>

<div class="test-block">
  <div on:mousedown={onClick} class="test-block__toggle" />

  <TestBlockTitle {key} />

  {#if isShown}
    <div transition:slide class="test-block__content">
      <div class="test-block__content-inner-wrapper">
        {#each childrens as test}
          <Test name={test.name} id={test._id} />
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
