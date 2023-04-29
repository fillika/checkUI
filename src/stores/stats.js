import { writable } from "svelte/store";

export const stats = writable({
    total: 0,
    passed: 0,
    failed: 0,
});