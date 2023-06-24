const sheet = new CSSStyleSheet();
sheet.replaceSync(":host {\n    display: block;\n\tbox-shadow: none !important;\n}\n\n.footer {\n\tmargin: 65px auto 0;\n\tcolor: #4d4d4d;\n\tfont-size: 11px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.footer-text {\n\tline-height: 1;\n}\n\n.footer-link {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.footer-link:hover {\n\ttext-decoration: underline;\n}\n");
export default sheet;
