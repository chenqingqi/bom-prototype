/**
 * 重写alert
 */
window.alert = function(value)
{
	var node = document.createElement('div');
	node.style.width = '100%';
	node.style.height = '100%';
	node.style.position = 'fixed';
	node.innerText = value;
	document.body.appendChild(node);
}
