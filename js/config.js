
//form表单的id
var formID = "form_one";

/* 验证的正则表达式 */
var regExp = {
	/*用户名要求 数字、字母、下划线的组合，其中数字和字母必须同时存在*/
	name : /^(?![^A-Za-z]+$)(?![^0-9]+$)[0-9A-Za-z_]{6,12}$/,
	/*密码：8-12位，由字母数字下划线组成 */
	pwd : /^[\w]{8,12}$/,
	/* 手机号 13开头、15开头（154除外）、180、186~189开头的*/
	tel : /^(13\d|15[0-3]|15[4-9]|180|18[6-9])\d{8}$/,
	/* 身份证号 */
	idCard : /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
	/* 邮箱 */
	email : /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
}

/* 提示语 */
var warns = {
	Error : "输入有误！",
	Empty : "不能为空！",
	Pass : "合格！"
}