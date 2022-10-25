//Bussiness Api Table Start
$.fn.dataTable.ext.search.push(
	function( settings, data, dataIndex ) {
		var api_product_name = $('#api_product_name').val();
		var api_product_category = $('#api_product_category').val();
		
		var product_category =  data[0];
		var product_name =  data[1];
		if(api_product_category == 'all'){
			product_category = 'all';
		}
		if ( product_name.indexOf(api_product_name) != -1 && product_category.indexOf(api_product_category) != -1){
			return true;
		}
		return false;
	}
);
	
$(document).ready(function() {
	
	 
	var table = $('#apidata').DataTable( {
		'paging': false,
		/*"lengthMenu": [[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, -1], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, "All"]],
		"oLanguage": {
		  //"sZeroRecords": "No records to displays",
		  "sLengthMenu": "_MENU_ records per pages",
		},*/
	} );
	$('.api-search-icon').click( function() {
		table.draw();
	} );
	//Bussiness Api Table End
	
	
} );