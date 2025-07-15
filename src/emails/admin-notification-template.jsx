export const adminNotificationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Conference Registration - ICASEM</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        
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
            padding: 25px;
            text-align: center;
        }
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 24px;
            font-weight: 700;
        }
        .header .conference-details {
            font-size: 14px;
            opacity: 0.9;
            margin: 5px 0;
        }
        .header .conference-date {
            font-size: 16px;
            font-weight: 500;
            margin: 10px 0;
        }
        .content {
            padding: 30px;
            background-color: #ffffff;
        }
        .alert-badge {
            display: inline-block;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #0ea5e9 100%);
            color: #ffffff;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 20px;
            text-transform: uppercase;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: #fefefe;
            border-radius: 8px;
            overflow: hidden;
        }
        .details-table th,
        .details-table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #e2e8f0;
        }
        .details-table th {
            background-color: #f1f5f9;
            font-weight: 500;
            color: #1e293b;
            width: 30%;
        }
        .details-table td {
            color: #334155;
        }
        .footer {
            background-color: #f1f5f9;
            color: #64748b;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            border-top: 1px solid #e2e8f0;
        }
        .footer a {
            color: #3b82f6;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
        @media only screen and (max-width: 600px) {
            .container {
                margin: 0;
                border-radius: 0;
            }
            .content {
                padding: 20px;
            }
            .details-table th,
            .details-table td {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Conference Registration</h1>
            <div class="conference-details">International Conference on Applied Science, Engineering & Management</div>
            <div class="conference-date">November 14th-15th, 2024</div>
            <div class="conference-details">Singapore</div>
        </div>
        <div class="content">
            <div class="alert-badge">New Registration</div>
            
            <p>A new participant has registered for the International Conference on Applied Science, Engineering & Management (ICASEM):</p>
            
            <table class="details-table">
                <tr>
                    <th>Name</th>
                    <td>${data.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${data.email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${data.phone}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>${data.country}</td>
                </tr>
                <tr>
                    <th>Organization</th>
                    <td>${data.organization}</td>
                </tr>
                <tr>
                    <th>Registration Date</th>
                    <td>${new Date().toLocaleString()}</td>
                </tr>
            </table>
            
            <p>Please follow up as necessary.</p>
        </div>
        <div class="footer">
            <p>ICASEM Admin Notification System</p>
            <p><a href="https://www.icasem.org">www.icasem.org</a> | <a href="mailto:submit@icasem.org">submit@icasem.org</a></p>
        </div>
    </div>
</body>
</html>
`;