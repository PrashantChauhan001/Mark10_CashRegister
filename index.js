let
    tt = document.getElementById("tt"),
    fh = document.getElementById("fh"),
    oh = document.getElementById("oh"),
    twenty = document.getElementById("twenty"),
    ten = document.getElementById("ten"),
    five = document.getElementById("five"),
    one = document.getElementById("one"),
    ot_txt = document.getElementById("ot_txt"),
    notesCountArr = [tt, fh, oh, twenty, ten, five, one];

const notesCount = () => {
    const
        cash = document.getElementById("cash").value,
        bill = document.getElementById("bill").value;
    if (!bill || !cash) {
        ot_txt.innerText = "Enter empty field";
        ot_txt.style.color = "red"
        notesCountArr.map(ele => ele.innerText = 0);
        return;
    }
    let returnCash = cash - bill,
        dummy = returnCash;
    if (returnCash < 0) {
        ot_txt.innerText = "you are going to wash dices my friend...";
        ot_txt.style.color = "orange"
        notesCountArr.map(ele => ele.innerText = 0);
    } else {
        tt.innerText = Math.floor(returnCash / 2000);
        returnCash = returnCash - 2000 * tt.innerText;
        fh.innerText = Math.floor(returnCash / 500);
        returnCash = returnCash - 500 * fh.innerText;
        oh.innerText = Math.floor(returnCash / 100);
        returnCash = returnCash - 100 * oh.innerText;
        twenty.innerText = Math.floor(returnCash / 20);
        returnCash = returnCash - 20 * twenty.innerText;
        ten.innerText = Math.floor(returnCash / 10);
        returnCash = returnCash - 10 * ten.innerText;
        five.innerText = Math.floor(returnCash / 5);
        returnCash = returnCash - 5 * five.innerText;
        one.innerText = Math.floor(returnCash / 1);
        returnCash = returnCash - 1 * one.innerText;
        ot_txt.innerText = `Return amount is ${Math.floor(dummy)}. And minimum notes are:-`
        ot_txt.style.color = "green"
    }
    console.log("run", bill, cash)
    ot_txt = "helllo"
}

document.getElementById("btn").addEventListener("click", () => notesCount());