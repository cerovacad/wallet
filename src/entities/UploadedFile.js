 import moment from "moment";
 import numeral from "numeral";

 class UploadedFile {
     constructor(file) {
         this.lastModified = file.lastModified;
         this.date = moment(file.lastModified).format("Do MMMM YYYY");
         this.fileName = file.name;
         this.fileType = file.type;
         this.sizeKB = numeral(file.size).format("0b");
     }
 };

 export default UploadedFile;