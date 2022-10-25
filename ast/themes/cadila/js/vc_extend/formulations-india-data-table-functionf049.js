$(document).ready(function() {
	
	//Formulations India Tab Table Start
	$.fn.dataTable.ext.search.push(
		function( settings, data, dataIndex ) {
			if ( settings.nTable.id !== 'findia' ) {
				return true;
		  	}
			var india_brand_name = $('#india_brand_name').val();
			india_brand_name = india_brand_name.toLowerCase();
			
			
			var brand_name =  data[1];
			brand_name =  brand_name.toLowerCase();
			
			if ( brand_name.indexOf(india_brand_name) != -1 ){
				return true;
			}
			return false;
		}
	);
	 
	var table = $('#findia').DataTable( {
		'paging': true,
		//"lengthMenu": [[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, -1], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, "All"]],
		"pageLength": 25,
		"bInfo" : false,
		//"ordering": false,
		//"sPaginationType":"full_numbers",
		"language": {
			"search": "Search by Generic Name",
			"sLengthMenu": "",
			"paginate": {
				//"first":      "<i class='fa fa-angle-double-left' aria-hidden='true'></i>",
				//"last":       "<i class='fa fa-angle-double-right' aria-hidden='true'></i>",
				"next":       "<i class='fa fa-angle-right' aria-hidden='true'></i>",
				"previous":   "<i class='fa fa-angle-left' aria-hidden='true'></i>"
			}
		},
		"fnDrawCallback": function(oSettings) {
		   if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
			   $(oSettings.nTableWrapper).find('.dataTables_paginate').hide();
		   }
		   else
		   {
			   $(oSettings.nTableWrapper).find('.dataTables_paginate').show();
		   }
	   }
	} );
	$('.dataTables_filter input').attr("placeholder", "Generic Name");
	$('#findsearchbtn').click( function() {
		table.draw();
		//table.search( this.value ).draw();
		//table.search($('#india_brand_name').val(), false, true)
	} );
	//Formulations India Tab Table Table End
} );