const IS_Absent=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8
const WAGE_PER_HOURS=20;
const NUM_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

function calDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOURS
}
const findTotal=(totalVal,dailyVal)=>
{
    return totalVal;+dailyVal;
}

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
let empDailyMap=new Map();

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<=NUM_WORKING_DAYS)
{
    totalWorkingDays++;
let empCheck=Math.floor(Math.random()*10)%3;
let empHrs=getWorkingHours(empCheck);
totalEmpHrs+=empHrs;
empDailyWageArr.push(calDailyWage(empHrs));
empDailyMap.set(totalWorkingDays,empHrs);

}

let count=0;
let totalHours=Array.from(empDailyMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);

console.log("UC9 - Emp Wage with Array : "+ " Total Hours : "+totalHours+" Total Wage : "+totalSalary);


let nonWorkingDays=new Array();
let partWorkingDays=new Array();
let fullWorkingDays=new Array();
empDailyMap.forEach((value,key,map)=>
{
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
})

console.log("Full Working Days : "+fullWorkingDays);
console.log("Part Working Days : "+partWorkingDays);
console.log("Non Working Days : "+nonWorkingDays);