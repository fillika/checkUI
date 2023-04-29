<script>
  import Panel from "./components/panel/Panel.svelte";
  import Report from "./components/report/Report.svelte";
  import ProcessBar from "./components/results/ProcessBar.svelte";
  import WarningMsg from "./components/results/WarningMsg.svelte";
  import TestList from "./components/testBlock/TestList.svelte";
  import { testIDs as testsStore } from "./stores/testIDs";
  import { checkedGroup } from "./stores/checkedGroup";
  import { stats } from "./stores/stats";
  import { mapResults } from "./utils/mapResults";

  let isDisabled = false;
  let testsResults = [];
  let warningMessage = null;
  let inProcess = false;

  function runTests() {
    crearBeforeRun();
    // @ts-ignore
    const sm = window.StateManager;

    if ($testsStore.size === 0) {
      warningMessage = "Please select at least one test";
      isDisabled = false;
      return;
    }

    inProcess = true;

    Promise.allSettled(sm.runTests(Array.from($testsStore))).then((res) => {
      inProcess = false;
      testsResults = [...mapResults(res).entries()];

      const { tests } = sm.getReport();

      stats.update((s) => {
        s.total = tests.total;
        s.passed = tests.success;
        s.failed = tests.fail;
        return s;
      });

      isDisabled = false;
    });
  }

  function clearAll() {
    testsStore.update(() => new Set());
    checkedGroup.update(() => new Set());
  }

  function crearBeforeRun() {
    console.clear();
    testsResults.length = 0;
    warningMessage = null;
    isDisabled = true;
    inProcess = false;

    stats.update((s) => {
      s.total = 0;
      s.passed = 0;
      s.failed = 0;
      return s;
    });
  }
</script>

<main>
  <TestList />

  <Panel {clearAll} {runTests} {isDisabled} />

  {#if warningMessage !== null}
    <WarningMsg {warningMessage} />
  {:else if inProcess}
    <ProcessBar />
  {:else}
    <Report {testsResults} />
  {/if}
</main>
