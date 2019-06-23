export const findByTestAtrr = (component, att) => {
    const wrapper = component.find(`[data-test='${att}']`);
    return wrapper;
}