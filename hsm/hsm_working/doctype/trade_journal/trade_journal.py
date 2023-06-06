# Copyright (c) 2023, Pratik Mane and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TradeJournal(Document):
	def validate(self):
		self.charges_till_date = len(self.trade_summary) * 65
		gross = sum([i.gross_amount for i in self.trade_summary])
		self.gross_result = gross
		self.net_outcome = self.gross_result - self.charges_till_date 
	pass
