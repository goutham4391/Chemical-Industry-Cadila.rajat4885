$(document).ready(function() {
	
	//Formulations India Tab Table Start
	$.fn.dataTable.ext.search.push(
		function( settings, data, dataIndex ) {
			if ( settings.nTable.id !== 'finternational' ) {
				return true;
		  	}
			var generic_name = $('#generic_name').val();
			generic_name = generic_name.toLowerCase();
			/*var findia_category = $('#findia_category').val();
			findia_category = findia_category.toLowerCase();*/
			
			var GenericName =  data[1];
			GenericName =  GenericName.toLowerCase();
			/*var india_category =  data[2];
			india_category =  india_category.toLowerCase();
			if(findia_category == 'all'){
				india_category = 'all';
			}*/
			if ( GenericName.indexOf(generic_name) != -1 ){
				return true;
			}
			return false;
		}
	);
	 
	var table = $('#finternational').DataTable( {
		'paging': true,
		//"lengthMenu": [[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, -1], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, "All"]],
		"pageLength": 25,
		"bInfo" : false,
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
	$('#fintntnl').click( function() {
		table.draw();
		//table.search( this.value ).draw();
		//table.search($('#generic_name').val(), false, true)
	} );
	//Formulations India Tab Table Table End	
} );