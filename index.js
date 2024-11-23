import { organizationData } from '/orgData.js'



function searchEmployeeById(data, targetId) {
    let results = []
    for (let key in data) {
        if (key === 'employees') {
            for (let item of data[key]) {
               if (item.id === targetId) {
                   results.push(item)
               } 
            }
        } else if (typeof data[key] === 'object') {
            results = [...results, ...searchEmployeeById(data[key], targetId)]
        }
    }
    return results
}

const employee = searchEmployeeById(organizationData, 5) // pass in data and employee id.
const employee2 = searchEmployeeById(organizationData, 6) // pass in data and employee id.

console.log('employee: ', employee)
console.log('employee: ', employee2) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]


/*
Challenge:
1. Write a function that searches for an employee in 'organizationData'. The function should recursively traverse the nested objects and find all employees with a specified ID. 

Stretch Goal:
💪 Complete the challenge without declaring any variable in the global scope.
*/
