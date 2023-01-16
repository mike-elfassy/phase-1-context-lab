/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

class EmployeeRecord {
    constructor(employee) {
        this.firstName = employee[0]
        this.familyName = employee[1]
        this.title = employee[2]
        this.payPerHour = employee[3]
        this.timeInEvents = []
        this.timeOutEvents = []
    }
}

class TimeEvent {
    constructor(dateTime, type) {
        this.type = type
        this.hour = parseInt(dateTime.split(' ')[1], 10)
        this.date = dateTime.split(' ')[0]
    }
}

const createEmployeeRecord = function (employee) {
    return new EmployeeRecord(employee)
}

const createEmployeeRecords = function(employees) {
    let employeeRecords = []
    
    employees.forEach(employee => {
        employeeRecords.push(createEmployeeRecord(employee))
    })
    
    return employeeRecords
}

const createTimeInEvent = function(dateTime) {
    const timeEvent = new TimeEvent(dateTime, 'TimeIn')
    this.timeInEvents.push(timeEvent)
    
    return this
}

const createTimeOutEvent = function(dateTime) {
    const timeEvent = new TimeEvent(dateTime, 'TimeOut')
    this.timeOutEvents.push(timeEvent)

    return this
}

const hoursWorkedOnDate = function(date) {
    let timeInEvent = {}
    let timeOutEvent = {}
    let hoursWorked = 0

    timeInEvent = this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    timeOutEvent = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    
    hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100
    
    return hoursWorked
}

const wagesEarnedOnDate = function(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    let payPerHour = this.payPerHour

    return hoursWorked * payPerHour
}

const findEmployeeByFirstName = function(collection, firstName) {
    return collection.find(employeeRecord => employeeRecord.firstName === firstName)

}

const calculatePayroll = function(employeeRecords) {
    let allWages = []

    employeeRecords.forEach(employeeRecord => {
        return allWages.push(allWagesFor.call(employeeRecord))
    })

    let payroll = 0
    payroll = allWages.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    return payroll
}