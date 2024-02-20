export const getTableData = async () => await fetch("http://localhost:5000/getTableData")
                .then( data => data.json())
                .then( data => console.log(data));
