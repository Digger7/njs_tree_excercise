const Tree = require('./tree_data_mock.js');

function incValue(node_id, value_increment) {
    // Величина value_increment всегда положительно число
    if(value_increment < 0 || typeof value_increment !== 'number') return
    // Поиск узла по идентификатору node_id
    let node = Tree.find(tree => tree.id === node_id)
    // Если для узла задан родитель и его идентификатор число
    if(node.parent_id !== undefined &&  typeof node.parent_id === 'number'){
        // выполняем рекурсивный вызов функции incValue 
        incValue(node.parent_id, value_increment/4)
    }
    // Поиск детей у родителя узла
    let chilldren = Tree.filter(tree => tree.parent_id === node.parent_id && node.parent_id !== undefined)
    for (let child of chilldren) {
        if(typeof child.value !== 'number') child.value = 0
        let brotherIncrement = value_increment * 0.1
        // нельзя увеличивать значение у "брата" более чем в 2 раза за шаг
        if(brotherIncrement > child.value) brotherIncrement = child.value     
        child.value = child.value + brotherIncrement
        //значение для вычислений, число с плавающей точкой имеющей всего две значащих цифры, лишние значащие цифры просто отбрасываются
        child.value = +(child.value.toFixed(2))
    }  
    // Если поле value отсутствует, пустое, или является некорректным числом, то считается что value = 0
    if(typeof node.value !== 'number') node.value = 0
    node.value = node.value + value_increment
    //значение для вычислений, число с плавающей точкой имеющей всего две значащих цифры, лишние значащие цифры просто отбрасываются
    node.value = +(node.value.toFixed(2))
}

// Test cases
incValue( 303,   303)
incValue(1701, -1701)
incValue(9000,  9000)

// Print-out the result
console.log(JSON.stringify(Tree, null, "\t"))