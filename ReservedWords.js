// In JavaScript you cannot use these reserved words as variables, labels, or function names:
// abstract	arguments	async *	await *
// boolean	break	byte	case
// catch	char	class *	const *
// continue	debugger	default	delete
// do	double	else	enum *
// eval	export *	extends *	false
// final	finally	float	for
// function,	goto,	if,	implements
// function	import *	in	instanceof
// int	interface	let *	long
// native	new	null	package
// private	protected	public *	return
// short	static *	super *	switch
// synchronized	this	throw	throws
// transient	true	try	typeof
// using *	var	void	volatile
// while	with	yield *


// The following reserved words was removed from the ECMAScript 5/6 standard:
// abstract	boolean	byte	char
// double	final	float	goto
// int	long	native	short
// synchronized	throws	transient	volatile


// Avoid using the name of JavaScript built-in objects, properties, and methods:
// Array	Date	eval	function
// hasOwnProperty	Infinity	isFinite	isNaN
// isPrototypeOf	length	Math	NaN
// name	Number	Object	prototype
// String	toString	undefined	valueOf

// Avoid using the name of HTML and Window objects and properties:
// alert	all	anchor	anchors
// area	assign	blur	button
// checkbox	clearInterval	clearTimeout	clientInformation
// close	closed	confirm	constructor
// crypto	decodeURI	decodeURIComponent	defaultStatus
// document	element	elements	embed
// embeds	encodeURI	encodeURIComponent	escape
// event	fileUpload	focus	form
// forms	frame	innerHeight	innerWidth
// layer	layers	link	location
// mimeTypes	navigate	navigator	frames
// frameRate	hidden	history	image
// images	offscreenBuffering	open	opener
// option	outerHeight	outerWidth	packages
// pageXOffset	pageYOffset	parent	parseFloat
// parseInt	password	pkcs11	plugin
// prompt	propertyIsEnum	radio	reset
// screenX	screenY	scroll	secure
// select	self	setInterval	setTimeout
// status	submit	taint	text
// textarea	top	unescape	untaint
// window		


// In addition you should avoid using the name of all HTML event handlers.

// Examples:
// onblur	onclick	onerror	onfocus
// onkeydown	onkeypress	onkeyup	onmouseover
// onload	onmouseup	onmousedown	onsubmit