import fs from "fs";
import wkhtmltopdf from "wkhtmltopdf";

// Read the HTML file
const html = fs.readFileSync("index.html", "utf-8");

// Generate PDF from the HTML string
wkhtmltopdf(html, {
  pageSize: "A3",
  pageWidth: "140mm",
  pageHeight: "222mm",
  marginTop: "24.5mm",
  marginBottom: "28mm",
  marginRight: "0mm",
  marginLeft: "0mm",
  headerSpacing: 4,
  footerSpacing: 4,
  headerHtml: "header.html",
  footerHtml: "footer.html",
  enableLocalFileAccess: true,
}).pipe(fs.createWriteStream("out.pdf"));
