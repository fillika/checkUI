<script>
  export let child;
  const tests = [...child.tests.values()];

  import Test from "./Test.svelte";
</script>

<div class="test-block__inner-child">
  <div class="test-block__inner-child-title">{child.name}</div>

  {#each tests as test}
    <Test on:mount on:change name={test.name} id={test._id} />
  {/each}

  {#each child.children as ch}
    <svelte:self on:mount on:change child={ch} />
  {/each}
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
