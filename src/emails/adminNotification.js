export const adminNotificationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Paper Submission - International Conference on Applied Science, Engineering & Management</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f0f0f0;
        }
        .container {
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
            margin: 20px;
        }
        .header {
            background: linear-gradient(135deg, #32CD32, #7CFC00);
            padding: 40px 20px;
            text-align: center;
            color: white;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        .header p {
            margin: 10px 0 0;
            font-size: 18px;
            font-weight: 300;
        }
        .submission-details {
            padding: 30px;
        }
        .field {
            margin-bottom: 25px;
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .field-label {
            font-weight: 700;
            color: #32CD32;
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            background-color: #ffffff;
            padding: 12px;
            border-radius: 6px;
            border-left: 4px solid #32CD32;
        }
        .pdf-link {
            color: #32CD32;
            text-decoration: none;
            font-weight: 700;
            transition: color 0.3s ease;
        }
        .pdf-link:hover {
            color: #228B22;
        }
        .footer {
            background-color: #228B22;
            color: #fff;
            text-align: center;
            padding: 25px;
            font-size: 14px;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
        }
        .icon {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-right: 8px;
            fill: #32CD32;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Paper Submission</h1>
            <p>International Conference on Applied Science, Engineering & Management</p>
        </div>
        <div class="submission-details">
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    Author
                </span>
                <div class="field-value">${data.authorName}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Email
                </span>
                <div class="field-value">${data.email}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Phone
                </span>
                <div class="field-value">${data.number}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Country
                </span>
                <div class="field-value">${data.country}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    Paper Title
                </span>
                <div class="field-value">${data.paperTitle}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6zm-1 9h2v2h-2v-2zm0-6h2v4h-2V9z"/>
                    </svg>
                    Department
                </span>
                <div class="field-value">${data.department}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                    </svg>
                    University/Organization
                </span>
                <div class="field-value">${data.universityOrganization}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    Paper Type
                </span>
                <div class="field-value">${data.paperType}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M7 14l5-5 5 5z"/>
                    </svg>
                    Presentation Type
                </span>
                <div class="field-value">${data.presentationType}</div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/>
                    </svg>
                    PDF URL
                </span>
                <div class="field-value">
                    <a href="${data.pdfUrl}" class="pdf-link">${data.pdfUrl}</a>
                </div>
            </div>
            <div class="field">
                <span class="field-label">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    Message
                </span>
                <div class="field-value">${data.message}</div>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>Thank you for your submission to the International Conference on Applied Science, Engineering & Management!</p>
        <p>We look forward to reviewing your paper.</p>
    </div>
</body>
</html>

`;