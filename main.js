tmp = "";  //入力された数字
tmpTotal = "0";  //入力された数字の合計
preOpe = "";  //現在選択している演算子

//  数字ボタン押下時
function pickNum(num) {  
  if (preOpe == "=") {
    allClear();  //"="演算子が押された直後の場合は初期化
  }
  if (document.calculator.result.value == "0" || 
      document.calculator.result.value == "00") {
    tmp = num;  //先頭に0がつくのを防ぐ
  } else {
    tmp = tmp + num;  //数字ﾎﾞﾀﾝを、押された順番に並べる
  }
  document.calculator.result.value = tmp;  //表示欄に表示
}

//  演算子ボタン押下時
function calculate(ope) {
  if (preOpe == "") {  //演算子ﾎﾞﾀﾝが一度も押されていない場合
    tmpTotal = tmp;  
  } else if (preOpe == "=") {
    tmptotal = tmpTotal;  //現在の数字の合計が結果に
  } else {
    tmpTotal = eval(tmpTotal + preOpe + tmp);  //直前に押された演算子で計算
  }
  document.calculator.result.value = tmpTotal;
  tmp = "";  //入力された数字を初期化
  preOpe = ope;  //今押された演算子を、直前に押された演算子として保持
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
  if (tmp == "" || 
      tmp == "00") {  //未入力時or00の時先頭に0を追加
    tmp = "0" + ".";
  }
	if (tmp.indexOf(".") < 0) {  //.が見つからなければ-1を返す為
    tmp = tmp + ".";
  }
  document.calculator.result.value = tmp;
}