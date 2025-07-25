import fs from "fs";
import wkhtmltopdf from "wkhtmltopdf";

// Read the HTML file
const html = fs.readFileSync("pupuk/template.html", "utf-8");

// Generate PDF from the HTML string
wkhtmltopdf(html, {
  pageSize: "A4",
  pageWidth: "15cm",
  pageHeight: "22cm",
  marginTop: "30mm",
  marginBottom: "28mm",
  marginRight: "0mm",
  marginLeft: "0mm",
  headerSpacing: 4,
  footerSpacing: 4,
  headerHtml: "pupuk/header.html",
  // footerHtml: "pupuk/footer.html",
  enableLocalFileAccess: true,
  userStyleSheet: "pupuk/style.css",
}).pipe(fs.createWriteStream("pupuk/slip-gaji.pdf"));

console.log("PDF generated successfully: pupuk/slip-gaji.pdf");
