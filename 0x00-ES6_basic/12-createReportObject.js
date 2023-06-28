export default function createReportObject(employeesList) {
    const reportObject = {
      allEmployees: employeesList,
      getNumberOfDepartments() {
        return Object.keys(this.allEmployees).length;
      },
    };
  
    return reportObject;
  }
  
  // RETURNS
  // bob@dylan:~$ cat 12-main.js
  // import createEmployeesObject from './11-createEmployeesObject.js';
  // import createReportObject from './12-createReportObject.js';
  
  // const employees = {
  //     ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  //     ...createEmployeesObject('marketing', ['Sylvie'])
  // };
  
  // const report = createReportObject(employees);
  // console.log(report.allEmployees);
  // console.log(report.getNumberOfDepartments(report.allEmployees));
  
  // bob@dylan:~$
  // bob@dylan:~$ npm run dev 12-main.js
  // { engineering: [ 'Bob', 'Jane' ], marketing: [ 'Sylvie' ] }
  // 2
  // bob@dylan:~$
  