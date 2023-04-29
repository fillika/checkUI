<script>
  import { createEventDispatcher } from "svelte";
  import { testIDs } from "../../stores/testIDs";

  export let name;
  export let id;
  const dispatcher = createEventDispatcher();

  function onChange(e) {
    const { checked } = e.target;

    testIDs.update((ids) => {
      checked ? ids.add(id) : ids.delete(id);
      return ids;
    });

    dispatcher("change", { checked, id });
  }
</script>

<div>
  <input
    on:change={onChange}
    type="checkbox"
    value={name}
    {name}
    {id}
    checked={$testIDs.has(id)}
    class="test-checkbox"
  />
  <label for={id}>{name}</label>
</div>

<style>
  div {
    padding-left: 25px;
  }
</style>
