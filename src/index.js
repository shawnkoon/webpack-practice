const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
	System.import('./image_viewer').then(
		iammodule => {
			iammodule.displayImage();
		}
	);
};

document.body.appendChild(button);