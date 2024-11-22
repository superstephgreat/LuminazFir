import React from 'react';
import '../styles/Educational.css';

const Educational = () => {
    return (
        <div className="educational">
            <header className="educational-header">
                <h1>Learn & Save with Solar</h1>
                <p>Empowering you with knowledge to maximize solar energy and reduce your carbon footprint.</p>
            </header>

            <section className="content-section">
                <h2>Types of Educational Content</h2>
                <div className="content-cards">
                    <div className="card">
                        <h3>Solar 101</h3>
                        <p>A beginner's guide to understanding solar energy and its benefits.</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                    <div className="card">
                        <h3>Energy-Saving Tips</h3>
                        <p>Download resources or checklists to optimize your solar energy use.</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                    <div className="card">
                        <h3>Carbon Emissions Tracker</h3>
                        <p>Track your CO2 savings and monitor your environmental impact.</p>
                        <button className="learn-more-btn">Track Now</button>
                    </div>
                    <div className="card">
                        <h3>Solar System Maintenance</h3>
                        <p>Learn how to maintain your solar panels for long-term efficiency.</p>
                        <button className="learn-more-btn">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="interactive-tools">
                <h2>Interactive Tools</h2>
                <div className="tools">
                    <div className="tool">
                        <h3>Emissions Tracker</h3>
                        <p>Input your data and track your CO2 savings.</p>
                        <button className="tool-btn">Start Tracking</button>
                    </div>
                    <div className="tool">
                        <h3>Savings Calculator</h3>
                        <p>Estimate your savings on energy bills with solar power.</p>
                        <button className="tool-btn">Start Calculating</button>
                    </div>
                </div>
            </section>

            <section className="additional-resources">
                <h2>Additional Resources</h2>
                <ul>
                    <li><a href="#">FAQs & Troubleshooting</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Community Forum</a></li>
                </ul>
            </section>

            <footer className="cta-section">
                <p>Start learning now to make a positive impact!</p>
                <button className="cta-btn">Start Learning</button>
            </footer>
        </div>
    );
};

export default Educational;
