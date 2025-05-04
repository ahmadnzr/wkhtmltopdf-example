# wkhtmltopdf-example

A simple example project demonstrating how to convert HTML to PDF using the wkhtmltopdf library in Node.js.

## Overview

This project shows how to:
- Convert an HTML document to PDF
- Add custom headers and footers to the PDF
- Configure page size, margins, and other PDF settings
- Use styling in the generated PDF

## Prerequisites

Before you can use this project, you need to install:

1. **Node.js** - Download and install from [nodejs.org](https://nodejs.org/)

2. **wkhtmltopdf** - This is a command-line tool that the Node.js library depends on.

   **IMPORTANT**: You must install wkhtmltopdf on your local machine for this project to work.

   Installation instructions:
   - **Windows**: Download the installer from [wkhtmltopdf downloads](https://wkhtmltopdf.org/downloads.html)
   - **macOS**: Use Homebrew: `brew install wkhtmltopdf`
   - **Ubuntu/Debian**: `sudo apt-get install wkhtmltopdf`
   - **CentOS/RHEL**: `sudo yum install wkhtmltopdf`

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/ahmadnzr/wkhtmltopdf-example.git
   cd wkhtmltopdf-example
   ```

2. Install the Node.js dependencies:
   ```
   npm install
   ```

## Project Structure

- `generate.mjs` - The main script that converts HTML to PDF
- `index.html` - The main HTML content to be converted
- `header.html` - The header template for the PDF
- `footer.html` - The footer template for the PDF
- `package.json` - Project configuration and dependencies

## How It Works

The project uses the following process to generate a PDF:

1. The `generate.mjs` script reads the content of `index.html`
2. It then uses the wkhtmltopdf library to convert this HTML to PDF
3. During conversion, it applies custom settings like page size and margins
4. It also includes `header.html` and `footer.html` as the header and footer of each page
5. The final PDF is saved as `out.pdf`

## Usage

To generate the PDF, run:

```
node generate.mjs
```

This will create an `out.pdf` file in the project directory.

## Customization

### Modifying the Content

Edit `index.html` to change the main content of the PDF. The current template includes:
- Styling with CSS
- Responsive tables
- Placeholder variables (like `{ticket_access_number}`, `{company_name}`, etc.)

### Changing the Header and Footer

- Edit `header.html` to modify the header that appears on each page
- Edit `footer.html` to modify the footer that appears on each page

### Adjusting PDF Settings

In `generate.mjs`, you can modify various PDF settings:

```javascript
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
})
```

Available options include:
- Page size and dimensions
- Margins
- Spacing
- Orientation
- And many more (see wkhtmltopdf documentation)

## Troubleshooting

If you encounter errors like "Command not found" or "wkhtmltopdf not installed", make sure:
1. You have installed wkhtmltopdf on your system (not just the npm package)
2. The wkhtmltopdf executable is in your system PATH

## Resources

- [wkhtmltopdf documentation](https://wkhtmltopdf.org/docs.html)
- [Node.js wkhtmltopdf package](https://www.npmjs.com/package/wkhtmltopdf)

## License

ISC
