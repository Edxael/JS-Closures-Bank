console.log("Bank 3");


function bank(accNum, name, phone){

    var account ={
        accNumber: accNum,
        accName: name,
        accPhone: phone,
        balance: 0,
        dep1: function(num){ account.balance += num;},
        wit2: function(num){ account.balance += num;}
    }

    return function(){
        return account;
    }
}





// ------------------  Code to Do Everything Else  ---------------------------------------------


    // Data base to storate Accounts
var dataBase ={ };


    // Create the Account
function createAccount(){
    console.log("Creating Account:");
    dataBase[document.getElementById("1").value] = new bank(document.getElementById("1").value,  document.getElementById("2").value,  document.getElementById("3").value );
    console.log(dataBase);

    for(var x = 1; x < 4; x++){
        document.getElementById(x).value = "";
    }
}


    // Deposit Funds
function outDep(){
    var num = parseInt(document.getElementById("per1").value);
    var a2d = document.getElementById("per2").value;
    console.log("\ninside outDep ");
    console.log(typeof a2d);
    var holder = dataBase[a2d]();
    console.log(holder);

    console.log("Balance: " + holder.balance );

    holder.balance += num;
    console.log("Balance: " + holder.balance );

    document.getElementById("per1").value = "";
    document.getElementById("per2").value = "";
}


    // Display information on HTML
function display(){

    // Creating new HTML Paragrap with specific text and color
    var a2d = document.getElementById("acc2disp").value;
    var holder2 = dataBase[a2d]();
    var new_P = document.createElement("p");
    new_P.innerText = ("Balance: " + holder2.balance );

    var div1 = document.getElementById("div-p");
    div1.insertBefore(new_P, div1.childNodes[0]);

    document.getElementById("acc2disp").value = "";
}









// function createAccount(){
//     console.log("Creating Account:");
//     dataBase[document.getElementById("in-accn").value] = new bank(document.getElementById("in-accn").value,  document.getElementById("in-name").value,  document.getElementById("in-phon").value,  document.getElementById("in-bala").value  );
//     console.log(dataBase);
//
//     document.getElementById("in-accn").value = "";
// }





// var alex = new bank("Alex", 123);
//
// function outDep(){
//     console.log("inside outDep \n");
//
//     var holder = alex();
//     console.log("\nBefore Function: ");
//     console.log(holder.balance );
//
//     holder.dep1(5);
//
//     console.log("\nAftter Function: ");
//     console.log(holder.balance);
// }
