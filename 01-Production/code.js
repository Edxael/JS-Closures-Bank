console.log("Bank 3");


function bank(accNum, name, phone){

    var account ={
        accNumber: accNum,
        accName: name,
        accPhone: phone,
        balance: 0,
        dep1: function(num){ account.balance += num;},
        wit2: function(num){ account.balance -= num;}
    }

    return function(){
        return account;
    }
}





// ------------------  Code to Do Everything Else  ---------------------------------------------


    // Data base to storate Accounts
    console.log("Test 2");
var dataBase = {
    // 101: {
    //     accNumber: "101",
    //     accName: "Elena",
    //     accPhone: "801.987.6543",
    //     balance: 457,
    //     dep1: function(num){ account.balance += num;},
    //     wit2: function(num){ account.balance -= num;}
    // },
    //
    // 102: {
    //     accNumber: 102,
    //     accName: "Teresa",
    //     accPhone: "801.456.7219",
    //     balance: 349,
    //     dep1: function(num){ account.balance += num;},
    //     wit2: function(num){ account.balance -= num;}
    // }

};



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
    console.log("\nDeposit ");
    var num = parseInt(document.getElementById("per1").value);
    var a2d = document.getElementById("per2").value;
    var holder = dataBase[a2d]();

    holder.balance += num;
    console.log("Balance: " + holder.balance );

    document.getElementById("per1").value = "";
    document.getElementById("per2").value = "";
}



// Withdraw Funds
function outWD(){
    console.log("\nWithdraw: ");
    var num = parseInt(document.getElementById("per1").value);
    var a2d = document.getElementById("per2").value;
    var holder = dataBase[a2d]();

    holder.balance -= num;
    console.log("Balance: " + holder.balance );

    document.getElementById("per1").value = "";
    document.getElementById("per2").value = "";
}






    // Display information on HTML
function display(){

    document.getElementById("div-p").innerHTML = "";

    // Creating new HTML Paragrap with specific text and color
    var a2d = document.getElementById("acc2disp").value;
    var holder2 = dataBase[a2d]();


    var new_P1 = document.createElement("p");
    new_P1.innerText = ("Account Number: " + holder2.accNumber );
    var div1 = document.getElementById("div-p");
    div1.insertBefore(new_P1, div1.childNodes[0]);

    var new_P2 = document.createElement("p");
    new_P2.innerText = ("Hoder of Account: " + holder2.accName );
    var div2 = document.getElementById("div-p");
    div2.insertBefore(new_P2, div2.childNodes[1]);

    var new_P3 = document.createElement("p");
    new_P3.innerText = ("Phone Number: " + holder2.accPhone );
    var div3 = document.getElementById("div-p");
    div3.insertBefore(new_P3, div3.childNodes[2]);

    var new_P4 = document.createElement("p");
    new_P4.innerText = ("Balance: " + holder2.balance );
    var div4 = document.getElementById("div-p");
    div4.insertBefore(new_P4, div4.childNodes[3]);

    document.getElementById("acc2disp").value = "";
}



function logOut() {
    console.log("Inside of logOut()");
    window.location = "index.html";
}





// Transfer services
// Display information on HTML
function transfer(){

    document.getElementById("div-p").innerHTML = "";

    // Creating new HTML Paragrap with specific text and color

    var data1 = document.getElementById("trans-1").value;
    var new_P1 = document.createElement("p");
    new_P1.innerText = ("Recipient: " + data1 );
    var div1 = document.getElementById("div-p");
    div1.insertBefore(new_P1, div1.childNodes[0]);
    document.getElementById("trans-1").value = "";


    var data2 = document.getElementById("trans-2").value;
    var new_P2 = document.createElement("p");
    new_P2.innerText = ("Recipient's Phone Number: " + data2 );
    var div2 = document.getElementById("div-p");
    div2.insertBefore(new_P2, div2.childNodes[1]);
    document.getElementById("trans-2").value = "";


    var data3 = document.getElementById("trans-3").value;
    var new_P3 = document.createElement("p");
    new_P3.innerText = ("Amount Transfer: " + data3 );
    var div3 = document.getElementById("div-p");
    div3.insertBefore(new_P3, div1.childNodes[2]);
    document.getElementById("trans-3").value = "";


    // var data3 = document.getElementById("trans-3").value;
    var ran1 = Math.floor(Math.random() * (9999999 - 1111111)) + 1111111;
    var new_P4 = document.createElement("p");
    new_P4.innerText = ("Transfer Key: JS" + ran1 );
    var div4 = document.getElementById("div-p");
    div4.insertBefore(new_P4, div1.childNodes[3]);


}
