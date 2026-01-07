const express = require("express");
const PdfPrinter = require("pdfmake/js/Printer").default;
const path = require("path");

const app = express();

const fonts = {
    Times: {
        normal: path.join(__dirname, "fonts/PTSerif-Regular.ttf"),
        bold: path.join(__dirname, "fonts/PTSerif-Bold.ttf"),
        italics: path.join(__dirname, "fonts/PTSerif-Italic.ttf"),
        bolditalics: path.join(__dirname, "fonts/PTSerif-BoldItalic.ttf"),
    },
};

const printer = new PdfPrinter(fonts);

// endpoint for the pdf generation
app.get("/pdf", async (req, res) => {
    

    const dd = {
        pageSize: 'A4',
        margin: [10, 10, 10, 10],
        content: [
            {
                text: "Pubayan Kapat", style: "header", fontSize: 18
            },
            {
                text: "Howrah, India-711314", alignment: "center", fontSize: 10,
            },
            {
                columns: [
                    {
                        width: 318,
                        text: 'Phone No.: +91-9875619185',
                        style: 'lStyle',
                        fontSize: 9
                    },
                    {
                        width: '*',
                        text: 'Email- pubayankapat@gmail.com',
                        fontSize: 9
                    }
                ],
                margin: [20, 0, 0, 0]
            },
            {
                columns: [
                    {
                        width: 318,
                        text: 'GitHub- github.com/pubayankapat',
                        link: 'http://github.com/pubayankapat',
                        style: 'lStyle',
                        fontSize: 9
                    },
                    {
                        width: '*',
                        text: 'Linked in- linkedin.com/in/pubayan-kapat',
                        link: 'http://linkedin.com/in/pubayan-kapat',
                        fontSize: 9
                    },
                ],
                margin: [20, 0, 0, 2],
                fontSize: 10
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ]
            },
            {
                text: "EDUCATION:", fontSize: 10
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ]
            },
            {
                columns: [
                    {
                        width: 360,
                        text: 'Masters of Computer Application(MCA)',
                        style: 'lStyle',
                        bold: true,
                        fontSize: 10
                    },
                    {
                        width: "*",
                        text: 'Oct,2023 - Jul,2025',
                        bold: true,
                        italics: true,
                        fontSize: 10
                    }
                ],
                margin: [20, 0, 0, 0],

            },
            {
                columns: [
                    {
                        width: 360,
                        text: 'University of Kalyani, Kalyani, Nadia, West Bengal',
                        style: 'lStyle',
                        bold: false,
                        fontSize: 10
                    },
                    {
                        width: '*',
                        text: 'CGPA: 8.23',
                        bold: false,
                        fontSize: 10
                    }
                ],
                margin: [20, 0, 0, 0],

            },
            {
                columns: [
                    {
                        width: 360,
                        text: 'B.Sc(Hons) in Computer Science',
                        style: 'lStyle',
                        bold: true,
                        fontSize: 10
                    },
                    {
                        width: '*',
                        text: 'Sep,2020 - Aug,2023',
                        bold: true,
                        italics: true,
                        fontSize: 10
                    }
                ],
                margin: [20, 0, 0, 0],

            },
            {
                columns: [
                    {
                        width: 360,
                        text: 'Shyampur Siddheswari Mahavidyalaya, Calcutta University',
                        style: 'lStyle',
                        bold: false,
                        fontSize: 9
                    },
                    {
                        width: '*',
                        text: 'CGPA: 8.108',
                        bold: false,
                        fontSize: 9
                    }
                ],
                margin: [20, 0, 0, 0],

            },
            {
                text: "EXPERIENCE:", marginTop: 4, fontSize: 10
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ]
            },
            {
                columns: [
                    {
                        width: 360,
                        text: 'The Skybrisk(Intern)',
                        style: 'lStyle',
                        bold: true,
                        fontSize: 9.5
                    },
                    {
                        width: '*',
                        text: 'Current',
                        bold: true,
                        italics: true,
                        fontSize: 9.5
                    }
                ],
                margin: [20, 0, 0, 0]
            },
            {
                stack: [
                    { text: "-Learned deeply MERN stack and other necessary technologies to pipeline a web application" },
                    { text: "-Learned necessary tech like JWT token based authenticatio,send notification & otp over email & mobile(Twilio)" },
                    { text: "-Also learning and managed in the production envioronment i.e, Aws s3, EC2 instance and security." },
                    { text: "-Contributed in some real world projects like Book management system and others." }
                ],
                margin: [40, 0, 0, 4],
                fontSize: 9
            },
            {
                text: "SKILLS:",
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ],
                margin: [0, 0, 0, 3]
            },
            {
                stack: [
                    { text: [{ text: "Programming Languages: ", bold: true }, 'Python[Advance], Jave(core)[Advance], C[Intermediate], C++[Beginner]'] },
                    { text: [{ text: "Web Tech: ", bold: true }, 'JavaScript[Advance], HTML5[Advance], TasilwindCSS[Beginner]'], marginTop: 5 },
                    { text: [{ text: "Database: ", bold: true }, 'Mongo DB[Advance], MySQL[Advance]'], marginTop: 5 },
                    { text: [{ text: "Library & Frameworks: ", bold: true }, 'Node js, Express, React.js, numpy, Pandas, Scikit-learn'], marginTop: 5 },
                    { text: [{ text: "Tools & platforms: ", bold: true }, 'VS Code, Git, GitHub, PostMan, Node, Gen-Ai, Google Colab, Eclipse'], marginTop: 5 },
                    { text: [{ text: "Course Work: ", bold: true }, 'OOPS, DBMS, DSA, ML'], marginTop: 5 },
                ],
                style: 'superMargin', fontSize: 9
            },
            {
                text: "PROJECTS:",fontSize: 10
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ]
            },
            {
                columns: [
                    {
                        width: 390,
                        text: "1. Chatrix",
                        bold: true,
                        fontSize: 11
                    },
                    {
                        width: '*',
                        text: "Aug,2025 - Nov,2025",
                        bold: true,
                        italics: true,
                        fontSize: 11,
                        style: 'lStyle'
                    }
                ]

            },
            {
                stack: [
                    { text: "-Developed a real-time chat Application using MERN stack (MongoDB, Express.js, React, Node.js) with Sockit.IO for instant bi-directional communication" },
                    { text: "-Implemented a modular backend srchitecture with otp based authentication using Node Mailer, chat rooms, message APIs, secure points." },
                    { text: "-Build  a robust UI using HTML, TailwindCSS to show message in container,smooth scorolling, profile card,edit profile." },
                    { text: "-Containerized both frontend and backend using Docker, built optimized production images, and orchastrated services using Docker Compose." },
                    { text: "-Build  a robust UI using HTML, TailwindCSS to show message in container,smooth scorolling, profile card,edit profile." },
                    { text: "-Deployed the application on AWS EC2(Ubuntu) with Nginx proxy and configured Elastic Ip & security groups." },
                    { text: "-Build  a robust UI using HTML, TailwindCSS to show message in container,smooth scorolling, profile card,edit profile." },
                    { text: "-Set up CI/CD-ready workflow for scalable update3s and developments using github action." },
                    { text: [{ text: 'Source Code:' }, { text: 'https://github.com/pubayankapat/RealTimeChatApp', link: 'https://github.com/pubayankapat/RealTimeChatApp' }], marginLeft: 25 },
                    { text: [{ text: 'Live Demo:' }, { text: 'http://chatrix.chickenkiller.com', link: 'http://chatrix.chickenkiller.com' }], marginLeft: 25 }
                ],
                style: 'superMargin',
                fontSize: 9
            },
            {
                columns: [
                    {
                        width: 390,
                        text: "2. Dynamic Cluster-Based Hierarchical Routing for Evolving graph",
                        bold: true,
                        fontSize: 11
                    },
                    {
                        width: '*',
                        text: "Oct,2024 - Jun,2025",
                        bold: true,
                        italics: true,
                        fontSize: 11,
                        style: 'lStyle'
                    }
                ]

            },
            {
                stack: [
                    { text: "-Researched and accounted pre-existing dynamic clustering algorithms and routing algorithms for evolving graph" },
                    { text: "-We have tried to integrate dynamic clustering and routing techniques to reduce computtaion overhead." },
                    { text: "-Lowered cluster recomputation overhead by 72%, scalling efficiently in large3 networks." },
                    { text: "-Engineered a routing framework for dynamic networks achieving 81% faster query resolution & 76.6% fewer node visits vs Dijkstra" },
                    { text: "-Reduced memory usage and maintained 89% routing stbility during reatl-time topology changes." },
                    { text: "-Balanced speed with accuracy, keeping path deviation< 18% while suporting evoving network structures." },
                    { text: [{ text: 'Source Code:' }, { text: 'https://github.copm/pubayankapat/Scalable_graph_handling', link: 'https://github.copm/pubayankapat/Scalable_graph_handling' }], marginLeft: 25 },
                ],
                style: 'superMargin',
                fontSize: 9
            },
            { text: 'CERTIFICATION & ACHIEVEMENTS:', fontSize: 10 },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ]
            },
            {
                ol: [
                    {
                        columns: [
                            {
                                width: 300,
                                text: 'Introduction to Artificial Intelligence',
                                style: 'lStyle',
                                bold: false,
                                marginLeft: 5,
                                fontSize: 9.8
                            },
                            {
                                width: '*',
                                text: 'Certificate',
                                style: 'lStyle',
                                bold: false,
                                link: 'Certificate',
                                fontSize: 9.8

                            },
                            {
                                width: '*',
                                text: 'July 21,2025',
                                style: "lStyle",
                                bold: true,
                                italics: true,
                                fontSize: 9.8
                            }
                        ],
                        style: 'superMargin',
                    },
                    {
                        columns: [
                            {
                                width: 300,
                                text: 'EF SET B1 intermediate certificate',
                                style: 'lStyle',
                                bold: false,
                                marginLeft: 5,
                                fontSize: 9.8
                            },
                            {
                                width: '*',
                                text: 'Certificate',
                                style: 'lStyle',
                                bold: false,
                                link: 'Certificate',
                                fontSize: 9.8

                            },
                            {
                                width: '*',
                                text: 'Aug 12,2025',
                                style: 'lStyle',
                                bold: true,
                                italics: true,
                                fontSize: 9.8
                            }
                        ],
                        style: 'superMargin',
                    },
                    {
                        columns: [
                            {
                                width: 390,
                                text: 'Wbjeca,2023 GMR rank - 285',
                                style: 'lStyle',
                                bold: false,
                                marginLeft: 5,
                                fontSize: 9.8
                            },

                            {
                                width: '*',
                                text: '2023',
                                style: 'lStyle',
                                bold: true,
                                italics: true,
                                fontSize: 9.8
                            }
                        ],
                        style: 'superMargin',
                    },
                    {
                        columns: [
                            {
                                width: 390,
                                text: 'Practice problem on platform like Leetcode & GFG.',
                                style: 'lStyle',
                                bold: false,
                                marginLeft: 5,
                                fontSize: 9.8
                            }
                        ],
                        style: 'superMargin',
                        
                    },

                ],
                fontSize:9.8
            },
            {
                text: 'SOFT SKILLS:', fontSize: 10
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ]
            },
            {
                text: 'Teamwork, Time Management, Problem solviing', style: 'superMargin', fontSize: 9.5
            },
            {
                text: "LANGUAGES:", fontSize: 10
            },
            {
                canvas: [
                    {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 515, y2: 0,
                        lineWidth: 2
                    }
                ],
                margin: [0, 0, 0, 2]
            },
            {
                text: 'English[Professional proficiency], Hindi[Professional proficiency], Bengali[Native proficiency]', fontSize: 9.5, style: 'superMargin'
            }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                alignment: "center"
            },
            lStyle: {
                fontSize: 12,
                alignment: 'left'
            },
            rStyle: {
                fontSize: 12,
                alignment: 'right'
            },
            superMargin: {
                margin: [20, 0, 0, 3],
            },
            line: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        },
        defaultStyle: { font: "Times" },

    };

    const pdf = await printer.createPdfKitDocument(dd);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
        "Content-Disposition",
        "inline; filename=resume.pdf"
    );

    pdf.pipe(res);
    pdf.end();
});

app.use((req,res)=>{
    res.send("Server working");
})
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
