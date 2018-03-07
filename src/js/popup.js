function Popup()
{
	this.initPopup = function() {
		var popup = document.createElement('div');
		popup.className = 'popup';
		popup.id = 'popup';

		var popupHeader = document.createElement('div');
		popupHeader.className = 'popup-header';
		var popupTitle = document.createElement('h4');
		popupTitle.className = 'popup-title';
		popupHeader.appendChild(popupTitle);
		popup.appendChild(popupHeader);

		var popupBody = document.createElement('div');
		popupBody.className = 'popup-body';
		var popupIcon = document.createElement('div');
		popupIcon.className = 'popup-icon';
		popupBody.appendChild(popupIcon);
		var popupContent = document.createElement('div');
		popupContent.className = 'popup-content';
		popupBody.appendChild(popupContent);
		popup.appendChild(popupBody);

		var popupFooter = document.createElement('div');
		popupFooter.className = 'popup-footer';
		var cancelBtn = document.createElement('button');
		cancelBtn.className = 'button button-primary button-small';
		cancelBtn.innerHTML = btn.cancel;
		popupFooter.appendChild(cancelBtn);
		var okBtn = document.createElement('button');
		okBtn.className = 'button button-primary button-positive button-small';
		okBtn.innerHTML = btn.ok;
		popupFooter.appendChild(okBtn);
		popup.appendChild(popupFooter);

		popup.style.visibility = 'hidden';
		popup.style.display = 'none';
		document.body.appendChild(popup);
	}
	this.showAlertWithOptions = function(opts, cb) {
		this.showCover();

		var popup = id('popup');
		if (!popup) {
			this.initPopup();
			this.showAlertWithOptions(opts, cb);
			return;
		}

		var header = popup.firstChild;
		var title = header.firstChild;
		if (opts.title === '') {
			// no title if title is ''
			title.style.display = 'none';
		} else {
			title.innerHTML = opts.title || label.confirmTitle;
			title.style.display = 'block';
		}

		var body = popup.childNodes[1];
		var icon = body.firstChild;
		var content = body.lastChild;
		content.innerHTML = opts.template;
		if (!opts.icon) {
			icon.style.display = 'none';
			content.className = 'popup-content';
		} else {
			switch(opts.icon) {
				case 'success':
					icon.className = 'popup-icon icon-success-big';
					break;
				case 'info':
					icon.className = 'popup-icon icon-info-big';
					break;
				case 'warning':
					icon.className = 'popup-icon icon-warning-big';
					break;
				case 'error':
					icon.className = 'popup-icon icon-error-big';
					break;
				default:
					icon.className = 'popup-icon icon-error-big';
					break;
			}
			icon.style.display = 'inline-block';
			content.className = 'popup-content-with-icon';
		}

		var footer = popup.lastChild;
		var that = this;
		var cancelBtn = footer.firstChild;
		cancelBtn.style.display = 'none';
		var okBtn = footer.lastChild;
		okBtn.innerHTML = opts.okText || btn.ok;
		okBtn.onclick = function() {
			that.hidePopup();
			that.hideCover();
			if (typeof cb === 'function') {
				cb();
			}
		}

		popup.style.visibility = 'visible';
		popup.style.display = 'block';
	}
	this.showAlert = function(message, title, cb, icon) {
		this.showAlertWithOptions({
			title: title,
			template: message,
			icon: icon,
			okText: btn.ok
		}, cb);
	}
	this.hideAlert = function() {
		this.hidePopup();
	}
	this.showConfirmWithOptions = function(opts, cb) {
		this.showCover();

		var popup = id('popup');
		if (!popup) {
			this.initPopup();
			this.showConfirmWithOptions(opts, cb);
			return;
		}

		var header = popup.firstChild;
		var title = header.firstChild;
		if (opts.title === '') {
			// no title if title is ''
			title.style.display = 'none';
		} else {
			title.innerHTML = opts.title || label.confirmTitle;
			title.style.display = 'block';
		}

		var body = popup.childNodes[1];
		var icon = body.firstChild;
		var content = body.lastChild;
		content.innerHTML = opts.template;
		if (!opts.icon) {
			icon.style.display = 'none';
			content.className = 'popup-content';
		} else {
			switch(opts.icon) {
				case 'success':
					icon.className = 'popup-icon icon-success-big';
					break;
				case 'info':
					icon.className = 'popup-icon icon-info-big';
					break;
				case 'warning':
					icon.className = 'popup-icon icon-warning-big';
					break;
				case 'error':
					icon.className = 'popup-icon icon-error-big';
					break;
				default:
					icon.className = 'popup-icon icon-error-big';
					break;
			}
			icon.style.display = 'inline-block';
			content.className = 'popup-content-with-icon';
		}

		var footer = popup.lastChild;
		var that = this;
		var cancelBtn = footer.firstChild;
		cancelBtn.style.display = 'inline-block';
		cancelBtn.innerHTML = opts.cancelText || btn.cancel;
		cancelBtn.onclick = function() {
			that.hidePopup();
			that.hideCover();
			return;
		}
		var okBtn = footer.lastChild;
		okBtn.innerHTML = opts.okText || btn.ok;
		okBtn.onclick = function() {
			that.hidePopup();
			that.hideCover();
			if (typeof cb === 'function') {
				cb();
			}
			return;
		}

		popup.style.visibility = 'visible';
		popup.style.display = 'block';
	}
	this.showConfirm = function(message, title, cb, icon) {
		this.showConfirmWithOptions({
			title: title,
			template: message,
			icon: icon,
			okText: btn.ok,
			cancelText: btn.cancel
		}, cb);
	}
	this.hideConfirm = function() {
		this.hidePopup();
	}
	this.showPromptWithOptions = function(opts, cb) {
		this.showCover();

		var popup = id('popup');
		if (!popup) {
			this.initPopup();
			this.showPromptWithOptions(opts, cb);
			return;
		}

		var header = popup.firstChild;
		var title = header.firstChild;
		if (opts.title === '') {
			// no title if title is ''
			title.style.display = 'none';
		} else {
			title.innerHTML = opts.title;
			title.style.display = 'block';
		}

		var body = popup.childNodes[1];
		var icon = body.firstChild;
		icon.style.display = 'none';
		var content = body.lastChild;
		content.className = 'popup-content';
		content.innerHTML = opts.template;

		if (opts.type) {
			var ul = document.createElement('ul');
			ul.className = 'gridLine gridLineA';
			var li = document.createElement('li');
			li.className = 'textCon textConA';
			li.style.display = 'block';
			var input = document.createElement('input');
			input.className = 'text textA';
			input.id = 'prompt-input-' + Math.random().toString(16).slice(2);
			input.type = opts.type || 'text';
			input.placeholder = opts.placeholder || '';
			li.appendChild(input)
			ul.appendChild(li);
			content.appendChild(ul);
		}

		var footer = popup.lastChild;
		var that = this;
		var cancelBtn = footer.firstChild;
		cancelBtn.style.display = 'inline-block';
		cancelBtn.innerHTML = opts.cancelText || btn.cancel;
		cancelBtn.onclick = function() {
			that.hidePopup();
			that.hideCover();
			return;
		}
		var okBtn = footer.lastChild;
		okBtn.innerHTML = opts.okText || btn.ok;
		okBtn.onclick = function() {
			that.hidePopup();
			that.hideCover();
			if (typeof cb === 'function') {
				if (opts.type && input.id) {
					cb(input.value);
				} else {
					cb();
				}
			}
			return;
		}

		popup.style.visibility = 'visible';
		popup.style.display = 'block';
	}
	this.showPrompt = function(message, title, cb, type, placeholder) {
		this.showPromptWithOptions({
			title: title,
			template: message,
			okText: btn.ok,
			cancelText: btn.cancel,
			type: type,
			placeholder: placeholder
		}, cb);
	}
	this.hidePrompt = function() {
		thhis.hidePopup();
	}
	this.hidePopup = function() {
		this.hideCover();
		var popup = id('popup');
		if (popup) {
			popup.style.visibility = 'hidden';
			popup.style.display = 'none';
		}
	}
	this.destoryPopup = function() {
		var popup = id('popup');
		if (popup) {
			document.body.removeChild(popup);
		}
	}

	this.initPopupWithoutButtons = function() {
		var popup = document.createElement('div');
		popup.className = 'popup';
		popup.style.zIndex = '1020';
		popup.id = 'popup-without-buttons';

		var content = document.createElement('div');
		content.className = 'popup-body';
		content.style.margin = "20px 0 10px 0";
		content.style.textAlign = 'center';

		var icon = document.createElement('i');
		content.appendChild(icon);

		var title = document.createElement('span');
		title.className = 'popup-content';
		title.style.display = 'block';
		content.appendChild(title);

		popup.appendChild(content);
		popup.style.display = 'none';
		popup.style.visibility = 'hidden';
		document.body.appendChild(popup);
	}

	this.showSuccess = function(message, cb, timer) {
		this.showCover();

		var popup = id('popup-without-buttons');
		if (!popup) {
			this.initPopupWithoutButtons();
			this.showSuccess(message, timer);
			return;
		}

		var icon = popup.firstChild.firstChild;
		icon.className = 'popup-icon icon-success-big';

		var title = popup.firstChild.lastChild;
		title.innerHTML = message;

		popup.style.display = 'block';
		popup.style.visibility = 'visible';

		if (cb && typeof cb === 'function') {
			cb();
			this.hideSuccess();
		}

		if (timer && typeof timer === 'number') {
			setTimeout(this.hideSuccess, timer * 1000);
		}
	}

	this.hideSuccess = function() {
		this.hidePopupWithoutButtons();
	}

	this.showLoading = function(message, cb, timer) {
		this.showCover();

		var popup = id('popup-without-buttons');
		if (!popup) {
			this.initPopupWithoutButtons();
			this.showSuccess(message, timer);
			return;
		}

		var icon = popup.firstChild.firstChild;
		icon.className = 'popup-icon icon-loading-big';

		var title = popup.firstChild.lastChild;
		title.innerHTML = message;

		popup.style.display = 'block';
		popup.style.visibility = 'visible';

		if (cb && typeof cb === 'function') {
			cb();
			this.hideLoading();
		}

		if (timer && typeof timer === 'number') {
			setTimeout(this.hideSuccess, timer * 1000);
		}
	}

	this.hideLoading = function() {
		this.hidePopupWithoutButtons();
	}

	this.hidePopupWithoutButtons = function() {
		this.hideCover();
		var popup = id('popup-without-buttons');
		if (popup) {
			popup.style.display = 'none';
			popup.style.visibility = 'hidden';
		}
	}

	this.destoryPopupWithoutButtons = function() {
		var popup = id('popup-without-buttons');
		if (popup) {
			document.body.removeChild(popup);
		}
	}
}

(function() {
	Popup.call(window);
})();