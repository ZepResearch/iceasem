export function getUserEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Paper Submission Confirmation</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #07416b;
        background-color: #f8fbff;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #00adef 0%, #07416b 100%);
        color: #ffffff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #07416b;
        box-shadow: 0 0 15px rgba(7, 65, 107, 0.5);
      }
      .content {
        padding: 25px;
        border: 1px solid #00adef;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 173, 239, 0.3);
        color: #07416b;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #07416b;
      }
      h1 {
        color: #07416b;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .conference-title {
        font-size: 28px;
        font-weight: bold;
        color: #ffffff;
      }
      .conference-date {
        color: #ffffff;
        font-size: 16px;
        margin-top: 5px;
        font-weight: bold;
      }
      .conference-location {
        color: #ffffff;
        font-size: 18px;
        margin-top: 5px;
        font-style: italic;
      }
      .highlight {
        font-weight: bold;
        color: #07416b;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        padding: 8px 0;
        border-bottom: 1px solid #00adef;
      }
      li:last-child {
        border-bottom: none;
      }
      li strong {
        color: #07416b;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 120px;
      }
      a {
        color: #00adef;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        color: #07416b;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid #07416b;
        border-radius: 30px;
        background-color: #07416b;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 15px;
        transition: all 0.3s ease;
        text-align: center;
      }
      .button:hover {
        background-color: #00adef;
        border-color: #00adef;
      }
      .detail-label {
        color: #07416b;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 150px;
      }
      .detail-value {
        color: #07416b;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">ICASEM 2025</div>
      <div class="conference-date">November 14-15, 2025</div>
      <div class="conference-location">Singapore</div>
      <div style="font-size: 14px; margin-top: 8px; color: #ffffff;">International Conference on Applied Science, Engineering & Management</div>
    </div>
    <div class="content">
      <p>Dear ${data.author},</p>
      
      <p>Thank you for submitting your paper titled <span class="highlight">"${data.paper_title}"</span> to ICASEM 2025: International Conference on Applied Science, Engineering & Management.</p>
      
      <p>We have received your submission and our review committee will evaluate it shortly. You will be notified about the status of your submission in the coming weeks.</p>
      
      <p>Here's a summary of your submission:</p>
      <ul>
        <li><span class="detail-label">Paper Title:</span> <span class="detail-value">${data.paper_title}</span></li>
        <li><span class="detail-label">Paper Type:</span> <span class="detail-value">${data.paper_type}</span></li>
        <li><span class="detail-label">Presentation Type:</span> <span class="detail-value">${data.presentation_type}</span></li>
        <li><span class="detail-label">Submission Date:</span> <span class="detail-value">${new Date().toLocaleDateString()}</span></li>
      </ul>
      
      <p><strong>Conference Details:</strong></p>
      <ul>
        <li><span class="detail-label">Date:</span> <span class="detail-value">November 14-15, 2025</span></li>
        <li><span class="detail-label">Location:</span> <span class="detail-value">Singapore</span></li>
      </ul>
      
      <p>If you have any questions or need to make changes to your submission, please contact us at <a href="mailto:submit@icasem.org">submit@icasem.org</a>.</p>
      
      <p>Best regards,<br>
      ICASEM 2025 Organizing Committee<br>
      International Conference on Applied Science, Engineering & Management</p>
    </div>
    <div class="footer">
      <p>© 2025 ICASEM. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}

