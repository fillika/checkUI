<script>
  export let c;
  export let checked;
  const tests = [...c.tests.values()];

  import InnerChild from "./InnerChild.svelte";
  import Test from "./Test.svelte";
</script>

<div class="test-block__inner-child">
  <div class="test-block__inner-child-title">{c.name}</div>

  {#each tests as test}
    <Test {checked} name={test.name} id={test._id} />
  {/each}

  {#if c.children.length > 0}
    {#each c.children as child}
      <InnerChild {checked} c={child} />
    {/each}
  {/if}
</div>

<style>
  .test-block__inner-child {
    padding: 5px;
    border: 1px solid violet;
  }

  .test-block__inner-child-title {
    font-size: 18px;
  }
</style>
