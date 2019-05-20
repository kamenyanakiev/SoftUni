function scolarship(input) {
  let income = Number(input[0]);
  let grade = Number(input[1]);
  let minIncome = Number(input[2]);
  let scolarshipIncomeSocial = 0;
  let scolarshipIncome = 0;
  if(grade >= 4.50 && income < minIncome){
    scolarshipIncomeSocial = Math.floor(minIncome - (minIncome * 0.65));
    scolarshipIncome = Math.floor(grade * 25);
    if(grade >= 5.50 && scolarshipIncomeSocial < scolarshipIncome){
      console.log(`You get a scholarship for excellent results ${Number(scolarshipIncome)} BGN`);;
    } else{
      console.log(`You get a Social scholarship ${Number(scolarshipIncomeSocial)} BGN`);
    }
  } else if(grade >= 5.50){
    scolarship = Math.floor(grade * 25);
    scolarshipIncomeSocial = Math.floor(minIncome - (minIncome * 0.65));
    console.log(`You get a scholarship for excellent results ${Number(scolarshipIncome)} BGN`);
  } else {
    console.log(`You cannot get a scholarship!`);
  }
}
scolarship([300.00, 5.65, 420.00]);