// complete the given function

function palindrome(str){
	let ch="";
	for(int i=(str.length-1);i>0;i--){
		ch+=str[i];
	}
	if(ch==str){
		return true;
	}else{
		return false;
	}

}
module.exports = palindrome
