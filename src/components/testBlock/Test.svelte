<script>
  import { testIDs } from "../../stores/testIDs";

  export let name;
  export let id;
  export let checked;

  $: onChange({ target: { checked: checked } });

  function onChange(e) {
    const { checked } = e.target;

    testIDs.update((ids) => {
      checked ? ids.add(id) : ids.delete(id);
      return ids;
    });
  }
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
