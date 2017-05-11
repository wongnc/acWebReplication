$(document).ready(function(){
	var i = 0,
		contentBarItems = [{item:$('#contentBarItem1'),image:'../acWebReplication/pics/hero.jpg'},{item:$('#contentBarItem2'),image:'../acWebReplication/pics/hero2.jpg'},{item:$('#contentBarItem3'),image:'../acWebReplication/pics/hero3.jpg'}],
		clearClasses = function(contentBar){ // removes active class from the contentbaritem item
			if($("#"+contentBar.item[0].id+"").hasClass('active')){
				$("#"+contentBar.item[0].id+"").removeClass('active')
			}
		},
		forEachObject = function(arr,callBack){ // IE compatibility
			for(var j=0;j<arr.length;j++){
				callBack(arr[j]);
			}
		},
		switchImage = function(){
			forEachObject(contentBarItems,clearClasses);
			for(var k=0;k<contentBarItems.length;k++){	
				if(contentBarItems[k].item[0].id == $(this)[0].id){
					contentBarItems[k].item.addClass('active');
					$('#main-hero').css('background-image', 'url('+ contentBarItems[k].image +')');
					i = k;
				}
			}			
		};
	setInterval(function(){ // carousel image for main-hero changes every 5 seconds and updates content-bar-item to active when it is on main-hero
		$('#main-hero').css('background-image', 'url('+ contentBarItems[i].image +')');
		forEachObject(contentBarItems,clearClasses);
		contentBarItems[i].item.addClass('active');
		i++;
		if(i==3){
			i=0;
		}
	},5000);

	$('#main-hero #content-bar .col-xs-4').click(switchImage);
});