export function getAdminEmailTemplate(data, fileUrl) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Paper Submission</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #07416b;
        background-color: #f8fbff;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #00adef 0%, #07416b 100%);
        color: #ffffff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #07416b;
        box-shadow: 0 0 15px rgba(7, 65, 107, 0.5);
      }
      .content {
        padding: 25px;
        border: 1px solid #00adef;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 173, 239, 0.3);
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #07416b;
      }
      h1, h2 {
        color: #07416b;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .conference-title {
        font-size: 28px;
        font-weight: bold;
        color: #ffffff;
      }
      .conference-date {
        color: #ffffff;
        font-size: 16px;
        margin-top: 5px;
        font-weight: bold;
      }
      .conference-location {
        color: #ffffff;
        font-size: 18px;
        margin-top: 5px;
        font-style: italic;
      }
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin: 20px 0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 173, 239, 0.3);
      }
      table, th, td {
        border: 1px solid #00adef;
      }
      th, td {
        padding: 12px 15px;
        text-align: left;
      }
      th {
        background-color: #e6f4ff;
        color: #07416b;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
      }
      td {
        color: #07416b;
      }
      tr:nth-child(even) {
        background-color: #f8fbff;
      }
      tr:nth-child(odd) {
        background-color: #ffffff;
      }
      tr:hover {
        background-color: #e6f4ff;
      }
      .file-link {
        color: #00adef;
        text-decoration: none;
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #00adef;
        border-radius: 5px;
        transition: all 0.3s ease;
        background-color: rgba(0, 173, 239, 0.1);
      }
      .file-link:hover {
        background-color: rgba(0, 173, 239, 0.2);
        box-shadow: 0 0 10px rgba(0, 173, 239, 0.5);
        color: #07416b;
      }
      .action-buttons {
        text-align: center;
        margin-top: 20px;
      }
      .action-button {
        display: inline-block;
        padding: 10px 20px;
        margin: 0 10px;
        border: 1px solid #07416b;
        border-radius: 30px;
        background-color: #07416b;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
      }
      .action-button:hover {
        background-color: #00adef;
        border-color: #00adef;
      }
      .action-button.reject {
        border-color: #e53e3e;
        color: #ffffff;
        background-color: #e53e3e;
      }
      .action-button.reject:hover {
        background-color: #c53030;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">ICASEM 2025</div>
      <div class="conference-date">November 14-15, 2025</div>
      <div class="conference-location">Singapore</div>
      <div style="font-size: 14px; margin-top: 8px; color: #ffffff;">New Paper Submission Alert</div>
    </div>
    <div class="content">
      <p>A new paper has been submitted to ICASEM 2025: International Conference on Applied Science, Engineering & Management.</p>
      
      <h2>Submission Details:</h2>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Author</td>
          <td>${data.author}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>${data.phone_number}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>${data.country}</td>
        </tr>
        <tr>
          <td>Co-Author</td>
          <td>${data.co_author}</td>
        </tr>
        <tr>
          <td>Paper Title</td>
          <td>${data.paper_title}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>${data.department}</td>
        </tr>
        <tr>
          <td>Organization</td>
          <td>${data.organization}</td>
        </tr>
        <tr>
          <td>Paper Type</td>
          <td>${data.paper_type}</td>
        </tr>
        <tr>
          <td>Presentation Type</td>
          <td>${data.presentation_type}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>${data.message}</td>
        </tr>
        <tr>
          <td>How they heard about us</td>
          <td>${data.know_to_you}</td>
        </tr>
        <tr>
          <td>Submission Date</td>
          <td>${new Date().toLocaleDateString()}</td>
        </tr>
        ${
          fileUrl
            ? `
        <tr>
          <td>Uploaded File</td>
          <td><a href="${fileUrl}" class="file-link">View/Download File</a></td>
        </tr>
        `
            : ""
        }
      </table>
      
      <p><strong>Conference Details:</strong></p>
      <ul style="list-style: none; padding: 0;">
        <li style="padding: 5px 0; color: #07416b;"><strong>Date:</strong> November 14-15, 2025</li>
        <li style="padding: 5px 0; color: #07416b;"><strong>Location:</strong> Singapore</li>
        <li style="padding: 5px 0; color: #07416b;"><strong>Conference:</strong> International Conference on Applied Science, Engineering & Management</li>
      </ul>
      
      <p>Please review this submission at your earliest convenience.</p>
    </div>
    <div class="footer">
      <p>© 2025 ICASEM. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}