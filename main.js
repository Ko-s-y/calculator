tmp = "";  //入力された数字
tmpTotal = "0";  //入力された数字の合計
preOpe = "";  //現在選択している演算子

//  数字ボタン押下時
function pickNum(num) {  
  if (preOpe == "=") {
    allClear();
  }
  if (document.calculator.result.value == "0" || document.calculator.result.value == "00") {
    tmp = num;
  } else {
    tmp = tmp + num;
  }
  document.calculator.result.value = tmp;
}

//  演算子ボタン押下時
function calculate(ope) {
  if (preOpe == "") {
    tmpTotal = tmp;  
  } else if (preOpe == "=") {
    tmptotal = tmpTotal;
  } else {
    tmpTotal = eval(tmpTotal + preOpe + tmp);
  }
  document.calculator.result.value = tmpTotal;
  tmp = "";
  preOpe = ope;
  document.getElementById("process").innerHTML = preOpe;
}

//  ACボタン押下時
function allClear() {  	
  document.calculator.result.value = "0";
  tmp = "";
  tmpTotal = "0";
  preOpe = "";
  document.getElementById("process").innerHTML = "state";
}

//  Cボタン押下時
function tmpClear() {  
  tmp = "";
  document.calculator.result.value = "";
}

//  .ボタン押下時
function pickDotto() { 
  if (tmp == "" || tmp == "00") {
    tmp = "0" + ".";
  }
	if (tmp.indexOf(".") < 0) {  //"."が見つからなければ-1を返す為
    tmp = tmp + ".";
  }
  document.calculator.result.value = tmp;
}