// Copyright (c) 2023, Pratik Mane and contributors
// For license information, please see license.txt

frappe.ui.form.on('Trade Journal', {
	// refresh: function(frm) {

	// }
	gross_result:function(frm){

	}
});
frappe.ui.form.on('Trade Summary', {
	refresh(frm) {
		// your code here
	},
	sell_value(frm,cdt,cdn){
    var row = locals[cdt][cdn];
	    if(row.sell_value){
	  	    if(row.buy_value){
              row.captured_points = row.sell_value - row.buy_value
              row.gross_amount = (row.sell_value - row.buy_value) * row.qty
              cur_frm.refresh_fields("captured_points");
              cur_frm.refresh_fields("gross_amount");
              cur_frm.refresh_fields("charges_till_date");
    	    }

	    }
	},
  qty:function(frm,cdt,cdn){
    var row = locals[cdt][cdn]
    frappe.model.set_value(cdt,cdn, 'gross_amount',(row.sell_value - row.buy_value) * row.qty);
  }
});
