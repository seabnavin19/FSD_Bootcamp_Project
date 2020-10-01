<template>
    <div class="footer" id="footer-area">
		<div class="inner-footer">
			
			<div class="footer-item">
				<h2>Unibox</h2>
				<ul>
					<a href=""><li>Unibox is a website that</li></a>
					<a href=""><li>provide many</li></a>
					<a href=""><li>information</li></a>
					<a href=""><li>university</li></a>
				</ul>
			</div>
			<div class="footer-item">
				<h3>Cotact us</h3>
				<ul>
					<a href=""><li>+855 96 97 98 99</li></a>
					<a href=""><li>unibox@gmail.com</li></a>
				</ul>
			</div>
			<div class="footer-item">
				<h3>Information</h3>
				<ul>
					<a href=""><li>About Us</li></a>
					<a href=""><li>FAQ</li></a>
					<a href=""><li>Terms and Condition</li></a>
					<a href=""><li>Privacy Policy</li></a>
				</ul>
			</div>
			<div class="footer-item">
				<h3>Follow Us</h3>
				<ul>
					<a href=""><li>Facbook</li></a>
					<a href=""><li>Instagram</li></a>
					<a href=""><li>Twitter</li></a>
					<a href=""><li>Youtube</li></a>
				</ul>
			</div>
		</div>	
	</div>

</template>
<style>
*{
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}
.body-content{
	width: 80px;
	padding: 10px;
	text-align: justify;
	box-sizing: border-box;
	font-size:18px;
	line-height: 40px;
}
.footer{
	width: 100%;
	background:white;
	display: block;

}
.inner-footer{
	width: 100%;
	margin:auto;
	margin-left: auto;
	padding:5px 10px;
	display: flex;
	justify-content: center;
	
}
.footer-item{
	width: 13%;
	padding: 5px 2px;
	box-sizing: border-box;
	margin-left: 150px;

}
.footer-item p{
	color:grey;
	font-size: 16px;
	text-align: justify;
	line-height: 25px;
}
h2{
	margin: 10px 0;
	font-size: 16px;
	font-weight:lighter;
	text-transform: uppercase;
	font: italic normal bold 20px/28px Lato;
	letter-spacing: 0px;
	color: #707070;
	opacity: 1;
}
h3{
	margin: 10px 0;
	font-size: 16px;
	font-weight:lighter;
	font: normal normal normal 18px/26px Source Sans Pro;
	letter-spacing: 0px;
	color: #575757;
	opacity: 1;
}
ul{
	list-style: none;
	color:gray;
	font-size:13px;
	letter-spacing: 0.5px;	
}
ul a{
	text-decoration:none;
	outline:none;
	color:gray;
	transition:0.2s;

}
ul a:hover{
	margin: 10px;
	height: 25px;
}
#footer-area{

box-shadow: 0px -2px 2px 0px rgba(0,0,0,0.5);
}

</style>