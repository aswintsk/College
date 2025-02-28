
function length_str(){
    // let str="Hello World";
    let str= document.getElementById("txt").value;
    len= str.length;
    document.getElementById("otp").inn.style.display='flex';
    document.getElementById("otp").innerHTML="Length: "+len;
}

function concat(){
    let str1 = document.getElementById("txt1").value;
    let str2 = document.getElementById("txt2").value;
    str3=str1.concat(" ",str2);
    document.getElementById("result").style.display='flex';
    document.getElementById("result").innerHTML=`${str3}`;
}

function slice_str(){
    let str4 = document.getElementById("txt3").value;
    str5=str4.slice(0,4);
    document.getElementById("result2").style.display='flex';
    document.getElementById("result2").innerHTML=str5;
}

function replace_str(){    
    let str1= document.getElementById("txt4").value;
    let str2= document.getElementById("txt5").value;
    let str3= document.getElementById("txt6").value;
    console.log(str1);
    console.log(str2);
    console.log(str3);
    str4= str1.replace(str2,str3);
    document.getElementById("result3").style.display='flex';
    document.getElementById("result3").innerHTML=`${str4}`;
}

function to_uppercase(){
    let str1 = document.getElementById("txt7").value;
    str2=str1.toUpperCase();
    document.getElementById("result4").style.display='flex';
    document.getElementById("result4").innerHTML=str2;
}
function to_lowercase(){
    let str1 = document.getElementById("txt7").value;
    str2=str1.toLowerCase();
    document.getElementById("result4").style.display='flex';
    document.getElementById("result4").innerHTML=str2;
}

function to_trim(){
    let str1 = document.getElementById("txt8").value;
    str2=str1.trim();
    document.getElementById("result5").style.display='flex';
    document.getElementById("result5").innerHTML=str2;
}

let str4= "Hello World";
console.log(str4+` \nIndex of World: `+str4.indexOf("World"));

function find_adult(){
    let age= Number(document.getElementById("txt9").value);
    if(age>=18){
        document.getElementById("result6").style.display='flex';
        document.getElementById("result6").innerHTML="You are an adult";
    }
    else{
        document.getElementById("result6").style.display='flex';
        document.getElementById("result6").innerHTML="You are not an adult";
    }
}

function find_grade(){
    let marks = Number(document.getElementById("txt10").value);
    if(marks>=90){
        document.getElementById("result7").style.display='flex';
        document.getElementById("result7").innerHTML="A Grade";
    }
    else if(marks>=80 && marks<90){
        document.getElementById("result7").style.display='flex';
        document.getElementById("result7").innerHTML="B Grade";
    }
    else if(marks>=70 && marks<80){
        document.getElementById("result7").style.display='flex';
        document.getElementById("result7").innerHTML="C Grade";
    }
    else{
        document.getElementById("result7").style.display='flex';
        document.getElementById("result7").innerHTML="F Grade";
    }
}

function day_detail(){
    let day = document.getElementById("txt11").value;
    day= day.toLowerCase();
    switch(day){
        case "monday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Today Is the start of the work week";
            break;
        case "tuesday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Lets get through this week";
            break;
        case "wednesday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="We are almost half way through";
            break;
        case "thursday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Almost there";
            break;
        case "friday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Weekend is near";
            break;
        case "saturday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Weekend is here";
            break;
        case "sunday":
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Last day of the week";
            break;
        default:
            document.getElementById("result8").style.display='flex';
            document.getElementById("result8").innerHTML="Invalid day";
    }
}

function loop(){
    let num = Number(document.getElementById("txt12").value);
    let num_arr=[];
    for(let i=1;i<num;i++){
        num_arr.push(i);
    }
    document.getElementById("result9").style.display='flex';
    document.getElementById("result9").innerHTML=num_arr;
}


function reverse_str(){
    let str = document.getElementById("txt13").value;
    let rev_str="";
    for(let i=(str.length)-1;i>=0;i--){
        console.log(rev_str);
        rev_str=rev_str.concat("",str[i]);
    }
    document.getElementById("result10").style.display='flex';
    document.getElementById("result10").innerHTML=rev_str;
}


function count_v(){
    let str = document.getElementById("txt14").value;
    let count=0;
    let str2=str.toLowerCase();
    for(let i=0;i<str2.length;i++){
        if(str2[i]=='a' || str2[i]=='e'|| str2[i]=='i'|| str2[i]=='o'|| str2[i]=='u')
        {
            count++;
        }
    }
    document.getElementById("result11").style.display='flex';
    document.getElementById("result11").innerHTML=`Vowels: ${count}`;
}

