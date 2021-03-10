/* eslint-disable */
new NativeCheckBoxTree('#container', {
    data: [], // tree data
});

new NativeCheckBoxTree('#container', {
    data: [], // tree data
    values: ['1', '2', '3'],
});

new NativeCheckBoxTree('#container', {
    url: '/api/treeJson',
    values: ['1', '2', '3'],
});

new NativeCheckBoxTree('#container', {
    url: '/api/rawData',
    beforeLoad: rawdata => {
        let formatedData = rawdata; // do some format
        return formatedData;
    },
    values: ['1', '2', '3'],
});

new NativeCheckBoxTree('#container', {
    url: '/api/treeJson',
    loaded: () => {
        // to something or setValues() after NativeCheckBoxTree loaded callback
        let treeJson = [];
        this.values = treeJson;
    },
});

new NativeCheckBoxTree('#container', {
    url: '/api/treeWithCheckedStatusJson',
});

let tree = new NativeCheckBoxTree();
let values = tree.values;
let selectedNodes = tree.selectedNodes;
