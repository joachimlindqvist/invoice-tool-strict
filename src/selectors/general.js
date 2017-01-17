export let getById = (list, id) => {
    return list.filter((item) => {
        return item.get('id') === parseInt(id)
    }).first();
}