function find_l(){
    let n1= Number(document.getElementById("txt15").value);
    let n2= Number(document.getElementById("txt16").value);
    let n3=Number(document.getElementById("txt17").value);
    if(n1>=n2 && n1>=n3){
        document.getElementById("result12").style.display='flex';
        document.getElementById("result12").innerHTML=`The largest number is: ${n1}`;
    }
    else if(n2>=n1 && n2>=n3){
        document.getElementById("result12").style.display='flex';
        document.getElementById("result12").innerHTML=`The largest number is: ${n2}`;
    }
    else{
        document.getElementById("result12").style.display='flex';
        document.getElementById("result12").innerHTML=`The largest number is: ${n3}`;
    }
}

// let a=10
// let b=80
// let c=30
// if(a>=b && a>=c){
//     console.log(a+"Largest");
// }
// else if(b>=a && b>=c){
//     console.log(b+"Largest");
// }
// else{
//     console.log(c+"Largest");
// }

n=10
for(i=1;i<=n;i++){
    if(i%2==0){
        console.log(i+ "is even")
    }
}

// for(let i=1;i<=20;i++){
//     if(i%3==0){
//         document.write("Fizz,");
//     }
//     else if(i%5==0){
//         document.write("Buzz,");
//     }
//     else if(i%3==0 && i%5==0){
//         document.write("FizzBuzz,");
//     }
//     else{
//         document.write(i+",");
//     }
// }

function login(){
    let username = document.getElementById("txt18").value;
    let password = document.getElementById("txt19").value;
    if(username=="admin" && password=="123"){
        document.getElementById("result13").style.display="flex";
        document.getElementById("result13").innerHTML="Login Success";
    }
    else{
        document.getElementById("result13").style.display="flex";
        document.getElementById("result13").innerHTML=" Invalid username or password";
    }
}

function calculate(){
    let a = Number(document.getElementById("txt20").value);
    let b = Number(document.getElementById("txt21").value);
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    document.getElementById("result14").style.display="flex";
    document.getElementById("result15").style.display="flex";
    document.getElementById("result16").style.display="flex";
    document.getElementById("result17").style.display="flex";
    document.getElementById("result14").innerHTML=`Sum: ${sum}`;
    document.getElementById("result15").innerHTML=`Sub: ${sub}`;
    document.getElementById("result16").innerHTML=`mul: ${mul}`;
    document.getElementById("result17").innerHTML=`div: ${div}`;
}

// let sum = function(a,b){
//     return `Sum: ${a+b}`;
// }
// console.log(sum(2,3))


// let str=" \"hello world\" ";
// let str1="hello world this is new world";
// let str1="hello world";
// // document.getElementById("output").innerHTML=str;

// str_slice= str1.slice();
// // str_slcie1= str1.slice(8,);
// // str_slcie2= str1.slice(5,11);
// // str_slcie3= str1.slice(-11,-5);
// document.getElementById("output2").innerHTML=str_slice;
// // document.getElementById("output3").innerHTML=str_slcie1;
// // document.getElementById("output4").innerHTML=str_slcie2;
// // document.getElementById("output5").innerHTML=str_slcie3;

// // str_slice= str1.substr();
// // str_slice1= str1.substr(8,);
// // str_slice2= str1.substr(5,11);
// str_slice3= str1.substr(-4);
// // document.getElementById("output2").innerHTML=str_slice;
// // document.getElementById("output3").innerHTML=str_slice1;
// // document.getElementById("output4").innerHTML=str_slice2;
// document.getElementById("output3").innerHTML=str_slice3;


// str_substr= str1.substring(8,3);
// document.getElementById("output4").innerHTML=str_substr;

// // str2= str1.replace("world","earth");
// // str3=str1.replaceAll("world","earth")

// str2 = str1.charAt(0);
// document.getElementById("output").innerHTML=str2;
// document.getElementById("output2").innerHTML=str3;


// let sum2= (a,b) => `Sum: ${a+b}`
// console.log(sum2(2,3))

function fibo(){
    let n = prompt("Enter Number");
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    // console.log(fib)
    document.getElementById("result18").style.display='flex';
    document.getElementById("result18").innerHTML = fib;
}

function mult(){
    let n= Number(prompt("Enter a number"));
    for(let i=1;i<=10;i++){
        window.alert(`${n}x${i}=${n*i} \n ${n*i}x${n*i}=${(n*i)*(n*i)}`);
    }
}

