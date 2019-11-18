var ExcelToJSON = function() {

    this.parseExcel = function(file) {

        var reader = new FileReader();

        reader.onload = function(e) {
            let allObjects = [];
            var data = e.target.result;
            var workbook = XLSX.read(data, {
            type: 'binary'
            });
            workbook.SheetNames.forEach(function(sheetName) {
                // Here is your object
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                var json_object = JSON.stringify(XL_row_object);
                console.log(JSON.parse(json_object));
                allObjects += json_object;
                $('#xlsx_json').val(allObjects);
            })

        };

        reader.onerror = function(ex) {
          console.log(ex);
        };

        reader.readAsBinaryString(file);

      };

};

function handleFileSelect(evt) {

    var files = evt.target.files; // FileList object
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(files[0]);

}

function middleGrayPay() {
    let region
}

document.getElementById('upload').addEventListener('change', handleFileSelect, false);
