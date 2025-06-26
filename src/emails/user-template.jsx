export const userEmailTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting ICASEM 2025</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            color: #374151;
            background-image: radial-gradient(rgba(0, 173, 239, 0.05) 1px, transparent 1px);
            background-size: 25px 25px;
        }
        
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: transparent;
        }
        
        .header-logo {
            text-align: center;
            margin-bottom: 16px;
        }
        
        .logo-box {
            width: 280px;
            height: 64px;
            margin: 0 auto;
            background: linear-gradient(to bottom left, #00adef, #07416b, #0284c7);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .logo-text {
            color: #ffffff;
            font-weight: 700;
            font-size: 14px;
            padding: 0 8px;
            text-align: center;
            margin: 0;
        }
        
        .main-container {
            padding: 32px;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            border: 1px solid #f3f4f6;
            position: relative;
            overflow: hidden;
        }
        
        .main-container::before {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, #00adef, #07416b, #0284c7, #1e40af);
            border-radius: 16px;
            z-index: -1;
            filter: blur(12px);
            opacity: 0.3;
        }
        
        .gradient-border {
            box-shadow: 0 0 15px rgba(0, 173, 239, 0.2), 0 0 30px rgba(7, 65, 107, 0.15), 0 0 45px rgba(2, 132, 199, 0.1);
        }
        
        .header {
            text-align: center;
            margin-bottom: 32px;
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(to bottom left, #00adef, #07416b, #0284c7);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
        }
        
        .divider {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 24px 0;
        }
        
        .greeting {
            font-size: 20px;
            font-weight: 500;
            text-align: center;
            background: linear-gradient(to bottom left, #00adef, #07416b, #0284c7);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin-bottom: 16px;
        }
        
        .content-text {
            font-size: 16px;
            color: #374151;
            line-height: 1.6;
            margin-bottom: 16px;
        }
        
        .event-details {
            margin-top: 24px;
            padding: 24px;
            background-color: #f9fafb;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
        }
        
        .event-title {
            font-size: 18px;
            font-weight: 500;
            background: linear-gradient(to bottom left, #00adef, #07416b, #0284c7);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin-bottom: 16px;
        }
        
        .detail-item {
            margin-bottom: 12px;
            padding: 12px;
            background-color: #ffffff;
            border-radius: 8px;
            border-left: 4px solid;
        }
        
        .detail-item:last-child {
            margin-bottom: 0;
        }
        
        .detail-item.date {
            border-left-color: #00adef;
        }
        
        .detail-item.location {
            border-left-color: #07416b;
        }
        
        .detail-item.focus {
            border-left-color: #0284c7;
        }
        
        .detail-item.contact {
            border-left-color: #00adef;
        }
        
        .detail-label {
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 4px;
        }
        
        .detail-label.date {
            color: #00adef;
        }
        
        .detail-label.location {
            color: #07416b;
        }
        
        .detail-label.focus {
            color: #0284c7;
        }
        
        .detail-label.contact {
            color: #00adef;
        }
        
        .detail-value {
            font-size: 16px;
            color: #374151;
            margin: 0;
        }
        
        .detail-link {
            color: #00adef;
            text-decoration: underline;
        }
        
        .detail-link:hover {
            color: #07416b;
        }
        
        .cta-section {
            margin-top: 32px;
            text-align: center;
        }
        
        .gradient-button {
            background: linear-gradient(to bottom left, #00adef, #07416b, #0284c7);
            color: #ffffff;
            font-weight: 700;
            padding: 12px 24px;
            border-radius: 30px;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            box-shadow: 0 0 15px rgba(0, 173, 239, 0.4);
            transition: all 0.3s ease;
        }
        
        .gradient-button:hover {
            box-shadow: 0 0 20px rgba(0, 173, 239, 0.6);
            color: #ffffff;
        }
        
        .footer {
            margin-top: 32px;
            text-align: center;
        }
        
        .copyright {
            font-size: 14px;
            background: linear-gradient(to bottom left, #00adef, #07416b, #0284c7);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            margin: 0;
        }
        
        .disclaimer {
            font-size: 12px;
            color: #6b7280;
            margin-top: 8px;
            margin-bottom: 0;
        }
        
        @media only screen and (max-width: 600px) {
            .container {
                margin: 20px auto;
            }
            
            .logo-box {
                width: 250px;
                height: 56px;
            }
            
            .logo-text {
                font-size: 12px;
            }
            
            .main-container {
                padding: 24px;
                border-radius: 12px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .greeting {
                font-size: 18px;
            }
            
            .content-text {
                font-size: 14px;
            }
            
            .event-details {
                padding: 20px;
            }
            
            .event-title {
                font-size: 16px;
            }
            
            .detail-item {
                padding: 10px;
            }
            
            .detail-value {
                font-size: 14px;
            }
            
            .gradient-button {
                padding: 10px 20px;
                font-size: 14px;
               color: #FFFFFF;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with logo -->
     

        <!-- Main content container -->
        <div class="main-container gradient-border">
            <!-- Header -->
            <div class="header">
                <h1>THANK YOU FOR CONTACTING ICASEM 2025</h1>
                <hr class="divider">
            </div>

            <!-- Greeting -->
            <p class="greeting">Hello, ${data.name}!</p>
            <p class="content-text">
                We've received your message and appreciate your interest in the International Conference Applied Science, 
                Engineering & Management (ICASEM) 2025. Our team will review your inquiry and get back to you as soon as possible.
            </p>
            <p class="content-text">
                In the meantime, you might find answers to common questions on our website or explore our conference program 
                covering cutting-edge research in applied sciences, engineering innovations, and management excellence.
            </p>

            <!-- Event details -->
            <div class="event-details">
                <p class="event-title">ICASEM 2025 CONFERENCE DETAILS:</p>

                <div class="detail-item date">
                    <div class="detail-label date">Conference Dates:</div>
                    <p class="detail-value">November 14-15, 2025</p>
                </div>

                <div class="detail-item location">
                    <div class="detail-label location">Location:</div>
                    <p class="detail-value">Singapore</p>
                </div>

                <div class="detail-item focus">
                    <div class="detail-label focus">Focus Areas:</div>
                    <p class="detail-value">Applied Science, Engineering Innovation, Management Excellence</p>
                </div>

                <div class="detail-item contact">
                    <div class="detail-label contact">Contact:</div>
                    <p class="detail-value">
                        Email: <a href="mailto:submit@icasem.org" class="detail-link">submit@icasem.org</a><br>
                        Phone: <a href="tel:+917848854815" class="detail-link">+91 78488 54815</a>
                    </p>
                </div>
            </div>

            <!-- CTA Button -->
            <div class="cta-section">
                <a href="https://www.icasem.org" class="gradient-button">
                    EXPLORE CONFERENCE PROGRAM
                </a>
            </div>

            <!-- Footer -->
            <div class="footer">
                <hr class="divider">
                <p class="copyright">
                    © 2025 International Conference Applied Science, Engineering & Management (ICASEM)
                </p>
                <p class="disclaimer">
                    This is an automated response. Please do not reply to this email.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`
