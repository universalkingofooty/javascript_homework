// 0,"",undefined,null,NaN are always gives a falsy value
//eg:
const input = ""


if (input == 0 ||undefined || null || isNaN(input) || "") {
   console.log('false');

}else{
   console.log('true');
} 





