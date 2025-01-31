import AppActions from "./appAction";


const successActionOf = (action) => {
    return `${action}_SUCCESS`;
}
const failureActionOf = (action) => {
    return `${action}_FAILURE`;
}

export {
    AppActions,
    successActionOf,
    failureActionOf
};