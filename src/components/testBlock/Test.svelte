<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { testIDs } from "../../stores/testIDs";

  export let name;
  export let id;
  export let checked;
  const dispatcher = createEventDispatcher();

  function onChange(e) {
    const { checked } = e.target;

    testIDs.update((ids) => {
      checked ? ids.add(id) : ids.delete(id);
      return ids;
    });

    dispatcher("change", { checked, id });
  }

  onMount(() => dispatcher("mount", { id }));
</script>

<div>
  <input
    on:change={onChange}
    type="checkbox"
    value={name}
    {name}
    {id}
    {checked}
    class="test-checkbox"
  />
  <label for={id}>{name}</label>
</div>

<style>
  div {
    padding-left: 25px;
  }
</style>
