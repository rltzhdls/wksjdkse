$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/lineage/update/240620/title_bg.mp4#t=0.1";
        document.getElementById('vd').load();
    }
	}
});

