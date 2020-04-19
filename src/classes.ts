abstract class Department {
  constructor(
    protected readonly id: string,
    protected employees: string[] = []
  ) {}

  static fiscalYear = 2020;

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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
    super(id);
  }

  describe() {
    console.log(`IT department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  private constructor(id: string, private reports: string[]) {
    super(id);
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("3", []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    console.log(`Accounting department - ID: ${this.id}`);
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

const accounting = AccountingDepartment.getInstance();

Raimundo.describe();
console.log(accounting);
