<script>
  import GroupResult from "../results/GroupResult.svelte";
  import { testIDs } from "../../stores/testIDs";
  import { mapResults } from "../../utils/mapResults";
  import Buttons from "./Buttons.svelte";

  let isDisabled = false;
  let total = 0;
  let success = 0;
  let fail = 0;
  let testsResults = [];

  let tids;

  testIDs.subscribe((ids) => {
    tids = Array.from(ids);
  });

  function runTests() {
    console.clear();
    isDisabled = true;
    // @ts-ignore
    const { StateManager } = window;

    const promises = StateManager.runTests(tids);

    Promise.allSettled(promises).then((res) => {
      testsResults = [...mapResults(res).entries()];

      const { tests } = StateManager.getReport();

      total = tests.total;
      success = tests.success;
      fail = tests.fail;

      isDisabled = false;
    });
  }

  function clearAll() {
    testIDs.set(new Set());

    document
      .querySelectorAll("input[type='checkbox']")
      .forEach((el) => (el.checked = false));
  }
</script>

<div class="panel" id="panel">
  <Buttons {runTests} {clearAll} {isDisabled} />

  <div id="report">
    <div class="statistic-billboard">
      <div class="total">Total: {total}</div>
      <div class="success">Success: {success}</div>
      <div class="fail">Failed: {fail}</div>
    </div>
  </div>
</div>

{#each testsResults as [groupName, childrens]}
  <GroupResult results={childrens} {groupName} />
{/each}

<style>
  .statistic-billboard {
    background-color: #d7d7f7;
    padding: 8px;
    font-size: 24px;
  }

  .statistic-billboard .success {
    color: green;
  }

  .statistic-billboard .fail {
    color: #fd3333;
  }
</style>
