
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var count=arrayOfNums.length;
	var sum=0;
	var i;
	for( i=0;i<count;i++)
		sum=sum+arrayOfNums[i];
	return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var count=arrayOfNums.length;
	var array1=[];
	var count2=array1.length;
	var i;
	var j;
	var flag;
	for(i=0;i<count;i++)
	{
	    flag=0;
		for(j=0;j<count2;j++)
		{
			if(arrayOfNums[i]==array1[j])
				flag=flag+1

		}
		if(flag==0)
		{
			array1[count2]=arrayOfNums[i];
			count2=count2+1;
		}
	}
	var sum=0;
	for(i=0;i<count2;i++)
		sum=sum+array1[i];
	return sum;

}

exports.ReverseString = function(str){
	var count=str.length;
	var string1="";
	var i;
	for(i=count-1;i>=0;i--)
	{
		string1+=str[i];
	}
	return string1;

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){


}