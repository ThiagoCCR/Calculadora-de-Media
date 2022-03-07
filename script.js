let results = 0;
function getMedia(){
    let firstResult = document.getElementById("firstGrade").value;
    console.log(firstResult);
    let secondResult = document.getElementById("secondGrade").value;
    console.log(secondResult);
    let thirdResult = document.getElementById("thirdGrade").value;
    console.log(thirdResult);
    let fourthResult = document.getElementById("fourthGrade").value;
    console.log(fourthResult);
    results = ((firstResult + secondResult + thirdResult + fourthResult)/4).toFixed(1);
    console.log(results)
    displayResults();
}
function displayResults(){
    let resultInput = document.querySelector(".result");
    resultInput = "";
    resultInput = `
        Sua média é ${results}
    `
}