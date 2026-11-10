import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_one_page_cv(output_path):
    # 792 x 612 pt (Letter)
    # Margins 26pt top/bottom, 30pt left/right -> 740pt printable height, 552pt printable width
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=30,
        rightMargin=30,
        topMargin=24,
        bottomMargin=24
    )

    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        'CVName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        textColor=colors.HexColor('#0F172A'),
        alignment=1
    )

    subtitle_style = ParagraphStyle(
        'CVSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=11.5,
        textColor=colors.HexColor('#059669'), # Emerald
        alignment=1
    )

    contact_style = ParagraphStyle(
        'CVContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10,
        textColor=colors.HexColor('#334155'),
        alignment=1
    )

    section_heading = ParagraphStyle(
        'CVSectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=10,
        textColor=colors.HexColor('#0F172A')
    )

    body_style = ParagraphStyle(
        'CVBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.2,
        textColor=colors.HexColor('#1E293B')
    )

    bullet_style = ParagraphStyle(
        'CVBullet',
        parent=body_style,
        leftIndent=10,
        firstLineIndent=-7,
        spaceAfter=1
    )

    role_title_style = ParagraphStyle(
        'CVRoleTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.HexColor('#0F172A')
    )

    role_meta_style = ParagraphStyle(
        'CVRoleMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor('#475569'),
        alignment=2
    )

    story = []

    # 1. Header
    story.append(Paragraph("TAPAN MANNA", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Software Developer | Full-Stack Engineer", subtitle_style))
    story.append(Spacer(1, 3))
    
    contacts = (
        "Kolkata, India &nbsp;|&nbsp; "
        "+91-9749697174 &nbsp;|&nbsp; "
        "<a href='mailto:tapanmanna.cs@gmail.com' color='#059669'>tapanmanna.cs@gmail.com</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/tapan2004' color='#059669'>github.com/tapan2004</a> &nbsp;|&nbsp; "
        "<a href='https://linkedin.com/in/tapan-manna' color='#059669'>linkedin.com/in/tapan-manna</a> &nbsp;|&nbsp; "
        "<a href='https://tapan-manna-portfolio.vercel.app/' color='#059669'>Live Portfolio</a>"
    )
    story.append(Paragraph(contacts, contact_style))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#CBD5E1'), spaceAfter=3, spaceBefore=1))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    summary_text = (
        "<b>B.Tech Computer Science graduate (First Class Degree)</b> and <b>Software Developer</b> with hands-on "
        "engineering experience building full-stack web applications, cross-platform software, and distributed backend "
        "services. Proficient in <b>Java, C#, ASP.NET Core, Node.js, and React</b>. Practical experience with Spring Boot "
        "microservices, REST APIs, gRPC, PostgreSQL, SQLite, Redis caching, Apache Kafka event streaming, and API security testing (OWASP Top 10)."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 3))

    # 3. Work Experience
    add_section_header("Professional Experience")

    # The Thirty Three
    t33_l = Paragraph("<b>Junior Software Development Engineer</b> — <i>The Thirty Three</i>", role_title_style)
    t33_r = Paragraph("Sept 2026 – Present | Kolkata, India", role_meta_style)
    story.append(Table([[t33_l, t33_r]], colWidths=[392, 160], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(Paragraph("• <b>Full-Stack & Backend:</b> Developing end-to-end applications and microservices using React, Node.js, C#, and ASP.NET Core; engineered RESTful APIs and gRPC inter-service communication.", bullet_style))
    story.append(Paragraph("• <b>Cross-Platform Software:</b> Designing and maintaining cross-platform client solutions and desktop application modules with focus on reliability and responsive user experiences.", bullet_style))
    story.append(Paragraph("• <b>Distributed Architecture & DBs:</b> Structuring schemas in PostgreSQL, SQLite, and Redis; streaming asynchronous event workflows using Apache Kafka; deploying with Docker on AWS.", bullet_style))
    story.append(Paragraph("<i>Technologies:</i> C#, ASP.NET Core, Node.js, React, Go, REST APIs, gRPC, PostgreSQL, SQLite, Redis, Docker, AWS, Kafka", ParagraphStyle('TUsed1', parent=body_style, fontSize=7, textColor=colors.HexColor('#64748B'), spaceAfter=3)))

    # Sunyam Software
    sun_l = Paragraph("<b>Software Engineering Intern</b> — <i>Sunyam Software</i>", role_title_style)
    sun_r = Paragraph("May 2026 – June 2026 | Kolkata, India", role_meta_style)
    story.append(Table([[sun_l, sun_r]], colWidths=[392, 160], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(Paragraph("• Engineered full-stack features using <b>Java, Spring Boot, and Angular / Next.js</b>, creating secure and scalable RESTful endpoints.", bullet_style))
    story.append(Paragraph("• Optimized schemas with <b>PostgreSQL</b>; built stateless authentication & role-based authorization using <b>Spring Security & JWT</b>.", bullet_style))
    story.append(Paragraph("<i>Technologies:</i> Java, Spring Boot, Spring Security, Spring Data JPA, Angular, PostgreSQL, Git/GitHub", ParagraphStyle('TUsed2', parent=body_style, fontSize=7, textColor=colors.HexColor('#64748B'), spaceAfter=3)))

    # Remote Internship
    rem_l = Paragraph("<b>Experiential Learner Intern</b> — <i>Remote Internship</i>", role_title_style)
    rem_r = Paragraph("April 2025 – July 2025 | Remote", role_meta_style)
    story.append(Table([[rem_l, rem_r]], colWidths=[392, 160], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(Paragraph("• Performed <b>API security testing</b> using Postman & Burp Suite, identifying <b>10+ security vulnerabilities</b>; applied <b>OWASP Top 10</b> principles with Kali Linux verification.", bullet_style))
    story.append(Spacer(1, 3))

    # 4. Technical Skills
    add_section_header("Technical Competencies")
    skills_data = [
        [Paragraph("<b>Primary Languages:</b>", body_style), Paragraph("Java, C#, SQL", body_style)],
        [Paragraph("<b>Languages:</b>", body_style), Paragraph("Java, C#, JavaScript, Go, Python, SQL", body_style)],
        [Paragraph("<b>Backend & APIs:</b>", body_style), Paragraph("Spring Boot, Spring Security, Spring Data JPA, ASP.NET Core, Node.js, RESTful APIs, gRPC, JWT, FastAPI", body_style)],
        [Paragraph("<b>Frontend:</b>", body_style), Paragraph("React, Angular, Next.js, HTML5, CSS3, Tailwind CSS", body_style)],
        [Paragraph("<b>Databases & Caching:</b>", body_style), Paragraph("PostgreSQL, MySQL, MongoDB, SQLite, Redis, Oracle, NoSQL", body_style)],
        [Paragraph("<b>Distributed & DevOps:</b>", body_style), Paragraph("Apache Kafka, Kafka Streams, gRPC, Microservices, AWS, Docker, Git/GitHub, CI/CD, Maven, Postman, Swagger", body_style)],
        [Paragraph("<b>Security & Core CS:</b>", body_style), Paragraph("OWASP Top 10, Burp Suite, Kali Linux, API Testing, OOP, Data Structures & Algorithms, DBMS, Operating Systems, Networks", body_style)],
    ]
    story.append(Table(skills_data, colWidths=[120, 432], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ]))
    story.append(Spacer(1, 3))

    # 5. Key Engineering Projects
    add_section_header("Featured Engineering Projects")

    # Project 1: DocuSense
    p1_l = Paragraph("<b>DocuSense: Enterprise RAG Platform with Pre-Retrieval Security</b> &nbsp;|&nbsp; <a href='https://github.com/tapan2004/DocuSense' color='#059669'>GitHub</a>", role_title_style)
    p1_r = Paragraph("2026", role_meta_style)
    story.append(Table([[p1_l, p1_r]], colWidths=[462, 90], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(Paragraph("• Built secure multi-tenant document retrieval extracting RBAC claim boundaries from JWT signatures for pre-retrieval SQL filtering in pgvector; leveraged Java 21 Virtual Threads for concurrent chunking and Redis caching for <1ms query response times.", bullet_style))
    story.append(Paragraph("<i>Stack: Java 21, Spring Boot 4, Spring Security, Spring AI, PostgreSQL (pgvector), Redis, React, Docker</i>", ParagraphStyle('PS1', parent=body_style, fontSize=7, textColor=colors.HexColor('#64748B'), spaceAfter=2.5)))

    # Project 2: PayGuard
    p2_l = Paragraph("<b>PayGuard: Real-Time Payment Fraud Detection Pipeline</b> &nbsp;|&nbsp; <a href='https://github.com/tapan2004/PayGuard' color='#059669'>GitHub</a>", role_title_style)
    p2_r = Paragraph("2026", role_meta_style)
    story.append(Table([[p2_l, p2_r]], colWidths=[462, 90], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(Paragraph("• Engineered an asynchronous transaction stream using Apache Kafka Streams for real-time risk scoring and sliding-window event aggregation; designed composite PostgreSQL indexes achieving sub-10ms ledger query latency under sustained write load.", bullet_style))
    story.append(Paragraph("<i>Stack: Java 21, Spring Boot, Apache Kafka, Kafka Streams, PostgreSQL, Docker</i>", ParagraphStyle('PS2', parent=body_style, fontSize=7, textColor=colors.HexColor('#64748B'), spaceAfter=2.5)))

    # Project 3: DevSentinAI
    p3_l = Paragraph("<b>DevSentinAI: Event-Driven AI Code Review Engine</b> &nbsp;|&nbsp; <a href='https://github.com/tapan2004/DevSentinAI' color='#059669'>GitHub</a>", role_title_style)
    p3_r = Paragraph("2026", role_meta_style)
    story.append(Table([[p3_l, p3_r]], colWidths=[462, 90], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(Paragraph("• Built an automated PR review platform processing HMAC-validated GitHub webhooks asynchronously; created AST-aware code chunks stored in Redis Vector Store and used Spring AI to generate inline security and code quality review comments.", bullet_style))
    story.append(Paragraph("<i>Stack: Java 21, Spring Boot, Spring AI, Redis Vector Store, GitHub Webhooks, Docker</i>", ParagraphStyle('PS3', parent=body_style, fontSize=7, textColor=colors.HexColor('#64748B'), spaceAfter=2.5)))

    # Project 4: Personal Finance Tracker
    p4_l = Paragraph("<b>Personal Finance Tracker API</b> &nbsp;|&nbsp; <a href='https://github.com/tapan2004/FinanceTrackerApi' color='#059669'>GitHub</a>", role_title_style)
    p4_r = Paragraph("Jan 2026 – Feb 2026", role_meta_style)
    story.append(Table([[p4_l, p4_r]], colWidths=[462, 90], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(Paragraph("• Architected a Controller–Service–Repository backend with 15+ REST APIs, JWT authentication, automated Apache POI Excel report generation with Spring Scheduler, and automated budget alert emails via JavaMailSender.", bullet_style))
    story.append(Paragraph("<i>Stack: Java, Spring Boot, Spring Security, JPA/Hibernate, MySQL, Apache POI, Cloudinary, JWT</i>", ParagraphStyle('PS4', parent=body_style, fontSize=7, textColor=colors.HexColor('#64748B'), spaceAfter=3)))

    # 6. Education
    add_section_header("Education")
    edu_l = Paragraph("<b>Sister Nivedita University</b> — Kolkata, West Bengal, India<br/><i>Bachelor of Technology (B.Tech) in Computer Science & Engineering</i>", role_title_style)
    edu_r = Paragraph("Aug 2022 – June 2026<br/><b>First Class Degree (Graduated)</b>", role_meta_style)
    story.append(Table([[edu_l, edu_r]], colWidths=[392, 160], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(Spacer(1, 3))

    # 7. Certifications & Recognition
    add_section_header("Certifications & Key Recognition")
    certs_data = [
        [Paragraph("• <b>5-Star Java Badge</b> (HackerRank) — Validated advanced problem-solving proficiency in Java algorithms.", body_style), Paragraph("March 2024", role_meta_style)],
        [Paragraph("• <b>Junior Software Developer</b> (Amazon) — Professional backend engineering training covering enterprise software practices.", body_style), Paragraph("January 2026", role_meta_style)],
        [Paragraph("• <b>Data Structures & Backend with Java</b> (Board Infinity) — Spring Boot, JDBC, JPA, Hibernate, and REST APIs.", body_style), Paragraph("June 2025", role_meta_style)],
    ]
    story.append(Table(certs_data, colWidths=[462, 90], style=[
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ]))

    doc.build(story)
    print(f"Generated CV at: {output_path}")

if __name__ == '__main__':
    create_one_page_cv("public/Tapan_Manna_cv.pdf")
