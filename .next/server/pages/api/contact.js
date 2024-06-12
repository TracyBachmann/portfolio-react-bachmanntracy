"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 9574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js

/* harmony default export */ const contact = (async (req, res)=>{
    if (req.method === "POST") {
        const { name , email , subject , message  } = req.body;
        const transporter = external_nodemailer_default().createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_TO,
            subject: `${subject} - Message de ${name}`,
            text: message
        };
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({
                success: true
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Erreur lors de l'envoi de l'email."
            });
        }
    } else {
        res.status(405).json({
            message: "M\xe9thode non autoris\xe9e"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9574));
module.exports = __webpack_exports__;

})();