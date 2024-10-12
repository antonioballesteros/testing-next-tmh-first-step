export const addItemToArray = (tasks: string[], task: string): string[] => {
    return [...tasks, task];
};

export const removeItemFromArray = (tasks: string[], i: number): string[] => {
    return [...tasks.slice(0, i), ...tasks.slice(i + 1)];
};