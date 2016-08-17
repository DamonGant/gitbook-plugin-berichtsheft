const moment = require("moment");

module.exports = {
	hooks: {
		"page:before": function(page) {
			var regexPath = /([0-9]*)\/([0-5][0-9])\.md/;
			if (regexPath.test(page.path)) {
				var matches = page.path.match(regexPath);
				var week = matches[2];
				var year = matches[1];
				var weekStart = moment(year + "W" + week);
				var weekEnd = moment(weekStart).add(4, "days");

				var weekStartStr = weekStart.format("DD.MM.YYYY");
				var weekEndStr = weekEnd.format("DD.MM.YYYY");

				page.content = "# Art der Ausbildungsarbeit\n" + page.content;
				page.content = "# Woche " + week + "/" + year + " (" + weekStartStr + " - " + weekEndStr + ")\n" + page.content
				page.content = page.content + '\n\n# Bemerkungen des Ausbilders\n<div class="notes"></div>';
				page.content = page.content + '\n\n#Unterschriften\n<div class="signatures" style="position:relative; box-sizing: border-box"><div class="signature-field">Datum</div><div class="signature-field">Ausbilder</div><div class="signature-field">Auszubildender</div></div>';
			}
			return page;
		}
	},
	blocks: {},
	filters: {}
}