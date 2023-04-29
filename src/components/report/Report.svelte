<script>
  import GroupResult from "../results/GroupResult.svelte";
  import Statistics from "./Statistics.svelte";

  export let testsResults = [];
</script>

<div id="report">
  <Statistics/>

  {#each testsResults as [groupName, childrens]}
    <GroupResult results={childrens} {groupName} />
  {/each}
</div>