export function mapResults(testsResults) {
    const m = new Map();

    testsResults.forEach(({ value }) => {
        const { name, result } = value;
        let gName = value.groupName;

        if (gName === null) {
            gName = "no-group";
        }

        if (m.has(gName)) {
            const arr = m.get(gName);
            arr.push({ name, result });
            m.set(gName, arr);
        } else {
            m.set(gName, [{ name, result }]);
        }
    });

    return m;
}