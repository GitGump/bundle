this.initCheckboxBd = function()
{
	var checkboxs = $('input.checkbox');
	if (checkboxs && checkboxs.length) {
		for (var i = 0; i < checkboxs.length; i++) {
			var checkbox = checkboxs[i];
			var hasChecked = $(checkbox).hasClass('checked');
			var hasUnchecked = $(checkbox).hasClass('unchecked');
			if (!hasChecked && !hasUnchecked) {
				// set unchecked state as default
				checkbox.className += ' unchecked';
			}
			// set value
			if (hasChecked) {
				checkbox.checked = true;
			} else {
				checkbox.checked = false;
			}
		}
	}
	checkboxs.bind('click', function() {
		$(this).toggleClass('checked');
		$(this).toggleClass('unchecked');
		this.checked = !this.checked;
	});
}

this.setCheckboxValue = function(id, value, cb)
{
	var checkbox = document.getElementById(id);
	if (value) {
		checkbox.className = 'checkbox checked';
	} else {
		checkbox.className = 'checkbox unchecked';
	}
	checkbox.checked = value;
	if (typeof cb === 'function') {
		cb(value);
	}
}