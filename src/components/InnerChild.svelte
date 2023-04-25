<script>
  export let c;
  import InnerChildCopy from "./InnerChildCopy.svelte";
  import Test from "./Test.svelte";
</script>

<div class="test-block__inner-child">
  <div class="test-block__inner-child-title">{c.name}</div>
  
  {#each [...c.tests.entries()] as [_, test]}
    <Test name={test.name} id={test.id} />
  {/each}

  {#if c.children.length > 0}
    {#each c.children as child}
      <InnerChildCopy c={child} />
    {/each}
  {/if}
</div>

<style>
  .test-block__inner-child {
    padding: 5px;
    border: 1px solid gray;
  }

  .test-block__inner-child-title {
    font-size: 18px;
  }
</style>
