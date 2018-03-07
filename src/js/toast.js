function Toast()
{
	this.initToast = function() {
		var toast = document.createElement('div');
		toast.className = 'toast';
		toast.id = 'toast';

		var content = document.createElement('div');
		content.className = 'toast-body';

		var icon = document.createElement('i');
		icon.className = 'toast-icon';
		content.appendChild(icon);

		var info = document.createElement('span');
		info.className = 'toast-info';
		content.appendChild(info);
		toast.appendChild(content);

		toast.style.display = 'none';
		toast.style.visibility = 'hidden';

		document.body.appendChild(toast);
	}
	this.showToast = function(message, icon, timer) {
		var toast = id('toast');
		if (!toast) {
			this.initToast();
			this.showToast(message, icon, timer);
			return;
		}

		var toastIcon = toast.firstChild.firstChild;
		if (!icon) {
			toastIcon.style.display = 'none';
		} else {
			toastIcon.style.display = 'inline-block';
			switch(icon) {
				case 'warning':
					toastIcon.className = 'toast-icon icon-warning-small';
					break;
				case 'error':
					toastIcon.className = 'toast-icon icon-error-small';
					break;
				case 'success':
					toastIcon.className = 'toast-icon icon-success-small';
					break;
				case 'info':
					toastIcon.className = 'toast-icon icon-info-small';
					break;
				default:
					toastIcon.className = 'toast-icon icon-error-small';
					break;
			}
		}

		var toastInfo = toast.lastChild.lastChild;
		toastInfo.innerHTML = message;
		if (!icon) {
			// text align center
			toastInfo.style.width = '100%';
		} else {
			toastInfo.style.width = '80%';
		}

		toast.style.display = 'block';
		toast.style.visibility = 'visible';

		if (!timer) {
			// default timer is 3s, after 3s toast will be hidden
			timer = 3;
		}
		setTimeout(this.hideToast, timer * 1000);
	}
	this.hideToast = function() {
		var toast = id('toast');
		if (toast) {
			toast.style.display = 'none';
			toast.style.visibility = 'hidden';
		}
	}
	this.destroyToast = function() {
		var toast = id('toast');
		if (toast) {
			document.body.removeChild(toast);
		}
	}
}

(function() {
	Toast.call(window);
})();