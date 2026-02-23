function travail(){
    let np=document.getElementById("no").value ;
    let d=document.getElementById("dt").value ;
    let ge=document.getElementsByName("ge");
    let ni=document.getElementById("s1");
    let q1=document.getElementsByName("r1");
    let q2=document.getElementsByName("r2");
    let q3=document.getElementsByName("cb");
    let q4=document.getElementById("s2");
    if(np==""){
        alert("verifier votre nom et prenom")
        return false
    }
    else if(d==""){
        alert("verifier votre date de naissance")
        return false
    }
    else if(ge[0].checked==false && ge[1].checked==false){
        alert("verifier votre genre")
        return false 
    }
    else if(ni==0){
        alert("verifier votre niveau")
        return false
    }
    else{
        Afficher(np,ni,q1,q2,q3,q4)
    }
}
function Afficher(np,ni,q1,q2,q3,q4){
    let nt=0
    let nc=0
    if(q1[0].checked){
        nt=nt+2
        nc++
    }
    if(q2[1].checked){
        nt=nt+2;
        nc++;
    }
    if(q3[0].checked==false && q3[1].checked && q3[2].checked){
        nt=nt+3;
        nc++;
    }
    if(q4.selectedIndex==2){
        nt=nt+3;
        nc++;
    }
    let ind=ni.selectedIndex ;
    document.getElementById("p1").innerHTML="votre nom et prénom "+np
    document.getElementById("p2").innerHTML="votre niveau est "+ni[ind].textContent
    document.getElementById("p3").innerHTML="Nombre de réponses correctes est "+String(nc)
    document.getElementById("p4").innerHTML="votre note est "+String(nt)
}
function nombre(){
    let ra=document.getElementById("ra").value;
    document.getElementById("op").innerHTML=ra;
}
function init(){
    let vmin=document.getElementById("ra").min;
    let vmax=document.getElementById("ra").max;
    document.getElementById("mi").innerHTML="min "+vmin
    document.getElementById("maa").innerHTML="max "+vmax
}