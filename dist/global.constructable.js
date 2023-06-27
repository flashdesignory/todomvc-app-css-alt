const sheet = new CSSStyleSheet();
sheet.replaceSync(`*, *::before, *::after {
	box-sizing: border-box;
}

html,
body {
	margin: 0;
	padding: 0;
}

body {
	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	background: #f5f5f5;
	color: #111;
	min-width: 300px;
	max-width: 582px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}

:focus {
	box-shadow: inset 0 0 2px 2px #CF7D7D !important;
	outline: 0 !important;
}

button {
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	font-size: 100%;
	vertical-align: baseline;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	appearance: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

input {
	position: relative;
	margin: 0;
	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;
	padding: 0;
	border: 0;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

input:placeholder-shown {
	text-overflow: ellipsis;
}


.visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
}

.truncate-singleline {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block !important;
}
`);
export default sheet;
