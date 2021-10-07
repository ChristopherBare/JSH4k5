//reveal passwords in forms
javascript: var p=r(); function r(){var g=0;var x=false;var x=z(document.forms);g=g+1;var w=window.frames;for(var k=0;k<w.length;k++) {var x = ((x) || (z(w[k].document.forms)));g=g+1;}if (!x) alert('Password not found in ' + g + ' forms');}function z(f){var b=false;for(var i=0;i<f.length;i++) {var e=f[i].elements;for(var j=0;j<e.length;j++) {if (h(e[j])) {b=true}}}return b;}function h(ej){var s='';if (ej.type=='password'){s=ej.value;if (s!=''){prompt('Password found ', s)}else{alert('Password is blank')}return true;}}
//make the cursor spin
javascript:iV33MaET=0;Cu4Xg8Y=new Array('n-resize','nw-resize','w-resize','sw-resize','s-resize','se-resize','e-resize','ne-resize');setInterval('iV33MaET++;document.body.style.cursor=Cu4Xg8Y[iV33MaET%8]',150)
//date and time
javascript:var dt78KwZ9=new Date();alert(dt78KwZ9.toLocaleString())
//beautify
javascript:WebFontConfig={google:{families:["Quicksand::latin"]}},function(){var a=document.createElement("script");a.src="https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",a.type="text/javascript",a.async="true";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();(function(){var elems=document.getElementsByTagName("*");for(var i = 0; i<elems.length;i++){elems[i].style.fontFamily="Quicksand";document.body.style.background="black"; elems[i].style.color="white"}})();
