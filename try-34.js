/*C = ((F-32)/9)*5
F = ((C/5)*9)+32*/
function calc_f(){
    c = document.getElementById("cInput").value;
    answer = Math.round(((c/5)*9)+32);
    document.getElementById("fInput").value=answer;
}
function calc_c(){
    f = document.getElementById("fInput").value;
    answer = Math.round(((f-32)/9)*5);
    document.getElementById("cInput").value=answer;
}
