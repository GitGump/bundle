function Radio(id, data, value, cb)
{
	this.radio = document.getElementById(id);
	this.radio.value = value;
	this.data = data;
	this.value = value;
	this.cb = cb;

	Radio.prototype.radioInit = function() {
		if (this.data && this.data.length) {
			for (var i = 0; i < this.data.length; i++) {
				var li = document.createElement('li');
				var input = document.createElement('input');
				input.type = 'button';
				input.className = 'radio';
				input.value = this.data[i].value;
				if (this.value === input.value) {
					// chosen radio according to initial value
					input.className += ' chosen';
				} else {
					// other radios: add unchosen class
					input.className += ' unchosen';
				}
				li.appendChild(input);
				var label = document.createElement('label');
				label.className = 'noteLbl';
				label.innerHTML = data[i].name;
				label.style.cursor = 'pointer';
				label.style.lineHeight = '32px';
				li.appendChild(label);
				this.radio.appendChild(li);
			}
			// add event listener
			this.radio.onclick = this.radioClick();
		} else {
			console.dir(this.radio);
			console.error("Radio.radioInit error: requests 1 radio at least!");
		}
	}

	Radio.prototype.radioClick = function() {
		var that = this;
		return function() {
			var inputs = $('#' + id + ' li input');
			for (var i = 0; i < inputs.length; i++) {
				var input = $(inputs[i]);
				if(input.hasClass('chosen')) {
					// former chosen radio: remove chosen class, add unchosen class
					input.toggleClass('chosen');
					input.toggleClass('unchosen');
				}
			}
			event = event || window.event;
			var target = event.target || event.srcElement;
			var radio;
			if (target.nodeName === 'INPUT') {
				// click input node
				radio = $(target);
			} else if(target.nodeName === 'LI') {
				// click li node
				radio = $(target.firstChild);
			} else {
				// click label node
				radio = $(target).prev();
			}
			// current chosen radio: add chosen class, remove unchosen class
			radio.toggleClass('chosen');
			radio.toggleClass('unchosen');
			// update value
			that.value = radio[0].value;
			that.radio.value = radio[0].value;
			// fire callback function if exists
			if (typeof that.cb === 'function') {
				that.cb(that.value);
			}
		}
	}

	Radio.prototype.setValue = function(value) {
		var oldValue = this.value;
		var newValue = value;
		var inputs = $('#' + id + ' li input');
		for (var i = 0; i < inputs.length; i++) {
			var input = $(inputs[i]);
			if (inputs[i].value === oldValue || inputs[i].value === newValue) {
				// former chosen radio: remove chosen class, add unchosen class
				// current chosen radio: remove unchosen class, add chosen class
				input.toggleClass('chosen');
				input.toggleClass('unchosen');
			}
		}
		// update value
		this.value = newValue;
		this.radio.value = newValue;
	}

	this.radioInit();
}