<script>
  export let result;
  export let name;
  import Pass from "./Pass.svelte";
  import Fail from "./Fail.svelte";
</script>

<div>
  {#if result}
    <Pass name={name} />
  {:else}
    <Fail name={name} />
  {/if}
</div>
