function Notification() {
	this.initNotification = function() {
		var notification = document.createElement('div');
		notification.className = 'notification';
		notification.id = 'notification';

		var content = document.createElement('div');
		content.className = 'notification-body';

		var icon = document.createElement('i');
		icon.className = 'notification-icon';
		content.appendChild(icon);

		var info = document.createElement('span');
		info.className = 'notification-info';
		content.appendChild(info);
		notification.appendChild(content);

		notification.style.display = 'none';
		notification.style.visibility = 'hidden';

		document.body.appendChild(notification);
	}
	this.showNotification = function(message, type) {
		var notification = id('notification');
		if (!notification) {
			this.initNotification();
			this.showNotification(message, type);
			return;
		}

		var notificationIcon = notification.firstChild.firstChild;
		var notificationInfo = notification.lastChild.lastChild;
		notificationInfo.style.color = '#ffa31a';
		notificationInfo.innerHTML = message;
		if (!type) {
			notificationIcon.style.display = 'none';
		} else {
			notificationIcon.style.display = 'inline-block';
			switch(type) {
				case 'warning':
					notificationIcon.className = 'notification-icon icon-warning-small';
					notificationInfo.style.color = '#ffa31a';
					break;
				case 'error':
					notificationIcon.className = 'notification-icon icon-error-small';
					notificationInfo.style.color = '#eb5e54'
					break;
				case 'success':
					notificationIcon.className = 'notification-icon icon-success-small';
					notificationInfo.style.color = '#19b579';
					break;
				case 'info':
					notificationIcon.className = 'notification-icon icon-info-small';
					notificationInfo.style.color = '#1785e6';
					break;
				default:
					notificationIcon.className = 'notification-icon icon-warning-small';
					notificationInfo.style.color = '#ffa31a';
					break;
			}
		}

		notification.style.display = 'block';
		notification.style.visibility = 'visible';
	}
	this.hideNotification = function() {
		var notification = id('notification');
		if (notification) {
			notification.style.display = 'none';
			notification.style.visibility = 'hidden';
		}
	}
	this.destroyNotification = function() {
		var notification = id('notification');
		if (notification) {
			document.body.removeChild(notification);
		}
	}
}

(function() {
	Notification.call(window);
});