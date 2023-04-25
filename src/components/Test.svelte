<script>
  export let name;
  export let id;
</script>

<div>
  <input type="checkbox" value={name} name="" {id} class="test-checkbox" />
  <label for={id}>{name}</label>
</div>

<style>
  div {
    padding-left: 25px;
  }
</style>
