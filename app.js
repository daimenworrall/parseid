var randomBytes = require('crypto').randomBytes;

function randomString(size) {
    if (size === 0) {
        throw new Error('Zero-length randomString is useless.');
    }
    var chars = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz' +
        '0123456789');
    var objectId = '';
    var bytes = randomBytes(size);
    for (var i = 0; i < bytes.length; ++i) {
        objectId += chars[bytes.readUInt8(i) % chars.length];
    }
    return objectId;
}

exports.gen = function() {
    return randomString(10);
}
