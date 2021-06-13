//Array Helper Function
// UC 7A- calc total Wage Array for Each traversal or reduce method
let totalEmpWage = 0;
function sun(dailyWage) {
    totalEmpWAgen += dailyWage;

}
empDailyWageArr.forEach(sum);
console.log("UC7A - Toatal Days: " + totalWorkingDays +
"Total Hrs: " + totalEmphrs + "Emp wage: " +totalEmpWage );
function totalWages(totalWage, dailyWage) {
    return totalwage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce:" +
empDailyWageArr.reduce(totalWages,0));

// UC7B - show the Day along with Daily wage using Array map helper function
let dailyCntr = 0;
function mapDailyWithWage(dailywage) {
    dailyCntr++;
    return dailyCntr + " = " + dailywage;

}
let mapDailyWithWage = empDailyWageArr.map(mapDailyWithWage);
console.log("UC7B - Daily Wage Map");
console,log(mapDailyWithWageArr);

//UC7C - show Days when Full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailywage.includes("160");

} 
let fulldaysWageArr = mapDayswithArr.filter(fulltimeWage);
console.log("UC7C - daily wage Filter when FullTime wage Earned");
console.log(filldayswageArr);