export const userConfirmationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmation - ICASEM</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
            border: 1px solid #e2e8f0;
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(45deg);
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            position: relative;
            z-index: 1;
        }
        .header p {
            margin: 10px 0 0;
            font-size: 16px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        .content {
            padding: 40px 30px;
            background-color: #ffffff;
        }
        .greeting {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;
            color: #1e293b;
        }
        .success-badge {
            display: inline-block;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%);
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        .registration-details {
            background: linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(14, 165, 233, 0.05) 100%);
            border-left: 4px solid;
            border-image: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%) 1;
            padding: 25px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }
        .registration-details h2 {
            margin: 0 0 20px;
            font-size: 20px;
            color: #1e293b;
        }
        .registration-details ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .registration-details li {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .registration-details .icon {
            width: 24px;
            height: 24px;
            margin-right: 12px;
            fill: #3b82f6;
        }
        .registration-details strong {
            font-weight: 500;
            color: #1e293b;
            min-width: 120px;
        }
        .conference-info {
            background: linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(14, 165, 233, 0.08) 100%);
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
            border: 1px solid rgba(30, 64, 175, 0.1);
        }
        .conference-info h3 {
            color: #1e293b;
            margin: 0 0 15px;
            font-size: 20px;
            font-weight: 600;
        }
        .conference-date {
            font-size: 18px;
            font-weight: 500;
            color: #3b82f6;
            margin: 10px 0;
        }
        .conference-venue {
            font-size: 16px;
            color: #64748b;
            margin: 5px 0;
        }
        .highlight-box {
            background-color: #f1f5f9;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
        }
        .highlight-box h3 {
            color: #1e293b;
            margin: 0 0 10px;
            font-size: 18px;
        }
        .footer {
            background-color: #f1f5f9;
            color: #64748b;
            text-align: center;
            padding: 30px;
            font-size: 14px;
            border-top: 1px solid #e2e8f0;
        }
        .footer p {
            margin: 5px 0;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            color: #3b82f6;
            text-decoration: none;
            margin: 0 10px;
            font-weight: 500;
        }
        .social-links a:hover {
            text-decoration: underline;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            .header h1 {
                font-size: 24px;
            }
            .content {
                padding: 30px 20px;
            }
            .registration-details {
                padding: 20px;
            }
            .registration-details li {
                flex-direction: column;
                align-items: flex-start;
            }
            .registration-details strong {
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Registration Confirmed!</h1>
            <p>International Conference on Applied Science, Engineering & Management</p>
        </div>
        <div class="content">
            <p class="greeting">Dear ${data.name},</p>
            <div class="success-badge">✓ Registration Successful</div>
            
            <p>We're delighted to confirm your registration for the International Conference on Applied Science, Engineering & Management (ICASEM). Your participation will contribute to valuable discussions on cutting-edge research and innovations across applied sciences, engineering, and management disciplines.</p>
            
            <div class="conference-info">
                <h3>Conference Details</h3>
                <div class="conference-date">November 14th - 15th, 2024</div>
                <div class="conference-venue">📍 Singapore</div>
            </div>
            
            <div class="registration-details">
                <h2>Your Registration Details</h2>
                <ul>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        <strong>Name:</strong> ${data.name}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <strong>Email:</strong> ${data.email}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <strong>Phone:</strong> ${data.phone}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        <strong>Country:</strong> ${data.country}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                        <strong>Organization:</strong> ${data.organization}
                    </li>
                    <li>
                        <svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <strong>Registration Date:</strong> ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                    </li>
                </ul>
            </div>
            
            <div class="highlight-box">
                <h3>What's Next?</h3>
                <p>We'll send you detailed conference information, including the agenda, accommodation options, and venue details as we get closer to the event date. Get ready for an inspiring experience in vibrant Singapore!</p>
            </div>
            
            <p>If you have any questions or need assistance, please don't hesitate to contact our conference team at <a href="mailto:submit@icasem.org" style="color: #3b82f6; text-decoration: none;">submit@icasem.org</a>.</p>
            
            <p>We look forward to your valuable participation in this important conference!</p>
            
            <p>Warm regards,<br>
            <strong>The ICASEM Organizing Committee</strong></p>
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} International Conference on Applied Science, Engineering & Management</p>
            <p>This is an automated confirmation. Please do not reply to this email.</p>
            <div class="social-links">
                <a href="https://www.icasem.org/">Website</a> |
                <a href="mailto:submit@icasem.org">Contact Us</a>
            </div>
        </div>
    </div>
</body>
</html>
`;