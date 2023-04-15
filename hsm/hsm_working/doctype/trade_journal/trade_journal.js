// Copyright (c) 2023, Pratik Mane and contributors
// For license information, please see license.txt

frappe.ui.form.on('Trade Journal', {
	// refresh: function(frm) {

	// }
});
frappe.ui.form.on('Trade Summary', {
	refresh(frm) {
		// your code here
	},
	sell_value(frm,cdt,cdn){
    var row = locals[cdt][cdn];
	    console.log("sell_value function called from code")
	    if(row.sell_value){
	        console.log("sell value is available from code")
    	    if(row.buy_value){
    	        console.log("buy_value is available from code")
    	        console.log("Calculating captured value from code")
              row.captured_points = row.sell_value - row.buy_value
              row.gross_amount = (row.sell_value - row.buy_value) * row.qty
              //frappe.model.set_value(cdt,cdn,"captured_points",row.sell_value - row.buy_value);
              //frappe.model.set_value(cdt,cdn,"gross_amount",(row.sell_value - row.buy_value)*row.qty);
              cur_frm.refresh_fields("captured_points");
              cur_frm.refresh_fields("gross_amount");
    	        //frappe.set_value(frm.captured_points,frm.sell_value - frm.buy_value)

    	    }

	    }
	},
	captured_points(frm){

	    console.log("captured points are added from code")
	}
});
