<script>
  import Buttons from "./Buttons.svelte";

  export let isDisabled = false;
  export let runTests;
  export let clearAll;
</script>

<div class="panel" id="panel">
  <Buttons {runTests} {clearAll} {isDisabled} />
</div>
