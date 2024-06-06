document.getElementById('expoBtn').addEventListener('click', function () {
    // Function to download data as CSV file
    function downloadCSV(csv, filename) {
      let csvFile;
      let downloadLink;

      // CSV file
      csvFile = new Blob([csv], { type: 'text/csv' });

      // Download link
      downloadLink = document.createElement('a');

      // File name
      downloadLink.download = filename;

      // Create a link to the file
      downloadLink.href = window.URL.createObjectURL(csvFile);

      // Hide download link
      downloadLink.style.display = 'none';

      // Add the link to the DOM
      document.body.appendChild(downloadLink);

      // Click download link
      downloadLink.click();
    }

    // Function to export HTML table to CSV file
    function exportTableToCSV(filename) {
      let csv = [];
      let rows = document.querySelectorAll('table#resultTable tr');

      for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll('td, th');

        for (let j = 0; j < cols.length; j++) {
          row.push(cols[j].innerText);
        }

        csv.push(row.join(','));
      }

      // Download CSV file
      downloadCSV(csv.join('\n'), filename);
    }

    exportTableToCSV('table.csv');
  });