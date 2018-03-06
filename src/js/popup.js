function Popup() {
	this.showAlertWithOptions = function(opts, callback) {
		this.showCover();
		this.hidePopup();

		var popup = document.createElement('div');
		popup.className = 'popup';
		popup.id = 'popup';

		if (opts.title !== '') {
			// no title if title input is ''
			var popupTitle = document.createElement("h4");
			popupTitle.className = 'popup-title';
			popupTitle.innerHTML = opts.title || label.confirmTitle;
			popup.appendChild(popupTitle);
		}

		var popupBody = document.createElement('div');
		popupBody.className = 'popup-body';
		if (opts.icon) {
			var popupIcon = document.createElement('div');
			popupIcon.className = 'popup-icon ';
			switch(opts.icon) {
				case 'success':
					popupIcon.className += 'icon-success';
					break;
				case 'info':
					popupIcon.className += 'icon-info';
					break;
				case 'warning':
					popupIcon.className += 'icon-warning';
					break;
				case 'error':
					popupIcon.className += 'icon-error';
			}
			popupBody.appendChild(popupIcon);
		}
		var popupContent = document.createElement('div');
		if (opts.icon) {
			popupContent.className = 'popup-content-with-icon';
		} else {
			popupContent.className = 'popup-content';
		}
		popupContent.innerHTML = opts.template;
		popupBody.appendChild(popupContent);
		popup.appendChild(popupBody);

		var popupButtons = document.createElement('div');
		popupButtons.className = 'popup-footer';
		var okBtn = document.createElement('button');
		okBtn.className = 'button button-primary button-positive button-small';
		okBtn.innerHTML = opts.okText || btn.ok;
		var that = this;
		okBtn.onclick = function() {
			that.hideCover();
			document.body.removeChild(popup);
			if (typeof callback === 'function') {
				callback();
			}
		}
		popupButtons.appendChild(okBtn);
		popup.appendChild(popupButtons);
		document.body.appendChild(popup);
	}

	this.showAlert = function(title, message, callback, icon) {
		this.showAlertWithOptions({
			title: title,
			template: message,
			icon: icon,
			okText: btn.ok
		}, callback);
	}

	this.showConfirmWithOptions = function(opts, callback) {
		this.showCover();
		this.hidePopup();

		var popup = document.createElement('div');
		popup.className = 'popup';
		popup.id = 'popup';

		if (opts.title !== '') {
			// no title if title input is ''
			var popupTitle = document.createElement("h4");
			popupTitle.className = 'popup-title';
			popupTitle.innerHTML = opts.title || label.confirmTitle;
			popup.appendChild(popupTitle);
		}

		var popupBody = document.createElement('div');
		popupBody.className = 'popup-body';
		if (opts.icon) {
			var popupIcon = document.createElement('div');
			popupIcon.className = 'popup-icon ';
			switch(opts.icon) {
				case 'success':
					popupIcon.className += 'icon-success';
					break;
				case 'info':
					popupIcon.className += 'icon-info';
					break;
				case 'warning':
					popupIcon.className += 'icon-warning';
					break;
				case 'error':
					popupIcon.className += 'icon-error';
			}
			popupBody.appendChild(popupIcon);
		}
		var popupContent = document.createElement('div');
		if (opts.icon) {
			popupContent.className = 'popup-content-with-icon';
		} else {
			popupContent.className = 'popup-content';
		}
		popupContent.innerHTML = opts.template;
		popupBody.appendChild(popupContent);
		popup.appendChild(popupBody);

		var popupButtons = document.createElement('div');
		popupButtons.className = 'popup-footer';
		var that = this;
		var cancelBtn = document.createElement('button');
		cancelBtn.className = 'button button-primary button-small';
		cancelBtn.innerHTML = opts.cancelText || btn.cancel;
		cancelBtn.onclick = function() {
			that.hideCover();
			document.body.removeChild(popup);
			return;
		}
		popupButtons.appendChild(cancelBtn);
		var okBtn = document.createElement('button');
		okBtn.className = 'button button-primary button-positive button-small';
		okBtn.innerHTML = opts.okText || btn.ok;
		okBtn.onclick = function() {
			that.hideCover();
			document.body.removeChild(popup);
			if (typeof callback === 'function') {
				callback();
			}
		}
		popupButtons.appendChild(okBtn);
		popup.appendChild(popupButtons);
		document.body.appendChild(popup);
	}

	this.showConfirm = function(title, message, callback, icon) {
		this.showConfirmWithOptions({
			title: title,
			template: message,
			icon: icon,
			okText: btn.ok,
			cancelText: btn.cancel
		}, callback);
	}

	this.destoryPopup = function() {
		var popup = id('popup');
		if (popup) {
			document.body.removeChild(popup);
		}
	}

	this.hidePopup = function() {
		var popup = id('popup');
		if (popup) {
			popup.style.visibility = 'hidden';
			popup.style.display = 'none';
		}
	}

	this.CoverId = "Cover";

	this.hideCover = function(callback) {
		var cover = id(this.CoverId);

		this.setStyle(cover, {"display":"none", "visibility":"hidden"});

		if (typeof callback === "function") {
			callback(cover);
		}

		cover.innerHTML = "";
	}

	this.showCover = function(callback) {
		var cover = id(this.CoverId);

		this.setStyle(cover, {"display":"block", "visibility":"visible"});

		if (typeof callback === "undefined") {
			callback(cover);
		}
	}

	this.toggleCover = function(callback) {
		var cover = id(this.CoverId);
		if (cover.style.visibility && cover.style.visibility == 'visible') {
			cover.style.display = 'none';
			cover.style.visibility = 'hidden';
		} else {
			cover.style.display = 'block';
			cover.style.visibility = 'visible';
		}

		if (typeof callback === 'function') {
			callback(cover);
		}
	}
}