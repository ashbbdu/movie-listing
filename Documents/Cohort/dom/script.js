

// const h1 = document.createElement("h1");
// const main = document.getElementById("main")
// h1.textContent = "Hi I am a heading";
// h1.setAttribute("class" , "ash bsh")

// main.appendChild(h1)

// let btn = document.getElementById("button") 
// let data = document.getElementById("data")
// btn.addEventListener("click" , () => {
//     let fname = document.getElementById("firstName").value;
//     let lname = document.getElementById("lastName").value;
//     data.textContent = `${fname} ${lname}`
// })

const handleSubmit = (event) => {
    event.preventDefault()
    let data = document.getElementById("data")
    let fname = document.getElementById("firstName").value;
    let lname = document.getElementById("lastName").value;
    data.textContent = `${fname} ${lname}`
}

const calculateSum = (event) => {
    event.preventDefault();
    const value1 = document.getElementById("firstValue").value;
    const value2 = document.getElementById("secondValue").value;
    document.getElementById("sum").innerHTML = parseInt(value1) + parseInt(value2)
}