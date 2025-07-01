const month = document.querySelector('.month');
const week = document.querySelector('.date');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

const date = new Date();
const years = date.getFullYear();
const days = date.getDate();

const weeks = date.toLocaleDateString('en-US',
  {weekday:'long'}
)
const months = date.toLocaleDateString('en-US',
  {month:'long'}
)
// You can have this function or not it doesn't matter
function fomarting(nums){
 return nums < 10 ? '0' + nums : nums 
}

month.innerHTML = months
week.innerHTML = weeks
year.innerHTML = years;
day.innerHTML = fomarting(days);

