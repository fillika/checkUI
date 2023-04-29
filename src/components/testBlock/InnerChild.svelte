<script>
  export let c;
  const tests = [...c.tests.values()];

  import InnerChildCopy from "./InnerChildCopy.svelte";
  import Test from "./Test.svelte";
</script>

<div class="test-block__inner-child">
  <div class="test-block__inner-child-title">{c.name}</div>

  {#each tests as test}
    <Test
      on:mount
      on:change
      name={test.name}
      id={test._id}
    />
  {/each}

  {#if c.children.length > 0}
    {#each c.children as child}
      <InnerChildCopy on:mount on:change c={child} />
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
