interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const el: ElevatedEmployee = {
  name: "Fernando",
  privileges: ["create-server"],
  startDate: new Date(),
}