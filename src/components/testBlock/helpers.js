import { testIDs } from "../../stores/testIDs";

export function onChangeHandler(e) {
    let { checked, id } = e.detail;

    testIDs.update((ids) => {
        checked ? ids.add(id) : ids.delete(id);
        return ids;
    });
}

export function updateAfterAllTestOnChanged(isTestsGroupChecked, groupTestIDs) {
    testIDs.update((ids) => {
        isTestsGroupChecked
            ? (ids = new Set([...ids, ...groupTestIDs]))
            : groupTestIDs.forEach((id) => ids.delete(id));

        return ids;
    });
}

export function collectTestIDsInGroup(childrens, groupTestIDs) {
    childrens.forEach(({ tests, children }) => {
        tests.forEach((test) => {
            groupTestIDs.add(test._id);
        });

        if (children.length) {
            collectTestIDsInGroup(children, groupTestIDs);
        }
    });
}