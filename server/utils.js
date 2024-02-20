const tableData = () => new Array(100000)
            .fill(null)
            .map((_, i) => ({ index: i, name: `Item ${i}`, checked: false }))


module.exports  = {
    tableData
}