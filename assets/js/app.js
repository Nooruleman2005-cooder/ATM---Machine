var balance = 500000; 
var pinEntered = false;
function submitPin() {
    var input = document.getElementById("input").value;
    if (input === "") {
            document.getElementById("message").innerText = "Please Enter Your PIN!";
    } else {
            pinEntered = true;
            document.getElementById("message").innerText = "PIN Accepted. You May Proceed!";
    }
}
function checkBalance() {
    if (pinEntered) {
        document.getElementById("input").value = balance;
        document.getElementById("message").innerText = "Your Balance Is Displayed.";
    } else {
        document.getElementById("message").innerText = "Please Enter Your PIN First!";
    }
}
function deposit() {
    if (pinEntered) {
        var amount = prompt("Enter The Amount To Deposit:");
        if (amount) {
            balance += parseInt(amount);
            document.getElementById("message").innerText = "Amount Deposited. New Balance Is " + balance;
        } else {
            document.getElementById("message").innerText = "No Amount Entered.";
        }
    } else {
        document.getElementById("message").innerText = "Please Enter your PIN First!";
    }
}
function withdraw() {
    if (pinEntered) {
        var amount = prompt("Enter The Amount To Withdraw:");
        if (amount && parseInt(amount) <= balance) {
            balance -= parseInt(amount);
            document.getElementById("message").innerText = "Amount Withdrawn. New Balance Is " + balance;
        } else if (parseInt(amount) > balance) {
            document.getElementById("message").innerText = "Insufficient Balance!";
        } else {
            document.getElementById("message").innerText = "No Amount Entered.";
        }
    } else {
        document.getElementById("message").innerText = "Please Enter Your PIN First!";
    }
}
function transfer() {
    if (pinEntered) {
        var amount = prompt("Enter The Amount To Transfer:");
        if (amount && parseInt(amount) <= balance) {
            balance -= parseInt(amount);
            document.getElementById("message").innerText = "Amount Transferred. New Balance Is " + balance;
        } else if (parseInt(amount) > balance) {
            document.getElementById("message").innerText = "Insufficient Balance!";
        } else {
            document.getElementById("message").innerText = "No Amount Entered.";
        }
    } else {
        document.getElementById("message").innerText = "Please Enter Your PIN First!";
    }
}
