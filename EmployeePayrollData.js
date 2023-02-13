class EmployeePayrollData
{
    id;
    salary;
    gender;
    startDate;

    constructor(id,name,salary,gender,startDate)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
    }

    get name()
    {
        return this._name;
    }

    set name(name)
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(nameRegex.test(name))
        this._name=name
        else
        throw 'Name is Incorrect';
    }

    toString()
    {
        const options = {year:'numeric',month:'long',day:'numeric'}
        const empDate=this.startDate===undefined?"undefined":
        this.startDate.toLocaleDateString("en-US",options)
        return "id = "+this.id+" , name = "+this.name+" , salary = "+this.salary+", gender = "+this.gender+", startDate ="+empDate;
    }
}

let employeePayrollData=new EmployeePayrollData(1,"Mark",4000,"M",new Date())

console.log(employeePayrollData.toString());

try{
    employeePayrollData.name="john";
    console.log(employeePayrollData.toString());
}catch(e)
{
    console.error(e);
}