<script>
  import { tick } from "svelte";
  import { slide } from "svelte/transition";
  import InnerChild from "./InnerChild.svelte";
  import Test from "./Test.svelte";
  import TestBlockTitle from "./TestBlockTitle.svelte";
  import { testIDs as testsStore } from "../../stores/testIDs";

  export let groupName;
  export let childrens;
  let testIDs = [];
  let isShown = false;
  let checked = false;

  testsStore.subscribe((ids) => {
    tick().then(() => (testIDs = Array.from(ids)));
  });

  function onClick() {
    isShown = !isShown;

    if (isShown) {
      tick().then(() => {
        testIDs.forEach((id) => {
          const el = document.getElementById(id);
          // @ts-ignore
          if (el) el.checked = true;
        });
      });
    }
  }

  function onChange(e) {
    checked = e.target.checked;
  }
</script>

<div class="test-block">
  <div on:mousedown={onClick} class="test-block__toggle" />
  <TestBlockTitle {onChange} name={groupName} />

  {#if isShown}
    <div transition:slide class="test-block__content">
      <div class="test-block__content-inner-wrapper">
        {#each childrens as { tests, children }}
          {#each [...tests.values()] as test}
            <Test {checked} name={test.name} id={test._id} />
          {/each}

          {#each children as child}
            <InnerChild {checked} c={child} />
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
