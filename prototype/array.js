/**
 * 获取数组中最小的值
 */
Array.prototype.min = function()
{
	return Math.min.apply(null,this);
}


/**
 * 获取数组中最大的值
 */
Array.prototype.max = function()
{
	return Math.max.apply(null,this);
}


/**
 * 元素去重
 */
Array.prototype.unique = function()
{

    //临时数组
    var n = [];

    //遍历当前数组
    for(var i = 0; i < this.length; i++)
    {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，否则把当前项push到临时数组里面
        if(n.indexOf(this[i]) == -1)
        {
            n.push(this[i]);
        }
    }

    return n;
}