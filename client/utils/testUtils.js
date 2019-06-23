import checkPropTypes from 'check-prop-types';

export const findByTestAtrr = (component, att) => {
    const wrapper = component.find(`[data-test='${att}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErros = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErros;
}