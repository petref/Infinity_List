const tableData = () => new Array(100000)
            .fill(null)
            .map((_, i) => ({ index: i, name: `Item ${i+1}`, description: `Item ${i+1} description`, price: `Item ${i+1} price` }))

const addOneRow = (rows) => rows += 1;


module.exports  = {
    tableData,
    addOneRow
}