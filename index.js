const uuid = require("node-uuid");
const slug = require("slug");

const getExtension = (fileName) => {
    const ext = fileName.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);

    return ext;
}

const generateFingerprint = () => {
    return `-${uuid.v4().replace(/-/g, "")}`;
}

const fingerSlug = (fileName) => {
    const fingerprint = generateFingerprint();
    const extension = getExtension(fileName);
    const fileNameNoExt = fileName.replace(new RegExp(extension[1], "ig"), "");

    return slug(fileNameNoExt) + fingerprint + "." + extension[1];
}

module.exports = fingerSlug;
