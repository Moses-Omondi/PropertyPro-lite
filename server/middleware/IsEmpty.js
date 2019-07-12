/* eslint-disable no-mixed-operators */
/* eslint-disable no-undefined */
const isEmpty = (value) => value === undefined ||
    value === null ||
    typeof value === 'object' && Object.keys(value).length === 0 ||
    typeof value === 'string' && value.trim().length === 0;

export default isEmpty;
