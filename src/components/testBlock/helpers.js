import { testIDs } from "../../stores/testIDs";

export function onMountHandler(e, groupTestIDs, checkedTestIDs) {
    const { id } = e.detail;

    groupTestIDs.add(id);
    checkedTestIDs.add(id);
}

export function onChangeHandler(e, checkedTestIDs) {
    let { checked, id } = e.detail;

    checked ? checkedTestIDs.add(id) : checkedTestIDs.delete(id);

    testIDs.update((ids) => {
        checked ? ids.add(id) : ids.delete(id);
        return ids;
    });
}

export function updateAfterAllTestOnChanged(isTestsGroupChecked, checkedTestIDs, groupTestIDs) {
    testIDs.update((ids) => {
        isTestsGroupChecked
            ? (ids = new Set([...ids, ...checkedTestIDs]))
            : groupTestIDs.forEach((id) => ids.delete(id));

        return ids;
    });
}