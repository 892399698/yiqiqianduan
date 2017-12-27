
export default {
	success(text=UDL.g('tip.success.success')){
		alert(text);
	},
	error(text=UDL.g('tip.error.fail')){
		alert(text);
	}
}