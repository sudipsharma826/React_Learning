//Importing the package
const multer = require('multer');

//Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowedTypes.includes(file.mimetype)) {
                const error = new Error('Only images are allowed');
                error.code = 'LIMIT_FILE_TYPES';
                return cb(error, false);
            }
            cb(null, './public/images');
        }
        catch (error) {
            console.log(error);
        }
        
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage});

module.exports = {upload};