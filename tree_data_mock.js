module.exports = [
    {
        // Just an object id
        id: 1,
        // Id of parent/ascendant object
        parent_id: 9000,
        // Number we are actually calculating. If not exists, empty or invalid = 0
        value: 0,
    },
    {
        id: 2,
        parent_id: 1,
        value: 22,
    },
    {
        id: 3,
        parent_id: 2,
        value: undefined,
    },
    {
        id: 4,
        parent_id: 2,
        value: 404.04,
    },
    {
        id: 303,
        parent_id: 3,
        value: "303",
    },
    {
        iD: 404,
    },
    {
        id: 505,
        parent_id: 5,
        value: .055,
    },
    {
        id: 1701,
        value: 100500,
    },
    {
        // This is the parent if no 'parent_id' defined OR object with 'parent_id' is not exists. Only one 'default_parent' per tree.
        default_parent: true,
        id: 9000,
        value: "9 thousands",
    },
];
