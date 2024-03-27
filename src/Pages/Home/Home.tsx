import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'

export const Home = () => {

    // const features

    return (
        <section className="home">
            <div className="home-container">
                <aside className="sidebar">
                    <div className="company-name-section">
                        <h1>Frontend Mentor</h1>
                        <p>Feedback Board</p>
                    </div>
                    <div className="features-section">
                        <ul>
                            <li>All</li>
                            <li>UI</li>
                            <li>UX</li>
                            <li>Enhancement</li>
                            <li>Bug</li>
                            <li>Feature</li>
                        </ul>
                    </div>
                    <div className="roadmap">
                        <div className="section-name">
                            <h1>Roadmap</h1>
                            <Link to='/'>View</Link>
                        </div>
                        <div className="roadmap-categories">
                            <ul>
                                <div className="planned">
                                    <li>Planned</li>
                                    <span>2</span>
                                </div>
                                <div className="in-progress">
                                    <li>In-Progress</li>
                                    <span>1</span>
                                </div>
                                <div className="live">
                                    <li>Live</li>
                                    <span>3</span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </aside>
                <div className="feedback-feed">
                    <h1>THIS IS THE FEED SUCKER</h1>
                </div>
            </div>
        </section>
    )
}