// Calculator using functio
function calc(){
   let n1= Number(document.getElementById("txt22").value);
   let n2= Number(document.getElementById("txt23").value);
   let op= document.getElementById("operator").value;
   switch(op){
    case "+":
        document.getElementById("result19").innerHTML = `Result: ${n1+n2}`;
        break;
    case "-":
        document.getElementById("result19").innerHTML = `Result: ${n1-n2}`;
        break;
    case "*":
        document.getElementById("result19").innerHTML = `Result: ${n1*n2}`;
        break;
    case "/":
        if(n2!=0){
            document.getElementById("result19").innerHTML = `Result: ${n1/n2}`;
        }
        else{
            document.getElementById("result19").innerHTML = `Result: Error`;
        }
        break;
    case "%":
        document.getElementById("result19").innerHTML = `Result: ${n1%n2}`;
        break;
    case "**":
        document.getElementById("result19").innerHTML = `Result: ${n1**n2}`;
        break;
   } 
}
// area of triangle
function area(s1,s2,s3){
    let s=(s1+s2+s3)/2;
    let area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
    console.log("Area of triangle:",area)
}
area(5,6,7);

// GCD and LCM 
function gcd(a,b){
    if(b==0){
        return a;
    }
    else{
        return gcd(b,a%b);
    }
}
function lcm(a,b){
    return (a*b)/gcd(a,b);
}
function GCD(){
    let n1= Number(document.getElementById("txt22").value);
    let n2= Number(document.getElementById("txt23").value);
    let result = gcd(n1,n2);
    document.getElementById("result19").style.display='flex'
    document.getElementById("result19").innerHTML = `Result: ${result}`;
}
function LCM(){
    let n1= Number(document.getElementById("txt22").value);
    let n2= Number(document.getElementById("txt23").value);
    let result = lcm(n1,n2);
    document.getElementById("result19").style.display='flex'
    document.getElementById("result19").innerHTML = `Result: ${result}`;
}
// document.write("GCD of 60 and 36:",gcd(60,36))
// document.write("<br>GCD of 60 and 36:",lcm(60,36))

function find_income(){
    let n1 = Number(document.getElementById("txt24").value);
    let n2= 0;
    if(n1>=1000 && n1<=5000){
         n2 = n1*0.10;
    }
    else if(n1>=5001 && n1<=10000){
         n2 = n1*0.15;
    }
    else if(n1>=10001){
         n2 = n1*0.20;
    }
    document.getElementById("result20").style.display='flex' ;   
    document.getElementById("result20").innerHTML = `Commision: ${n2}`;
}


// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     document.write(arr[i]," ");
// }

// let arr2 = new Array(5);
// for(let i=0;i<arr2.length;i++){
//     arr2[i]=i+1;
// }
// arr2.forEach(e => {
//     console.log(e)    
// });

function counth(){
    let h2= document.getElementsByTagName("h2");
    let h3= document.getElementsByTagName("h3");
    document.getElementById("result21").style.display='flex';
    document.getElementById("result21").innerHTML=`h2 tags:${h2.length} <br> h3 tags:${h3.length}`;
}

function setcolor(){
    let color = document.getElementById("color").value;
    document.getElementById("changecolor").style.color=color;
}
let win;
function openwindow(){
    win = window.open("","","width=500,height=500")
}
function resizewindow(){
    win.resizeTo(300, 300);
}
function resizebywindow(){
    win.resizeBy(300, 300);
}
function closewindow(){
    win.close();
}
function moveto(){
    win.moveTo(100,100);
}
function moveby(){
    win.moveBy(75,75);
}

function large(){
    let n1 =Number(document.getElementById("n1").value);
    let n2 =Number(document.getElementById("n2").value);
    let n3 =Number(document.getElementById("n3").value);
    let l = Math.max(n1,n2,n3);
    document.getElementById("result22").style.display='flex';
    document.getElementById("result22").innerHTML=`The largest number is ${l}`;
}

let classs = document.getElementsByClassName("class1")
function changebg(){
    classs[0].style.background="#e77777";
    classs[0].style.boxShadow ="5px 5px 5px rgb(209, 160, 160)";
    classs[1].style.background="#7d7de1";
    classs[1].style.boxShadow ="5px 5px 5px rgb(124 150 197)";
}
function changetext(){
    classs[0].innerHTML="New Text"
}
console.log(classs)