
var form_one = document.getElementById(formID);    /* 表单获取 */
var dataBox = document.getElementById("dataBox");   /* 装表单的DIV */
var warnSpan = dataBox.getElementsByTagName("span"); /* 错误提示span */ 
var btn = document.getElementById("btn");    /* 提交 */
form_one.onkeyup = form_one.onchange = form_one.onclick = function(e){
	var e = e || window.event;
	/* 运用了事件委托，但只有input框的事件有响应 */
	if (e.target.tagName.toLocaleLowerCase() === "input") {
		var aim = document.getElementById(e.target.name + "_text"); 
		switch (verify(e.target.name, e.target.value)){
			case -1:
				showState( aim, "red", warns.Error);
				break;
			case 1:
				showState( aim, "white", warns.Pass);
				break;
			case 2:
				showState( aim, "red", warns.Empty);
				break;
			default:
				showState( aim, "red", warns.Error);
				break;
		}
	}
	event.stopPropagation();   /* 阻止冒泡 */
}

/* 
 * 状态显示 
 * obj(改变的对象)、color(颜色)、words(提示语)
 * */
function showState(obj, color, words){
	obj.style.display = "";
	obj.style.color = color;
	obj.innerHTML = words;
}

/* 验证函数，根据名字匹配不同的正则，然后验证对应的值*/
function verify( name, value ){
	switch (name){
		case "name":
			return regexp( regExp.name, value);
		case "password":
			return regexp( regExp.pwd, value);
		case "tel":
			return regexp( regExp.tel, value);
		case "idCard":
			return regexp( regExp.idCard, value);
		case "email":
			return regexp( regExp.email, value);
		default:
			return -1;
	}
}
/* 正则匹配 */
function regexp( reg, value){
	if(value.match(reg)){
		return 1;    /* 合格 */
	}else if( value == "" ){
		return 2;    /* 不能为空 */
	}else{
		return -1;   /* 错误 */
	}
}
/* 提交 */
btn.onclick = function(e){
	var e = e || window.event;
	var state = false;  /* 提交的状态 */
	for (var i=0; i<warnSpan.length; i++) {
		if (warnSpan[i].innerHTML == warns.Pass) {
			state = true;
		}else{
			state = false; /* 有一个值不通过，就不能提交 */
			warnSpan[i].previousElementSibling.click(); /* 触发点击事件，对其进行验证并提示 */
		}
	}
	/* 判断提交状态，做相应的处理 */
	if (state) {
		alert("注册成功！");
		/* 提交数据代码 */
	}else{
		alert("请检查您的输入是否有误！");
	}
	event.stopPropagation();
};