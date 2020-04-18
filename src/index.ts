class Department {
  constructor(
    private readonly id: string,
    private name: string,
    protected employees: string[] = []
  ) {}

  static fiscalYear = 2020;

  static createEmployee(name: string) {
    return { name: name }
  }

  describe() {
    console.log(`Departamento: ${this.id}, ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("Não tem reports");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Valor não válido");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  printReports() {
    console.log(this.reports);
  }
}

const Raimundo = new ITDepartment("2", ["MAX"]);

const accounting = new AccountingDepartment("3", []);

console.log(Department.fiscalYear);

Raimundo.addEmployee("Max");
Raimundo.addEmployee("Manu");
Raimundo.addEmployee("Anna");

Raimundo.describe();

Raimundo.printEmployeeInformation();

console.log(Raimundo);

accounting.addReport("BOA");
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "text";

console.log(accounting);
