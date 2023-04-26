<script>
  export let name;
  export let id;

  import { testIDs } from "../../stores/testIDs";

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
    name={name}
    id={id}
    class="test-checkbox"
  />
  <label for={id}>{name}</label>
</div>

<style>
  div {
    padding-left: 25px;
  }
</style>
