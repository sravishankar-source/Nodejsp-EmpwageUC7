//UC6 Arrays

function calDailyWage(empHrs) {
    return empHrs * Wage_per_Hour;
}
const Max_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs <= Max_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays ++;
        let empCheck = Math.floor(Math.random() * 10 % 3;
        let empHrs = getWorkinHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailywage(empHrs));
    }

    let empWage = calcdailywage(totalempHrs);
    console.log("UC6 - Total Days: " +totalWorkingDays +
    "Total Hrs: " + totalEmpHrs + "Emp wage: " + empwage);