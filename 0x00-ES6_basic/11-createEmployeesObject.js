export default function createEmployeesObject(departmentName, employees) {
    let employeesList = []
    const iter = employees[Symbol.iterator]();
    while (true) {
        let check = iter.next();
        if (check['done'] === false) {
            employeesList.push(check['value'])
        }
        else {
            break;
        }
    }
    return (
        {[departmentName]: employeesList}
    )
}