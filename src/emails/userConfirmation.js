export const userConfirmationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paper Submission Confirmation - ICASEM</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #32CD32, #7CFC00);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        .header p {
            margin: 10px 0 0;
            font-size: 16px;
            font-weight: 400;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #228B22;
        }
        .submission-details {
            background-color: #f8f9fa;
            border-left: 4px solid #32CD32;
            padding: 25px;
            margin-top: 30px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .submission-details h2 {
            margin-top: 0;
            font-size: 22px;
            color: #228B22;
        }
        .submission-details ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .submission-details li {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .submission-details strong {
            font-weight: 600;
            color: #444;
            min-width: 150px;
        }
        .footer {
            background-color: #228B22;
            color: #ffffff;
            text-align: center;
            padding: 25px;
            font-size: 14px;
        }
        .icon {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-right: 10px;
            fill: #32CD32;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            .content {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Paper Submission Confirmation</h1>
            <p>International Conference on Applied Science, Engineering & Management</p>
        </div>
        <div class="content">
            <p class="greeting">Dear ${data.authorName},</p>
            <p>Thank you for submitting your paper to ICASEM. We are pleased to confirm that we have received your submission titled:</p>
            <p style="font-weight: 600; font-style: italic; color: #228B22; font-size: 18px; margin: 20px 0; padding: 15px; background-color: #f0f8f0; border-radius: 8px; text-align: center;">"${data.paperTitle}"</p>
            
            <div class="submission-details">
                <h2>Submission Details</h2>
                <ul>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                        </svg>
                        <strong>Paper Type:</strong> ${data.paperType}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M7 14l5-5 5 5z"/>
                        </svg>
                        <strong>Presentation Type:</strong> ${data.presentationType}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                        <strong>Submission Date:</strong> ${new Date().toLocaleDateString()}
                    </li>
                </ul>
            </div>
            
            <p>Our expert review panel will carefully evaluate your submission. You can expect to hear back from us within 2-3 weeks with further information regarding the acceptance status and presentation details.</p>
            
            <p>If you have any questions or need to make changes to your submission, please don't hesitate to contact us at <a href="mailto:submit@icasem.org" style="color: #228B22; text-decoration: none;">submit@icasem.org</a>.</p>
            
            <p>We appreciate your contribution to ICASEM and look forward to potentially featuring your work at the conference.</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>ICASEM Organizing Committee</strong></p>
        </div>
        <div class="footer">
            <p>This is an automated confirmation of your paper submission. Please do not reply to this email.</p>
            <p>&copy; 2023 International Conference on Applied Science, Engineering & Management. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

`;